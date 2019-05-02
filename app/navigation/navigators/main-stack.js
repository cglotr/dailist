import { createStackNavigator } from 'react-navigation'
import { Add, Home } from 'dl/screens'

export default createStackNavigator(
  {
    Add,
    Home
  },
  {
    initialRouteName: 'Home'
  }
)