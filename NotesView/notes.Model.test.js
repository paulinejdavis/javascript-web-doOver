const NotesModel = require('./notesModel');

describe('NotesModel', () => {
    it('returns no notes', () => {
        const model = new NotesModel();
        expect(model.getNotes()).toEqual([]);
    });
    
    it('returns added notes to the list', () => {
        const model = new NotesModel();
        model.addNotes('Make that money');
        model.addNotes('Shine bright like a diamond');
        expect(model.getNotes()).toEqual(['Make that money', 'Shine bright like a diamond']);
    });

    it('resets the list of notes', () => {
        const model = new NotesModel();
        model.addNotes('Make that money');
        model.addNotes('Shine bright like a diamond');
        model.reset();
        expect(model.getNotes()).toEqual([]);
    });
});