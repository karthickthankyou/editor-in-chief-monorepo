import { useQuery } from '@apollo/client'
import { View, Text } from 'react-native'
import { ArticlesDocument } from '../gql/generated'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native'
import { Link } from 'expo-router'

export default function NewsList() {
  const { loading, error, data, previousData } = useQuery(ArticlesDocument)
  const navigation = useNavigation()
  if (loading) {
    return <Text>Loading...</Text>
  }

  if (error) {
    return <Text>Error: {error.message}</Text>
  }
  return (
    <FlatList
      data={data?.articles}
      renderItem={({ item }) => (
        // @ts-ignore
        <Link href={{ pathname: 'NewsDetail', params: { newsId: item.id } }}>
          <View>
            <Text>{item.title}</Text>
            <Text>{new Date(item.createdAt).toLocaleDateString()}</Text>
            <Text>{item.tags.join(', ')}</Text>
          </View>
        </Link>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}
