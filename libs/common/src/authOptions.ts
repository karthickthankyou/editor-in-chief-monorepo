import { CreateUserDocument, UserDocument } from '@eic/network/src/generated'
import jwt from 'jsonwebtoken'
import { NextAuthOptions, getServerSession } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import GoogleProvider from 'next-auth/providers/google'
import { fetchGraphQL } from './fetch'

const MAX_AGE = 1 * 24 * 60 * 60

export const authOptions: NextAuthOptions = {
  providers: [
    // Remove the CredentialsProvider block if you don't need it
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  debug: true,
  session: {
    strategy: 'jwt',
    maxAge: MAX_AGE,
  },
  jwt: {
    maxAge: MAX_AGE,
    async encode({ token, secret }): Promise<string> {
      // Create a JWT using the jsonwebtoken library
      if (!token) {
        throw new Error('Token is undefined')
      }

      const { sub, ...tokenProps } = token
      // Get the current date in seconds since the epoch
      const nowInSeconds = Math.floor(Date.now() / 1000)

      // Calculate the expiration timestamp
      const expirationTimestamp = nowInSeconds + MAX_AGE
      const jwtToken = jwt.sign(
        { uid: sub, ...tokenProps, exp: expirationTimestamp },
        secret,
        {
          algorithm: 'HS256',
        },
      )
      return jwtToken
    },
    async decode({ token, secret }): Promise<JWT | null> {
      if (!token) {
        throw new Error('Token is undefined')
      }
      try {
        const decodedToken = jwt.verify(token, secret, {
          algorithms: ['HS256'],
        })
        return decodedToken as JWT
      } catch (error) {
        console.error('JWT decode error', error)
        return null
      }
    },
  },

  callbacks: {
    async signIn({ user }) {
      const { id: uid, name, image } = user

      const existingUser = await fetchGraphQL({
        document: UserDocument,
        variables: {
          where: { uid },
        },
      })

      if (!existingUser.data?.user.uid) {
        const newUser = await fetchGraphQL({
          document: CreateUserDocument,
          variables: {
            createUserInput: { uid, image, name: name || '' },
          },

          apiSecret: process.env.INTERNAL_API_SECRET,
        })
        console.log('!!! newUser ', newUser)
      }
      return true
    },
    async session({ token, session }) {
      if (token) {
        session.user = {
          image: token.picture,
          uid: (token.uid as string) || '',
          email: token.email,
          name: token.name,
        }
      }
      return session
    },
  },

  pages: {
    signIn: '/signin',
  },
}

export const getAuth = () => getServerSession(authOptions)
