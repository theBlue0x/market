var Constants = (function(Constants, $, undefined) {
  Constants.isTestnet = false;
  var mainnetUSDXId = '140920958558858512';
  var testnetUSDXId = '';
  Constants.USDXId = mainnetUSDXId;
  if(Constants.isTestnet)
  {
    Constants.USDXId = testnetUSDXId;
  }
  Constants.apiUrl = 'https://wallet.blue0x.com/nxt';
  return Constants;
} (Constants || {}, jQuery));
