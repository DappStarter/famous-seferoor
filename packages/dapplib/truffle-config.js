require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena forward turtle crazy rifle night smile include kiwi symptom gaze'; 
let testAccounts = [
"0x2178c5c1f93a9e653f7e35973e5ed087f0e68d3e84bad740663291db54ec7b64",
"0x966049b49c8394a6911300d76a9a0672d59fadfca07f5d475f88c1c49b30b697",
"0x36114b40eb00a1cf91fcb01b337a04734e9818f5913216dc064cdfd8dc1bb83e",
"0x9b0254c502491b33302217723df80a61f9f56b9b11f78bbafbe3eac33c3ce883",
"0xa7a862bd5228c585dd4201e7747dc6aad52f7477c006372edf4bccdf97d335cd",
"0x79d6a867a0172a9c8f2a32364fdc20f978ffaf2b5cb54fd52ab3c6220fe6b23e",
"0x3ab0bcbadfaf79e201650dd27dc2534496e55b330fc7398c609ec752fbbeab5e",
"0xde5e153eab2b2d86c890afe6ae7507760f502ebb83769f67812e43a765b2f232",
"0x5a91a06931d9e9587ba9f40463f95f5c1a61d919e1274238fc79b02caa8c431b",
"0x79c77ddd8a27024a96c6cb5fdd5491b414c3ceeb535a683818afff12db74c5ac"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
