import { RouteProp } from '@react-navigation/native'
import { View, Text } from '../components/Themed'
import { useLocalSearchParams } from 'expo-router'
import { useQuery } from '@apollo/client'
import { ArticleDocument } from '../gql/generated'

export default function NewsDetail() {
  const params = useLocalSearchParams()

  const newsId = params?.newsId
  const { data, loading } = useQuery(ArticleDocument, {
    variables: { where: { id: +newsId } },
  })

  if (loading) {
    return <Text>Loading...</Text>
  }
  console.log('newsId ', newsId)
  return (
    <View>
      <Text>{data?.article.title}</Text>
      <Text>{data?.article.body}</Text>
    </View>
  )
}
