require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install inhale fresh turn bitter birth pitch mistake install creek fresh gather'; 
let testAccounts = [
"0x364d622074dee4ca090867aa9bfa079de3fd73851101113cb0015f04d611f509",
"0x78e071140e69521c1642255e8d081861089aff04927de30883b2569511f44be4",
"0x29c76fc5fbb5cae862dad285df1da1825ad2823edbcb023be6d7080379572429",
"0xb0343fefff3bf9e95b6cba58d32e8deba36862cd150e44a773a102133e8189b2",
"0xa5024f21e581a85af601d424e56428fc831cd876b38b99117b343e9b6d11d6a9",
"0xbb68d9e612cfc746dd435c4227e91206600d1fc746f09be1b530cede0fa047a9",
"0x82eed121feeb8ffa815af7f037a4c413a7c15b090325fed79d38f52b570d3022",
"0x526671d2fa036d703d877ee3ed4d290378028cb48ad92ce1edb2f7a3fee50d6e",
"0xcf1fe2a6f7d89c4c4b71295367119cc2b779adaee803340628fa38c414d32d43",
"0x2950af48cab24a0b68148f3e71139c229058529078644ffa0697359502aa1c7a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

