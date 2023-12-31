const MAINNET ={
  url: 'https://main.confluxrpc.com',
  networkId: 1029,
  poolAddress: 'cfx:acgwp9vmrp7rfd5keg2x69a8y88aw84uc2paasu7cu',
  scanURL: 'https://confluxscan.io',
  nftAddress: 'cfxtest:achnjxz9rhvct9gsu87n54yept6zn9znt2mem6nmva',
  eSpaceAddress: '0x219728C73196876E0C610A21433D8C1CdB4b79aA',
  eSpaceRpc: 'https://evm.confluxrpc.com',
  eNetId: 1030,
}


const TESTNET = {
  url: 'https://test.confluxrpc.com',
  networkId: 1,
  poolAddress: 'cfxtest:acg3079bzpe754w6tfdagyxhs79v6y2pxpj1aj4jav',
  scanURL: 'https://testnet.confluxscan.io',
  nftAddress: 'cfxtest:achnjxz9rhvct9gsu87n54yept6zn9znt2mem6nmva',
  eSpaceAddress: '0x2f19b8BE8B9451ef07DB33363D248f4C6D0f1525',
  eSpaceRpc: 'https://evmtestnet.confluxrpc.com',
  eNetId: 71,
}

/* const TESTNET = {
  url: 'https://net8888cfx.confluxrpc.com',
  networkId: 8888,
  poolAddress: '0x8e38f187da01d54936142a5f209d05c7e85fadff',
  scanURL: 'https://net8888cfx.confluxscan.net',
  nftAddress: "",
  eSpaceAddress: '0x295b281c3Ee3382C48f01E7bec841d85981cB7a3',
  eSpaceRpc: 'http://net8889eth.confluxrpc.com',
  eNetId: 8889,
} */

let CURRENT = MAINNET;

var spaceStore = Vue.reactive({
  value: 'Core'
});

const configStore = Vue.reactive({
  value: CURRENT,  // 默认值
});

const navbarOption = {
  data() {
    return {
      space: spaceStore,
      config: configStore,
    }
  },

  methods: {
    changeSpace(space) {
      this.space.value = space;
    }
  }
};

Vue.createApp(navbarOption).mount('#navbar');