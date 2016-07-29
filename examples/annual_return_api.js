var url= "https://sandbox.advisorsoftware.com:443/v1/annual_returns/ar" 
formData = "{\r\n    \"timePeriod\": \"5\",\r\n    \"calculationRule\": \"proxy\",\r\n    \"portfolios\": [\r\n        {\r\n            \"portfolioName\": \"Portfolio A\",\r\n            \"cashBalance\": \"20000\",\r\n            \"holdings\": [\r\n                {\r\n                    \"symbol\": \"IVV\",\r\n                    \"holdingValue\": \"40000\"\r\n                },\r\n                {\r\n                    \"symbol\": \"AGG\",\r\n                    \"holdingValue\": \"40000\"\r\n                }\r\n            ]\r\n        },\r\n        {\r\n            \"portfolioName\": \"portfolio B\",\r\n            \"cashBalance\": \"10000\",\r\n            \"holdings\": [\r\n                {\r\n                    \"symbol\": \"IVV\",\r\n                    \"holdingValue\": \"90000\"\r\n                }\r\n            ]\r\n        },\r\n        {\r\n            \"portfolioName\": \"portfolio C\",\r\n            \"cashBalance\": \"10000\",\r\n            \"holdings\": [\r\n                {\r\n                    \"symbol\": \"AGG\",\r\n                    \"holdingValue\": \"90000\"\r\n                }\r\n            ]\r\n        }\r\n    ]\r\n}"
var xmlhttp = new XMLHttpRequest()
xmlhttp.open("POST",url, true);
xmlhttp.setRequestHeader("Accept": "application/json)",
xmlhttp.setRequestHeader("Content-Type": "application/json)",
xmlhttp.setRequestHeader("Authorization": "ASI_CLIENT client_id={YOUR CLIENT ID HERE} client_secret={YOUR CLIENT SECRET HERE})",
xmlhttp.send(formData);
xmlhttp.send();
console.log(xmlhttp.status);
console.log(xmlhttp.statusText);
