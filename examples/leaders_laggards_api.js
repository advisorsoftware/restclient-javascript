var url= "https://sandbox.advisorsoftware.com:443/v1/leaders_laggards" 
formData = "{\r\n   \"portfolios\": [\r\n        {\r\n            \"portfolioName\": \"Portfolio A\",\r\n            \"holdings\": [\r\n                {\r\n                    \"symbol\": \"IVV\"\r\n                },\r\n                {\r\n                    \"symbol\": \"IWM\"\r\n                },\r\n                {\r\n                    \"symbol\": \"VWO\"\r\n                },\r\n                {\r\n                    \"symbol\": \"AGG\"\r\n                }\r\n            ]\r\n        },\r\n        {\r\n            \"portfolioName\": \"Portfolio B\",\r\n            \"holdings\": [\r\n                {\r\n                    \"symbol\": \"AAPL\"\r\n                },\r\n                {\r\n                    \"symbol\": \"CAT\"\r\n                },\r\n                {\r\n                    \"symbol\": \"GS\"\r\n                }\r\n            ]\r\n        }\r\n    ]\r\n}"
var xmlhttp = new XMLHttpRequest()
xmlhttp.open("POST",url, true);
xmlhttp.setRequestHeader("Accept": "application/json)",
xmlhttp.setRequestHeader("Content-Type": "application/json)",
xmlhttp.setRequestHeader("Authorization": "ASI_CLIENT client_id={YOUR CLIENT ID HERE} client_secret={YOUR CLIENT SECRET HERE})",
xmlhttp.send(formData);
xmlhttp.send();
console.log(xmlhttp.status);
console.log(xmlhttp.statusText);
