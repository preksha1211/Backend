use("practiceDB");

// db.farms.insertMany([
//   { name: "Green Farm", area: 5, workers: 4, income: 50000 },
//   { name: "River Farm", area: 10, workers: 8, income: 90000 },
//   { name: "Hill Farm", area: 3, workers: 2, income: 30000 },
//   { name: "Sun Farm", area: 7, workers: 5, income: 70000 }
// ]);

// db.farms.find({area : {$gt : 5}});

// db.farms.find({income : {$lt : 70000}})

// db.farms.find({workers:{$gte:4}})

// db.farms.find({area:{$lte:7}})

// db.farms.find({income:{$ne:50000}})

db.farms.find({area:{$lte:10 , $gte : 5}})