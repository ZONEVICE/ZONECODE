// use pits

// creates a collection for "pits" database
db.createCollection("my_data")

// inserts a record into the collection
db.my_data.insertOne({ repository: "ZONECODE", study: "mongosh" })
