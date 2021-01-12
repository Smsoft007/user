var serverInfo = {};

serverInfo['WALLET_NAME'] = 'Tagie Wallet';
serverInfo['CN_UPPER'] = 'TAGIE';
serverInfo['CN_PASCAL'] = 'Tagie';
serverInfo['ALT_COIN_TITLE'] = 'Tagiecoin';
serverInfo['ALT_COIN_UNIT'] = 'TIC'
serverInfo['REDIS_ON'] = false;

serverInfo['REDIS'] = {
  address: 'localhost',
  port: 6379
}
serverInfo.initialize = function() {
  app = require('../app');
  serverInfo['ROOT_PATH'] = app.rootDir;
  serverInfo['MAIL_FORM_FILE_PATH'] = app.rootDir + '/views/';
}
serverInfo['BTC'] = {
  host: '127.0.0.1',
  port: 8332,
  user: 'smsoft',
  pass: '0x0db251aC78FBb4040809F070aB73A813Bab7635d',
  timeout: 15000
}
serverInfo['USDTB'] = {
  host: '138.68.50.214',
  port: 8332,
  user: 'USER',
  pass: 'PASS',
  timeout: 15000
}
serverInfo['ADMIN_BTC'] = {
  host: '167.99.7.146',
  port: 8332,
  username: 'bit_wallet',
  password: 'bit_0220wallet',
  timeout: 30000
}
serverInfo['MSSQL'] = {
  user: 'GOLDENCOW_NODE_USER',
  password: 'GOLDENCOW_NODE_PW_0111',
  //server: 'localhost',
  server: '113.35.179.28',
  port: '1433',
  database: 'GOLDENCOW'
};
// serverInfo['MSSQL'] = {
//   user: 'GOLD_NODE_USER',
//   password: 'GOLD_NODE_PW_0721',
//   server: '106.240.242.154',
//   port: '1433',
//   database: 'GOLDDUCK'
// };
var CoinType = require('../lib/coinHelper').CoinType;

serverInfo['COIN-INFO'] = [{
  name: 'ETH',
  type: CoinType.ETH
}, {
  name: 'BTC',
  type: CoinType.BIT
}, {
  name: 'USDTB',
  type: CoinType.BIT
}];

serverInfo['JSONRPC'] = {
  pendingTime: 1000 * 60 * 2
};
serverInfo['KEYDIR'] = 'D:/node/GlodDuck'
// serverInfo['KEYDIR'] = appRoot
serverInfo['UPLOADIMAGEPATH'] = 'D:/adminServer/views/img/product/'
serverInfo['ADMINADDR'] = '0xd3603a115a8544f2fcbbb6f108fcbe3b964f5561'
serverInfo['COIN_RATE'] = {
  BTC: "https://api.coinhills.com/v1/cspa/btc/",
  ETH: "https://api.coinhills.com/v1/cspa/eth/"
};

module.exports = serverInfo;
