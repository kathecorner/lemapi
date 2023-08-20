const express = require("express");
const app = express();
const PORT = 8080;

app.listen(PORT, () => console.log("A server is running."));

const req = {
    "type": "individual",
    "individual":
    {
        "residentialAddress": {
            "street": "北海道札幌市北区麻布町",
            "city": "tokyo",
            "postalCode": "56782",
            "stateOrProvince": "29",
            "country": "JP"
        },
        "phone": {
            "type": "mobile",
            "countryCode": "JP",
            "number": "12345678801"
        },
        "name": {
            "firstName": "Ni",
            "lastName": "Ke"
        },
        "birthData": {
            "dateOfBirth": "1981-12-01"
        },
        "email": "dt44523@example.com"
    },
     "capabilities": {
        "localAcceptance": {
            "requested":true,
            "requestedLevel": "notApplicable"
        }  
    },
    "localization": {
        "firstName": {
            "ja-Kana": "キ鈴",
            "ja-Hani": "キ鈴"
        },
        "lastName": {
            "ja-Kana": "ス",
            "ja-Hani": "鈴"            
        }
    }
};

app.post("https://kyc-test.adyen.com/lem/v1/legalEntities", (req, res) => {
    res.send("well done.");
});