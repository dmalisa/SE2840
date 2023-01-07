const mongoose = require("mongoose");
// exercise is the name of the database being created
const connection = mongoose.connect("mongodb://127.0.0.1:27017/exercise");

// user model
//movie is the name of a collection
const model = mongoose.model('movie', {id: Number, name: String, releaseDate: String, director: String});

//inserts the items into the database collection
model.insertMany([{id: 1, name: "Sherk", releaseDate: "April 2001", director: "Vicky Jenson"},
    {id: 2, name: "Red Notice", releaseDate: "November 2021", director: "Rawson Thurber"},
    {id: 3, name: "Spud", releaseDate: "December 2010", director: "Donavan Marsh"},
    {id: 4, name: "Hotel Transylvania: Tranformania", releaseDate: "January 2022", director: "Jennifer Kluska"},
    {id: 5, name: "Jumanji", releaseDate: "December 2019", director: "Jake Kasdan"},
    {id: 6, name: "Bad moms", releaseDate: "July 2016", director: "Jon Lucus"},
    {id: 7, name: "Horrible Bosses", releaseDate: "July 2011", director: "Seth Gordon"}]).then(() => {
    console.log("saved successfully");
}).catch((error) => {
    console.log("an error occurred " + error);
})

//updates the last three items in the collection
model.updateMany({id: {$gte: 5}}, {$set: {releaseDate: "February 2015"}}).then((data) => {
    console.log("Update successful");
}).catch((error) => {
console.log("an error occurred "+ error);
})

//deletes two items from the collection
model.deleteOne({name: "Spud"}).then(() => {
    console.log("deleted successfully");
}).catch((error) => {
    console.log("Error occurred");
})
model.deleteOne({name: "Bad moms"}).then(() => {
    console.log("deleted successfully");
    model.find().then((data) => {
        console.log(data);
    })
}).catch((error) => {
    console.log("Error occurred");
})

//filters the movies from before 2022 and prints only those
model.find({releaseDate: {$lt: "2022"}}).then((data)=>{
    console.log("success");
    model.find().then((data)=>{
        console.log(data);
    })
}).catch((error)=>{
    console.log("error");
});