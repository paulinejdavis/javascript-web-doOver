/**
 * @jest-environment jsdom
 */
// require('jest-fetch-mock').enableMocks();

const fs = require('fs');

const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
// const NotesClient = require('./notesClient');

describe('NotesView', () => {

    beforeEach(() => {
        document.body.innerHTML = fs.readFileSync('./index.html');
    });
   
    it('it returns div notes', () => {

        const model = new NotesModel();
        const view = new NotesView(model);

        model.addNotes('Note 1');
        model.addNotes('Note 2');
        view.displayNotes();
        view.displayNotes();
        expect(document.querySelectorAll('div.note').length).toBe(2);
    });

    xit('displays notes from Client', () => {
        const model = new NotesModel();
        const freshClient = {
            loadNotes: (callback) => {
                callback(['This note is from the server, bitches']);
            }
        }
        const view = new NotesView(model, freshClient);

        view.displayNotesFromAPI();
        expect(document.querySelectorAll('div.note').length).toEqual(1);
        expect(document.querySelectorAll('div.note')[0].textContent).toEqual('This note is from the server, bitches');
    });



    // it('displays new notes', () => {
    //     // document.body.innerHTML = fs.readFileSync('./index.html');
  
    //         const model = new NotesModel();
    //         const view = new NotesView(model);
    //         model.addNoteToModel('Note 1');
    //         model.addNoteToModel('Note 2');
    //         view.displayNotes();
    //         expect(document.querySelectorAll('.note').length).toEqual(2);

            // const input = document.querySelector('#add-note-input');
            // input.value = 'An amazing new note';

            // const button = document.querySelector('#add-note-btn');
            // button.click();

            // expect(document.querySelectorAll('div.note').length).toEqual(1);
            // expect(document.querySelectorAll('div.note')[0].textContent).toEqual('An amazing new note');
            // });

    // it('displays an empty page if no notes', () => {
    //     const model = new NotesModel();
    //     const view = new NotesView(model);
    //     view.displayNotes();
    //     expect(document.querySelectorAll('.note').length).toEqual(0);
        // xit('displays a note when called twice', () => {
        //     document.body.innerHTML = fs.readFileSync('./index.html');
          
            
        //     const model = new NotesModel();
        //     const view = new NotesView(model);
        //     model.addNote('One');
        //     model.addNote('Two');
        //     view.displayNotes();
        //     expect(document.querySelectorAll('div.note').length).toEqual(2);
         
    // });
    xit('updates the list of notes when a new note is added', () => {
        const model = new NotesModel();
        const client = new NotesClient();
        const view = new NotesView(model, client);

        const inputEl = document.querySelectorAll('#note-text-box');
        inputEl.value = 'A note';

        const buttonAddNote = document.querySelector('#add-note-btn');
       buttonAddNote.click();
       buttonAddNote.click();
       

        const notes = document.querySelectorAll('.note');
        expect(notes.length).toEqual(2)
    });

    xit('fetches notes thru client class', (done) =>{
        const model = new NotesModel();
        const api = {
            loadNotes: ((callback) => {
            })
        };


        const view = new NotesView(model, client);

        view.displayNotesFromAPI();

        setTimeout(() => {
            const note = documenty.querySelector('.note');
            expect(note.innerText).toEqual('This is a note');
            done();
        }, 0)
    });

    xit('shows an error message if there is no contact with the server', (done) => {
        const model = new NotesModel();
        // const client = {
        //     loadNotes: (_, callbackError) => {
        //         callbackError();
        //     },
        // };
        const view = new NotesView(model);

        view.displayError();
        expect(document.querySelector('div.error').textContent).toEqual('Ouch');
        
    });
});
