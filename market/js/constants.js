var Constants = (function(Constants, $, undefined) {

  Constants.isTestnet = false;

  var mainnetUSDXId = '12723610184347724870';
  var testnetUSDXId = '9429933812817993614';
  Constants.USDXId = mainnetUSDXId;

  if(Constants.isTestnet)
  {
    Constants.USDXId = testnetUSDXId;
  }

  Constants.usdxName = "a:" + Constants.USDXId;

  Constants.apiUrl = 'http://localhost:2022/nxt';
  
  // 2 weeks default listing duration
  Constants.listingDurationDefault = 2 * 7 * 24 * 60 * 60;
  // 4 weeks extended listing duration
  Constants.listingDurationExtended = 4 * 7 * 24 * 60 * 60;
  // listing fees (for information only)
  Constants.listingFeeDefault = 0;
  Constants.listingFeeExtended = 0;

  return Constants;
} (Constants || {}, jQuery));
