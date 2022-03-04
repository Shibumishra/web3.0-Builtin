// https://eth-ropsten.alchemyapi.io/v2/HTXn_LM3mFT-u-R1QdPMjXgbTkiLS8G9

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/HTXn_LM3mFT-u-R1QdPMjXgbTkiLS8G9',
      accounts: ['93e309b2406e4f1a3957e7fad1748fe827c817d18e4823c3157dbf5044642016'],
    },
  },
};