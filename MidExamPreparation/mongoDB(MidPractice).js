use Student

db.faculty.insertOne({"name":"John","dateOfBirth":"1990-01-01T00:00:00Z","subjects":["Application frameworks", "Computer architecture"]})

db.faculty.find({"_id":ObjectId("605e867d9060976a70ba1cdf")})

db.faculty.update({"name":"John"},{$push:{"subjects":"Distributed Computing"}})

db.faculty.insertMany([{"name": "Smith", "dateOfBirth": "1990-01-15T00:00:00Z", "subjects": ["Application frameworks", "Computer architecture"], "isActive": true}, {"name": "Jane", "dateOfBirth": "1990-02-15T00:00:00Z", "subjects": ["Application frameworks", "Computer architecture"],"isActive": false}])

db.faculty.find({"name":"Smith","isActive":true})

db.faculty.update({"name":"Smith"},{$push:{"subjects":"Distributed Computing"}})

db.faculty.find({"name":"Smith"})

db.faculty.update({"name":"Smith"},{$set:{"isActive":false}})

db.faculty.remove({"name":"Smith"})
