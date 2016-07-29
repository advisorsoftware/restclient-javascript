var url= "https://sandbox.advisorsoftware.com:443/v1/rebalancer" 
formData = "{\r\n    \"accountId\": \"1234-4567\",\r\n    \"holdings\": [\r\n        {\r\n            \"aggregatedHoldings\": [\r\n                {\r\n                    \"assetId\": \"IVV\",\r\n                    \"quantity\": 100000\r\n                }\r\n            ]\r\n        }\r\n    ],\r\n    \"modelPortfolio\": [\r\n        {\r\n            \"modelHoldings\": [\r\n                {\r\n                    \"assetId\": \"IVV\",\r\n                    \"weight\": 1\r\n                }\r\n            ]\r\n        }\r\n    ],\r\n    \"securityPriceList\": [\r\n        {\r\n            \"securityPrices\": [\r\n                {\r\n                    \"assetId\": \"IVV\",\r\n                    \"price\": 100\r\n                }\r\n            ]\r\n        }\r\n    ]\r\n}"
var xmlhttp = new XMLHttpRequest()
xmlhttp.open("POST",url, true);
xmlhttp.setRequestHeader("Accept": "application/json)",
xmlhttp.setRequestHeader("Content-Type": "application/json)",
xmlhttp.setRequestHeader("Authorization": "ASI_CLIENT client_id={YOUR CLIENT ID HERE} client_secret={YOUR CLIENT SECRET HERE})",
xmlhttp.send(formData);
xmlhttp.send();
console.log(xmlhttp.status);
console.log(xmlhttp.statusText);
