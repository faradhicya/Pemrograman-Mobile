import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
      submittedText: '',
    };
  }

  handleSubmit = () => {
    this.setState({
      submittedText: this.state.inputText,
    });
  };

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>
          Silakan Masukkan Teks
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ketik sesuatu..."
          placeholderTextColor="#888888"
          value={this.state.inputText}
          onChangeText={(text) =>
            this.setState({ inputText: text })
          }
        />

        <Button
          title="Submit"
          onPress={this.handleSubmit}
        />

        {this.state.submittedText !== '' && (
          <View style={styles.resultContainer}>

            <Text style={styles.label}>
              Teks yang Anda masukkan:
            </Text>

            <Text style={styles.result}>
              {this.state.submittedText}
            </Text>

          </View>
        )}

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
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },

  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#888888',
    borderRadius: 8,
    paddingHorizontal: 15,
    color: '#000000',
    marginBottom: 20,
  },

  resultContainer: {
    marginTop: 30,
    alignItems: 'center',
  },

  label: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 10,
  },

  result: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
});