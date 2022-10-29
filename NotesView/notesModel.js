class NotesModel {
    constructor() {
        this.notes = [];
    }

    getNotes = () =>{
        return this.notes;
    }

    addNotes=(note) =>{
       return this.notes.push(note);
    }
    reset = () => {
        this.notes = [];
    }
    setNotes = (notes) =>{
        this.notes = notes;
    }
}
module.exports = NotesModel;