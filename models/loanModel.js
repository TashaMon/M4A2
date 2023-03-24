const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema(
  {
    customerName: {
        type: String,
        required: [true, 'A customer name must have a name'],
        unique: true,
        trim: true,
        maxlength: [40, 'A customer name must have less or equal then 40 characters'],
        minlength: [10, 'A customer name must have more or equal then 10 characters']
     
    },
    phoneNumber: {
        type: Number,
        required: [true, 'A customer from must have a phone name'],
        unique: true,
        trim: true,
        maxlength: [11, 'A phone number from  must be 11 characters']
    },
    address: {
        type: String,
        required: [true, 'A customer must have an address'],
        unique: true,
        trim: true,
        maxlength: [40, 'An address  must have less or equal then 50 characters'],
        minlength: [10, 'An address  must have more or equal then 10 characters']
    },
    loanAmount: {
        type: Number
    },
    interest: {
        type: Number
    },
    loanTermYears: {
        type: Number
    },
    loanType: {
        type: String,
        required: [true, 'A loan must have a type'],
        unique: true,
        trim: true,
        maxlength: [20, 'An address  must have less or equal then 20 characters'],
        minlength: [1, 'An address  must have more or equal then 1 characters']
    },
    description: {
        type: String,
        required: [true, 'A description must have loan details'],
        unique: true,
        trim: true,
        maxlength: [40, 'A description  must have less or equal then 40 characters'],
        minlength: [5, 'A description  must have more or equal then 5 characters']
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    insertedDate: {
        type: Date,
        default: Date.now
    }

});
const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
