/*************************************

[rewrite_local]
^https?:\/\/purchase-soda-api\.snow\.me\/v\d\/purchase\/subscription\/subscriber\/status url script-response-body https://raw.githubusercontent.com/0OOOOOOOOO/OOO/main/SODA+.js

[mitm]
hostname = purchase-soda-api.snow.me

*************************************/


var Parr = JSON.parse($response.body);

Parr.result = {
  "products" : [
    {
      "managed" : false,
      "status" : "CANCELLED",
      "startDate" : 1688988287000,
      "productId" : "com.snowcorp.soda.subscribe.oneyear",
      "expireDate" : 4092599349000
    }
  ],
  "activated" : true
};

$done({body : JSON.stringify(Parr)});
