const Bukalapak = require('./Bukalapak');
const Tokopedia = require('./Tokopedia');

class Product {

  search(keyword, marketplaceName = null) {
    let results = [];

    if (marketplaceName == null) {
      const marketplaces = [new Bukalapak(), new Tokopedia()];

      for (let marketplace of marketplaces) {
        let products = marketplace.search(keyword);
        results.push(products);
      }
    } else {
      switch (marketplaceName) {
        case 'bukalapak':
          let products = new Bukalapak().search(keyword);
          results.push(products);
          break;
        case 'tokopedia':
          let products = new Tokopedia().search(keyword);
          results.push(products);
          break;
      }
    }

    return results;
  }
}

module.exports = Product;
