const API = 'https://bakesaleforgood.com';

export default {
  async fetchInitialDeal() {
    try {
      const response = await fetch(API + '/api/deals');
      const deals = await response.json();

      return deals;
    } catch (error) {
      console.log(error);
      console.error(error.message);
    }
  },
  async searchDeal(searchTerm) {
    try {
      const response = await fetch(API + '/api/deals?searchTerm=' + searchTerm);
      const deals = await response.json();

      return deals;
    } catch (error) {
      console.log(error);
      console.error(error.message);
    }
  },
};
