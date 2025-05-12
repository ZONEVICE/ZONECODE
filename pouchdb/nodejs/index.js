const PouchDB = require('pouchdb');
const db = new PouchDB('my_pouchdb_data');

(async () => {
    // Element to save.
    const object_literal_element = {
        _id: new Date().toISOString(),
        title: "test",
        completed: false
    }
    // Saves element into database.
    const result = await db.put(object_literal_element);
    // Retrieves data from database.
    const all = await db.allDocs({ include_docs: true, descending: true });
    console.log('Result of put')
    console.log(result)
    console.log('Result of all')
    console.log(all)
})()
