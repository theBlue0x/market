var Constants = (function(Constants, $, undefined) {
  Constants.isTestnet = false;
  var mainnetUSDXId = '17257434280636505020';
  var testnetUSDXId = '';
  Constants.USDXId = mainnetUSDXId;
  if(Constants.isTestnet)
  {
    Constants.USDXId = testnetUSDXId;
  }
  Constants.apiUrl = 'http://35.196.115.87:2022/nxt';
  return Constants;
} (Constants || {}, jQuery));
