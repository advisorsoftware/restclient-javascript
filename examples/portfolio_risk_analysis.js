var url= "https://sandbox.advisorsoftware.com:443/v1/portfolio_risk_analysis" 
formData = "{\r\n  \"portfolios\": [\r\n    {\r\n      \"targetPortfolioFlag\": true,\r\n      \"portfolioName\": \"target portfolio\",\r\n      \"cashBalance\" : 0,\r\n      \"holdings\": [\r\n        {\r\n          \"symbol\": \"IVV\",\r\n          \"holdingValue\": 2000\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      \"targetPortfolioFlag\": false,\r\n      \"portfolioName\": \"some portfolio\",\r\n      \"cashBalance\" : 500,\r\n      \"holdings\": [\r\n        {\r\n          \"symbol\": \"IBM\",\r\n          \"holdingValue\": 1500\r\n        }\r\n      ]\r\n    }\r\n  ]\r\n}"
var xmlhttp = new XMLHttpRequest()
xmlhttp.open("POST",url, true);
xmlhttp.setRequestHeader("Accept": "application/json)",
xmlhttp.setRequestHeader("Content-Type": "application/json)",
xmlhttp.setRequestHeader("Authorization": "ASI_CLIENT client_id={YOUR CLIENT ID HERE} client_secret={YOUR CLIENT SECRET HERE})",
xmlhttp.send(formData);
xmlhttp.send();
console.log(xmlhttp.status);
console.log(xmlhttp.statusText);
