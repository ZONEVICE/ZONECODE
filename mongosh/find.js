// Find all documents.
db.movies_hamper_happy.find({})

// Find specific document.
db.movies_hamper_happy.find({"director": "Tyler El Hijo de Perra"})

// Less than operator.
db.purchase.find({"username": "Tyler El Hijo de Perra", "quantity": { $lt: 20 }})