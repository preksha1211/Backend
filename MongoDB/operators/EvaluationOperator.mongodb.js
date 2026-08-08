use ('practiceDB')

//regex

// db.farms.find({
//   name: {$regex: "Farm$"}
// })

// db.farms.find({
//   name: { $regex: "river", $options: "i" }
// });

//exp

// db.farms.find({$expr:{$gt:["$income",50000]}})

db.farms.find({
  $expr: { $gt: ["$income", "$area"] }
});
