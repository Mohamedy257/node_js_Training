const notes = require('./notes.js')
const yargs = require('yargs')
const { removeNote, listNotes, readNote } = require('./notes.js')

yargs.command({
    command :'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'title of the note',
            demandOption : true,
            type: 'string'
        },
        body:{
            describe:'body of the note',
            demandOption : true,
            type: 'string'
        },
    },
    handler : function(argv){
         notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command :'remove',
    describe: 'Remove the note',
    builder:{
        title: {
        describe: 'Title of the note to be removed',
        demandOption: true,
        type: 'string'
        }
    },
    handler : function(argv){
        removeNote(argv.title)
    }
})

yargs.command({
    command :'list',
    describe: 'List all notes',
    handler : function(){
        listNotes()
    }
})

yargs.command({
    command :'read',
    describe: 'Reading the notes',
    builder:{
        title:{
            describe: 'read title from the user',
            demandOption: true,
            type: 'string'
        }
    },
    handler : function(argv){
        readNote(argv.title)
    }
})

yargs.parse();
