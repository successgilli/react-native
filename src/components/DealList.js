import React from 'react';

import Proptypes from 'prop-types';

import {View, Text, StyleSheet, FlatList} from 'react-native';

import DetailsItem from './DetailsItem';

class DealList extends React.Component {
  static propTypes = {
    deals: Proptypes.array.isRequired,
    pressAction: Proptypes.func.isRequired,
  };

  render() {
    const {deals} = this.props;
    return (
      <View style={styles.list}>
        <FlatList
          data={deals}
          renderItem={({item}) => (
            <DetailsItem pressAction={this.props.pressAction} deal={item} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flex: 1,
    marginHorizontal: 10,
    // marginVertical: 20,
    // paddingTop: 50,
  },
});

export default DealList;
