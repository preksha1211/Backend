use ('myuser')

// db.users.insertMany([
//     {name:'mkl',age:21},{name:'manas'},{age:33},{name:'rohan',age:21},{name:'sohan',age:22},{name:'puneet',age:33}
// ])

// db.users.find({age:{$exists:false}});


db.users.find({
  age: {
    $type: "string"
  }
});