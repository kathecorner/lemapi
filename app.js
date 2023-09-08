const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.static("./public"));


app.listen(PORT, console.log("a server is running..."));

var request = require('request');
var options = {
  uri: "https://kyc-test.adyen.com/lem/v2/legalEntities",
  auth: {
    user: "ws12345@Scope.Company_TestJpIsaCompany",
    password: "yen"
  },
  headers: {
    "Content-type": "application/json",
  },
  json: {
    "type": "individual",
    "individual":
    {
          "residentialAddress": {
            "street": "北海道札幌市北区麻布町１−１",
            "postalCode": "1234567",
            "country": "JP"
        },
     "phone": {
          "number": "+81234567880"
        },
        "birthData": {
            "dateOfBirth": "1981-12-01"
        }
    },
     "capabilities": {
        "localAcceptance": {
            "requested":true,
            "requestedLevel": "notApplicable"
        }  
    },
    "localization": {
        "fullName": {
            "ja-Kana": "サクラタナカ単価",
            "ja-Hani": "桜田中"
        }
    }
}
};
request.post(options, function(error, response, body){
    console.log(body);
});

module.exports = request;