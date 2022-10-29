const model = require('./notesModel');
const client = require('./notesClient');


class NotesView {
    constructor(model, client) {
        this.model = model;
        this.client = client;

        this.mainContainerEl = document.querySelector('#main-container');

        this.addNoteButton = document.querySelector('#add-note-btn');
        this.resetNoteButton = document.querySelector('#reset-note-btn');
        

        this.addNoteButton.addEventListener('click', () => {
            const note = document.querySelector('#note-input');
            this.client.createNote((note.value), () => {
             this.callbackError();
            });

            this.addNote(note.value);

            note.value = '';
        });

        this.resetNoteButton.addEventListener('click', () => {
            this.client.resetNotes(() => {
                this.callbackError();
            });
             this.resetPastNotes();
        });
    }

    displayNotes() {
        this.resetNotes();
        const everyNote = this.model.getNotes();
        
    
        // document.querySelectorAll('.note').forEach(element => {
        //     element.remove();
        // });
        
        // const notes = this.model.getNotes();

        notes.forEach(note => {
            const noteEl = document.createElement('div');
            noteEl.textContent = note;
            noteEl.className ='note';
        this.model.getNotes().forEach(note => {
            const div = document.createElement('div');
            div.innerText = note;
            div.className = 'note';
           
            this.mainContainerEl.append(div);
        });

    displayNotesFromAPI = () => {
        this.client.loadNotes((notes) => {
            this.model.setNotes(notes);
            this.displayNotes();
        }, () => {
            this.displayError();
        });
    }
    
    addNote = (note) => {
        this.model.addNotes(note);
        this.displayNotes();
        // const inputEl = document.querySelector('#note-text-box');
        // this.model.addNoteToModel(inputEl.value);
        // this.client.createNote(inputEl.value, () => {}, () => this.displayError());
        // inputEl.value = ''
        // const notes = document.querySelectorAll('div.note');
        // notes.forEach(note => note.remove());
        // this.displayNotes();
    }

    displayError = () =>{
        const errorEl = document.createElement('div');
        errorEl.textContent = 'Error';
        errorEl.className = 'error-message';
        this.mainContainerEl.append(errorEl);
        // const div = document.createElement('div');
        // div.innerText = 'Problems loading notes';
        // div.className = 'error';
        // this.mainContainerEl.append(div);
     }
    }

    resetPastNotes = () => {
        const pastNotes = document.querySelectorAll('div.note');
        pastNotes.forEach(note => note.remove());
    }

 });

module.exports = NotesView;