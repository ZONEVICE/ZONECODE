// use pits

// creates a collection for "pits" database
db.createCollection("my_data")

// inserts a record into the collection. collections are SQL Server table equivalent.
db.my_data.insertOne({ repository: "ZONECODE", study: "mongosh" })
// output
/* 
{
  acknowledged: true,
  insertedId: ObjectId('668c1169f557391f650f6b8b')
}
*/

// insert many.
// source: https://www.mongodb.com/docs/manual/tutorial/getting-started/
// input
db.movies_gee_gee.insertMany([
    {
        title: "Titanic",
        year: 1997,
        genres: ["Drama", "Romance"],
        rated: "PG-13",
        languages: [
            "English",
            "French",
            "German",
            "Swedish",
            "Italian",
            "Russian",
        ],
        released: ISODate("1997-12-19T00:00:00.000Z"),
        awards: {
            wins: 127,
            nominations: 63,
            text: "Won 11 Oscars. Another 116 wins & 63 nominations.",
        },
        cast: [
            "Leonardo DiCaprio",
            "Kate Winslet",
            "Billy Zane",
            "Kathy Bates",
        ],
        directors: ["James Cameron"],
    },
    {
        title: "The Dark Knight",
        year: 2008,
        genres: ["Action", "Crime", "Drama"],
        rated: "PG-13",
        languages: ["English", "Mandarin"],
        released: ISODate("2008-07-18T00:00:00.000Z"),
        awards: {
            wins: 144,
            nominations: 106,
            text: "Won 2 Oscars. Another 142 wins & 106 nominations.",
        },
        cast: [
            "Christian Bale",
            "Heath Ledger",
            "Aaron Eckhart",
            "Michael Caine",
        ],
        directors: ["Christopher Nolan"],
    }
])
// output
/*
{
    acknowledged: true,
    insertedIds: {
      '0': ObjectId('668c1136f557391f650f6b87'),
      '1': ObjectId('668c1136f557391f650f6b88'),
      '2': ObjectId('668c1136f557391f650f6b89'),
      '3': ObjectId('668c1136f557391f650f6b8a')
    }
  }
*/