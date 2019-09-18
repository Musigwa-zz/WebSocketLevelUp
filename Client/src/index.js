import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import socket from './services/socketIO';

export default class App extends Component {
  state = { connected: socket.connected };

  componentDidMount() {
    const { connected } = this.state;
    if (!connected) socket.connect();
    socket.on('connect', () => {
      this.setState({ connected: true });
    });
    socket.on('disconnect', () => {
      this.setState({ connected: false });
    });
  }

  render() {
    const { connected } = this.state;
    if (connected)
      socket.emit('message', { title: 'HUG', description: 'Hi how are you?' });
    return (
      <View style={styles.container}>
        <Text> {`Connected: ${connected}`} </Text>
        <Text> Application ready </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
