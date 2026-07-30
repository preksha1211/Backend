use ('shopDB')


//and operator
// db.products.find(
//     {$and : [{category:'beauty'},{price:{$lt:12.99}}]},
//     {title:1 ,category:1,price:1}
// )

//shortcut of and

// db.products.find( {category:'beauty', price:{$lt : 12.99}},{title:1 , category:1, price:1});

//or

// db.products.find({$or:[{category:'beauty'},{price:{$gt:12.99}}]},{price:1,category:1})


db.products.find(
  {
    $not: [
      { category: 'beauty' },
      { price: { $gt: 12.99 } }
    ]
  },
  { price: 1, category: 1 }
)