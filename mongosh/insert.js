// insert one record
db.my_data.insertOne({ name: "vincent", appareance_no: "1" })

// insert many records
db.my_data.insertMany(
    [
        { name: "thomas", appareance_no: "2" },
        { name: "bill", appareance_no: "3" },
        { name: "blake", appareance_no: "4" },
        { name: "G", appareance_no: "5" },
        { name: "Ruben", appareance_no: "6" },
        { name: "Carter", appareance_no: "7" },
    ]
)
