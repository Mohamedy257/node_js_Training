const fs = require('fs')
const getNotes = function(){
    return 'my notes'
}

const addNote = (title , body) => {
    var notes = loadNotes()
    const dublicateNote = notes.find(
        (note) => note.title === title)

    if (dublicateNote){
        notes.push({
            title: title,
            body: body
        })
        
        saveNotes(notes)
        console.log('Note Added')
    }
    else
    {
        console.log('Note Already Exist')
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}

const removeNote = (title) => {
    const notes = loadNotes();
    const filteredNotes = notes.filter((note) => {
        if(note.title !== title)
        {
            return note
        }
    })
    console.log(filteredNotes)
    saveNotes(filteredNotes)
}

const loadNotes = () => {
    try{
        const databuffer = fs.readFileSync('notes.json')
        const data = databuffer.toString()
        return JSON.parse(data)
    } catch(e){
        return []
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log('Title\tBody')
    console.log('------------')
    notes.forEach((note) => {
        console.log(note.title+'\t'+note.body)
    })
}

const readNote = (title) => {
    debugger;
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note)
    {
        console.log(note)
        return note
    }
    console.log('No Note Found!')
    
    
}
module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}