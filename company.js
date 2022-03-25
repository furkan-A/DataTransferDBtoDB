const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    _id : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    companyName: { type: String },
    companyForm: { type: String },
    description: { type: String },
    speciality: { type: String },
    companyType: { type: String },
    companyTypeOther: { type: String },
    code: { type: String },
    slug: { type: String },
    status: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId },
    updatedBy: { 
        type: mongoose.Schema.Types.ObjectId
    },
    registerAddress: { type: String },
    registerPostCode: { type: String },
    registerCity: { type: String },
    registerState: { type: String },
    registerCountry: { type: String },
    principalPlaceAddress: { type: String },
    principalPlacePostCode: { type: String },
    principalPlaceCity: { type: String },
    principalPlaceState: { type: String },
    principalPlaceCountry: { type: String },
    isSamePrincipalPlace: { type: Boolean },
    totalMember: { type: Number },
    arrivalDueDay: { type: Number },
    arrivalDueHour: { type: Number },
    paymentTerm: { type: Number },
    standardPaymentTerm: { type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date },
    exportedAt : {
        type: Date, 
        default: Date.now,
    },
    location: [ { type: Number } ]
});

const Company = mongoose.model('Company', CompanySchema);
module.exports = Company;