import {
  Merriweather,
  Merriweather_Sans,
  EB_Garamond,
  Baskervville,
  Oswald,
} from 'next/font/google'

export const merriweather = Merriweather({
  weight: '900',
  subsets: ['cyrillic'],
})

export const fontMerriweather = merriweather.className

export const merriweather700 = Merriweather({
  weight: '700',
  subsets: ['cyrillic'],
})

export const fontMerriweather700 = merriweather700.className

export const merriweatherSans400 = Merriweather_Sans({
  weight: '400',
  subsets: ['latin'],
})

export const fontMerriweatherSans400 = merriweatherSans400.className

export const merriweatherSans300 = Merriweather_Sans({
  weight: '300',
  subsets: ['latin'],
})

export const fontMerriweatherSans300 = merriweatherSans300.className

export const osswald = Oswald({
  weight: '700',
  subsets: ['latin'],
})

export const fontOsswald = osswald.className
export const baskervville = Baskervville({
  weight: '400',
  subsets: ['latin'],
})

export const fontBaskervville = baskervville.className
export const garamond = EB_Garamond({
  weight: '800',
  subsets: ['cyrillic'],
})

export const fontGaramond = garamond.className
