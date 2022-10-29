const NotesClient = require('./notesClient');

require('jest-fetch-mock').enableMocks();

describe('NotesClient', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    xit('fetches notes from the API', (done) => {
        const client = new NotesClient();
        fetch.mockResponseOnce(JSON.stringify({
            name: 'Certain value',
            id: 432
        }));
         
        
        client.loadNotes((returnedNotes) => {
            expect(returnedNotes.name).toBe('Certain value');
            expect(returnedNotes.id).toBe(432);
            done();
        })
    })

    // it('saves a note to server', (done) => {
    //     const client = new NotesClient();

    //     const note = 'New note';
    //     fetch.mockResponseOnce(JSON.stringify({
    //         content: note
    //      })
    //     );

    //     client.createNote(note, (returnedNotes) => {
    //         expect(returnedNotes.content).toEqual(note);
    //         done();
    //     });
    // });
});

//npm install --save jest-fetch-mock