use("practiceDB");

// db.crops.insertMany([
//  {
//     name: "Wheat",
//     season: "Rabi",
//     price: 2500,
//     inStock: true
//   },
//   {
//     name: "Rice",
//     season: "Kharif",
//     price: 3200,
//     inStock: true
//   },
//   {
//     name: "Mustard",
//     season: "Rabi",
//     price: 4500,
//     inStock: true
//   },
// ])

// db.crops.find();

// db.crops.find({seasons:'Rabi'});

// db.crops.find({price:{$gt:3000}})

// 

// db.crops.updateOne({name:'Wheat'},{$set:{price:2800}})

// db.crops.updateMany({season:'Rabi'},{$set:{category:"Winter crop"}})

// 

db.crops.deleteOne({name:'Rice'})

db.crops.deleteOne({price:{$gt:4000}})