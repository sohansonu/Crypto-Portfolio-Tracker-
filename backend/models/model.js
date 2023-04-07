const mongoose = require('mongoose');

mongoose.connect('localhost')
.then(()=>{console.log("DB CONNECTED")}).catch((err) => {console.log(err)}).catch(()=>{
    console.log("connection with DB failed.");
})



const profileSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    bio:String
},
{
    timestamps:{
        createdAt:true,
        updatedAt:true
    }
});

const holdingsSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    quanitity: Number,
    symbol_name:{
        type:String,
        maxLength:255
    },
    amount_spent: Number
},
{
    timestamps:{
        createdAt:true,
        updatedAt:true
    }
});

const transactionSchema = new mongoose.Schema({
    auto_increment_id:{
        type:Number,
        unique:true,
        required:true
       },
    username:{
        type:String,
        required:true
    },
    symbol: {
        type:String,
        maxLength:255
    },
    symbol_name:{
        type:String,
        maxLength:255
    },
    quanitity:Number,
    price:{
        type:Number,
        max:99999999
    },
    date:Date,
    buy_sell:{
        type:String,
        maxLength:255
    }
},
{
    timestamps:{
        createdAt:true,
        updatedAt:true
    }
});

const addreminderSchema = new mongoose.Schema({
   auto_increment_id:{
    type:Number,
    unique:true,
    required:true
   },
   username:{
    type:String,
    required:true
    },
    price:{
        type:Number
    },
    above_below:{
        type:String,
        enum:['Above','Below'],
        default:'Below'
    },
    notes:{
        type:String,
        maxLength:100000
    }
},
{
    timestamps:{
        createdAt:true,
        updatedAt:true
    }
});



exports.profile = mongoose.model('profile',profileSchema);
exports.holdings = mongoose.model('holdings',holdingsSchema);
exports.transaction = mongoose.model('transacion',transactionSchema);
exports.addreminder = mongoose.model('addreminder',addreminderSchema);