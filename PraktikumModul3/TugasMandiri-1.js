import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowingText: false,
    };
  }

  toggleText = () => {
    this.setState(previousState => ({
      isShowingText: !previousState.isShowingText,
    }));
  };

  render() {
    return (
      <View style={styles.container}>

        {this.state.isShowingText && (
          <Text style={styles.text}>Hello World</Text>
        )}

        <Button
          title={
            this.state.isShowingText
              ? 'Sembunyikan'
              : 'Tampilkan'
          }
          onPress={this.toggleText}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  text: {
    fontSize: 24,
    color: '#000000',
    marginBottom: 20,
  },
});

