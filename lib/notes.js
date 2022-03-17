const path = require("path");
const fs = require("fs");

function createNote(body, notes) {

    const note = body;

    notes.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    )

    return note;
};

function findById(id, notes) {
    const result = notes.filter(notes => notes.id === id)[0];
    return result;
}



module.exports = { 
    createNote,
    findById
 };