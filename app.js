const fileReader = require('fs');
const mongoose = require('mongoose');
const Company = require('./company');
const { MongoClient } = require('mongodb');

const uri = 'database_address_from_which_you_want_to_pull_data';
const client = new MongoClient(uri);
const dbName = 'frupro-stg';
var docs;
async function main() {

    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('companies');
    docs = await collection.find({}).toArray();
    // console.log('All documents =>', docs);
    // console.log('last documents =>', docs[docs.length-2]);
    
}

main().then(() => {

    mongoose.connect("mongodb://localhost/your_db").then(()=>{
        console.log("Success: Local DB connected");
    }).catch((error) => {
        console.log(`Fail: Local DB connection error: ${error}`);
    });
    var a = 0;
    docs.forEach(company => {
        createCompany(company);
        a++;
    });
    console.log(`added ${a} company`);
})
.catch((error) => {
    console.log(`Fail: Server connection error: ${error}`);
})
.finally(() => client.close());

// var file = fileReader.readFileSync('./company-fields.json');
// const data = JSON.parse(file); 

var createCompany = async (data) => {
    await Company.create({
        _id: data._id,
        companyName: data.companyName,
        companyForm: data.companyForm,
        description: data.description,
        speciality: data.speciality,
        companyType: data.companyType,
        companyTypeOther: data.companyTypeOther,
        code: data.code,
        slug: data.slug,
        status: data.status,
        user: data.user,
        updatedBy: data.updatedBy,
        registerAddress: data.registerAddress,
        registerPostCode: data.registerPostCode,
        registerCity: data.registerCity.name,
        registerState: data.registerState.name,
        registerCountry: data.registerCountry.name,
        principalPlaceAddress: data.principalPlaceAddress,
        principalPlacePostCode: data.principalPlacePostCode,
        principalPlaceCity: data.principalPlaceCity.name,
        principalPlaceState: data.principalPlaceState.name,
        principalPlaceCountry: data.principalPlaceCountry.name,
        isSamePrincipalPlace: data.isSamePrincipalPlace,
        totalMember: data.totalMember,
        arrivalDueDay: data.arrivalDueDay,
        arrivalDueHour: data.arrivalDueHour,
        paymentTerm: data.paymentTerm,
        standardPaymentTerm: data.standardPaymentTerm,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        exportedAt: Date.now(),
        location: data.location
    });
    // .then(()=> console.log('success: company added'))
    // .catch((e)=>console.log(`error: ${e}`));
}
