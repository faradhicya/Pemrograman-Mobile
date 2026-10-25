import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>About Page</Text>

        <Button
          title="GO BACK"
          onPress={() => this.props.navigation.goBack()}
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