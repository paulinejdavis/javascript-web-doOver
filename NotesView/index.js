// index.js
const NotesModel = require("./notesModel");
const NotesView = require("./notesView");
const NotesClient = require("./notesClient");

console.log('Is this working?');

const client = new NotesClient();
const model = new NotesModel();
const view = new NotesView(model,client);

view.displayNotesFromAPI();

const addButton = document.getElementById("add");

// console.log(model.getNotes());

// model.addNote('This is an example note');

