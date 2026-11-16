import { StatusBar, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {

  //return <Redirect href={'/home'} />

  return (
    <SafeAreaView className='mt-10 ml-10' >
      <Text style={{ fontFamily: 'WorkSans-Black' }} className='text-4xl text-secondary-100'>Texto 1</Text>
      <Text className='text-3xl font-work-medium text-blue-500'>Texto 2</Text>
      <Text className='text-2xl font-work-light text-secondary-200'>Texto 3</Text>
      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  )
}

export default App