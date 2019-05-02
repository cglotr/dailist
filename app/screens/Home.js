import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

export default class extends Component {
  render () {
    return (
      <View
        style={
          {
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center'
          }
        }
      >
        <Text>Home Screen</Text>
        <Button
          onPress={
            () => {
              this.props.navigation.navigate('Add')
            }
          }
          title='Add'
        />
      </View>
    )
  }
}
