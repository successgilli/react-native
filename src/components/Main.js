import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import debounce from 'lodash.debounce';

import ajax from '../ajax';

import DealList from './DealList';
import DealDetails from './DealDetails';
import SearchInput from './SearchInput';

class Main extends React.Component {
  state = {
    deals: [],
    currentDealId: null,
    searchedDeals: [],
  };

  setMainState = (key, value) => {
    this.setState(() => ({
      [key]: value,
    }));
  };

  async componentDidMount() {
    const deals = await ajax.fetchInitialDeal();
    this.setMainState('deals', deals);
  }

  pressAction = (dealId) => {
    this.setState((prevState) => ({
      ...prevState,
      currentDealId: dealId,
    }));
  };

  getDeal = () => {
    return this.state.deals.find(
      (item) => item.key === this.state.currentDealId,
    );
  };

  searchDeals = async (searchTerm) => {
    const searchedDeals = await ajax.searchDeal(searchTerm);

    console.log(searchedDeals, 'sexxx');
    this.setState({
      searchedDeals,
    });
  };

  handleDebaounce = debounce(this.searchDeals, 1000);

  handleSearch = (searchTerm) => {
    console.log(searchTerm);
    // this.searchDeals(searchTerm);
    this.handleDebaounce(searchTerm);
  };

  render() {
    const {deals, currentDealId, searchedDeals} = this.state;

    if (currentDealId) {
      return (
        <DealDetails
          onBack={() => this.pressAction(null)}
          initialDealData={this.getDeal()}
        />
      );
    }

    if (deals.length) {
      const availableDeals = searchedDeals.length ? searchedDeals : deals;

      return (
        <View style={styles.container}>
          <SearchInput handleChange={this.handleSearch} />
          <DealList pressAction={this.pressAction} deals={availableDeals} />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Bakesale</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#eee',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
  },
});
export default Main;
