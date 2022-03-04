const router = require('express').Router();
const { notes } = require('../../db/db');
const { createNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    let getNote = notes;
    res.json(getNote);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const newNote = createNote(req.body, notes);
    res.json(newNote);
});

// router.delete('/notes/:id', (req, res) => {
//   const { id } = req.params;
//   const pro
    
// });

module.exports = router;