use ('practiceDB')

// db.farms.find({
//     category:{$exists:false}
// // })

db.farms.find({
    area:{$type: "number"}
})