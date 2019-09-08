const fs= require('fs')

const addNote = (title,body) =>{
    const notes=loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if(!duplicateNote) {
        notes.push ({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log("New note added!")

    }
    else{
        console.log("Note title taken!")
    }    
}

const removeNote = (title) =>{
    const notes= loadNotes()
    const notesToKeep = notes.filter((note)=> note.title !== title)
    saveNotes(notesToKeep)
    console.log("Note removed!")    
}

const listNotes = () =>{
    const notes = loadNotes()
    for(var i=0;i<notes.length;i++){
        console.log(notes[i].title)
    }
}

const readNotes = (title) => {
    const notes=loadNotes()
    const foundNote= notes.find((note) => note.title===title)
    if(!foundNote){
        console.log("No notes found")
    }
    else{
        console.log("Title: "+foundNote.title)
        console.log("Body: "+foundNote.body)
    }

} 

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch(e) {
        return []
    }
    
}



module.exports= {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
};