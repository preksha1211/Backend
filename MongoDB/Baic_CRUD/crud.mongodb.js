use ('shopDB')


//Create 

//one document create
//  db.products.insertOne({
//     name:'seeds',
//     price:500,
//     inStock: true
//  })


//multiple document create
//  db.products.insertMany([
//     {name : "fertilizer",price:1200},
//     {name:"tractor" , price:6700},

//  ])

//read

//saare documents
// db.products.find();

//specific document :case sensitive
// db.products.findOne({name : "seeds"})

//filtered document
// db.products.find({price:{$lt:2000}})

//Update

//update only firstone

// db.products.updateOne(
//     {name:'seeds'},{$set:{price:600}}
// )

//mutiple documents update krna

// db.products.updateMany({inStock:true},{$set : {available:true}})

//deletion

// db.products.deleteOne({name:"seeds"})

// db.products.deleteMany({instock:false})

//delete all collections data

db.products.deleteMany({});