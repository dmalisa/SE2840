const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://127.0.0.1:27017/bustracker");

// user model
const model = mongoose.model('buses', {rt: String, vid: String, spd: Number, tmstmp: String, lat: String, lon: String});


model.find({spd: {$gte: 21}}).then(()=>{
    console.log("success");
    model.find().then((data)=>{
        console.log(data);
    })
}).catch((error)=>{
    console.log("error" + error);
})