//import { createRequire } from 'module';
//const require = createRequire(import.meta.url);
//load DOM objects from index.html
const formDOM = document.querySelector(".task-form");



console.log("here");

//define the LEM API
/*
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
};*/

const url = "https://kyc-test.adyen.com/lem/v2/legalEntities";

const data = {
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



const apiResult = async () => {

    try{
        await fetch(url, {
        headers: {
            Authorization: "Basic " + btoa("ws12345@Scope.Company_TestJpIsaCompany" + ":" + "yen"),
            Accept: "application/json",
            "Content-Type": "application/json;charset=utf-8"

        },
        method: "POST",
        body: JSON.stringify(data)
      });
    

    }catch(err){
        console.log(err);
    }  
}



//triggers from index.html0

const addLegalEntity = async () => {
    try{
        //
        await request.post(options, function(error, response, body){
            console.log(body);
        });
        

    }catch (err){
        console.log(err);
    }
};

apiResult();