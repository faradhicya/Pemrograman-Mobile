import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Home Page</Text>

        <Button
          title="GOTO ABOUT PAGE"
          onPress={() => this.props.navigation.navigate('About')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EFF5',
    paddingTop: 40,
  },
  text: {
    fontSize: 14,
    color: '#555555',
    backgroundColor: '#FFFFFF',
  },
});