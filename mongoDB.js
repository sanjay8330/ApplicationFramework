use sliit

db.Student.insertOne({"name":"John","dateOfBirth":"1990-01-01T00:00:00Z","subjects":["Application Framework", "Computer architecture"]})

db.Student.find()

db.Student.find({name:"John"})

db.Student.find({"_id":ObjectId("603ce366ed477703768bf684")})

db.Student.update({"name":"John"},{$set:{"subjects":["Application Framework", "Computer architecture","Distributed Computing"]}})

db.Student.insertOne({"name":"Smith","dateOfBirth":"1990-01-15T00:00:00Z","subjects":["Application Framework", "Computer architecture"],"isActive":true})

db.Student.insertOne({"name":"Jane","dateOfBirth":"1990-02-15T00:00:00Z","subjects":["Application Framework", "Computer architecture"],"isActive":false})

db.Student.find({"name":"Smith","isActive":true})

db.Student.update({"name":"Smith"},{$set:{"subjects":["Application Framework", "Computer architecture","Distributed Computing"]}})

db.Student.remove({"name":"John"})

db.Student.update({"name":"Smith"},{$push:{"subjects":"ITP Module"}})

