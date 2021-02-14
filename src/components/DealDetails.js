import React from 'react';

import Proptypes from 'prop-types';

import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {converToDols} from '../util';

class DetailsItem extends React.Component {
  static propTypes = {
    initialDealData: Proptypes.shape({}).isRequired,
    onBack: Proptypes.func.isRequired,
  };

  state = {
    deal: this.props.initialDealData,
  };

  render() {
    const {deal} = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.onBack}>
          <Text style={{color: 'blue', marginBottom: 5}}>Back</Text>
        </TouchableOpacity>
        <Image style={styles.image} source={{uri: deal.media[0]}} />
        <View style={styles.info}>
          <Text style={styles.title}>{deal.title}</Text>
          <View style={styles.footer}>
            <Text>{converToDols(deal.price)}</Text>
            <Text>{deal.cause.name}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
  },
  container: {
    marginTop: 80,
    marginBottom: 20,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: '#bbb',
  },
  info: {
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
});

export default DetailsItem;
