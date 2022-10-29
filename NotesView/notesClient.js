class NotesClient {

    loadNotes(callback, callbackError) {
        fetch('http://localhost:3000/notes')
            .then(response => response.json())
            .then(data => {
                callback(data)
            })
                
            .catch(error => {
                callbackError(error)
            })
    }

    createNote = (note, callbackError) => {
        // const noteObject = { content: note };

        fetch('http://localhost:3000/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({content: note})
        })
        .then((response) => response.json())
        .then((data) => {
            // callback(data);
            console.log('running',data);
        })
        .catch((error) => {
            // console.log(error);
            callbackError(error);
        });

    }

    resetNotes = (callbackError) => {
        fetch('http://localhost:3000/notes/reset', {
            method: 'DELETE',
            })
        // .then((response) => response.json())
        .then((data) => {
            console.log('running', data);
        })
        .catch((error) => {
            callbackError(error);
        });
    }
    
}
module.exports = NotesClient;