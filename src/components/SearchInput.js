import React from 'react';

import Proptypes from 'prop-types';

import {Text, StyleSheet, View, TextInput} from 'react-native';

class SearchInput extends React.Component {
  static propTypes = {
    handleChange: Proptypes.func.isRequired,
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={this.props.handleChange}
          style={styles.input}
          placeholder="Search for deals"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
    marginTop: 30,
    width: '100%',
    marginHorizontal: 12,
    padding: 10,
  },
  input: {
    height: 50,
    fontSize: 20,
  },
});

export default SearchInput;
