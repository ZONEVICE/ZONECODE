// Delete one single document.
db.games.deleteOne({'title': 'Netherlands 2080'})
// output
// { acknowledged: true, deletedCount: 1 }