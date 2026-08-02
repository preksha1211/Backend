use ('practiceDB')

//and
// db.farms.find({
//     area:{$gte:5},
//     income: {$lt:80000}

// })

//or
// db.farms.find({
//     $or : [
//         {area : {$lt: 5}},
//         {income: {$gt: 8000}}

//     ]
// })

// Di hui values mein se koi value:
// db.farms.find({
//     area:{$in: [3, 5, 10]}
// })

// . NIN
// Di hui values mein se koi bhi nahi:


// db.farms.find({
//   area: { $nin: [3, 5] }
// });


db.farms.find({$or:[
    {area:{$gt:5}},
{workers:{$lt:4}}
]})

db.farms.find({$or:[
    {
    area:{$gt:5},income:{$lt:80000}
   },
    {worksers:{$eq:2}}
]})