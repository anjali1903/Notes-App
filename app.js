const notes = require("./notes.js")
const yargs = require('yargs')

yargs.version('1.1.0')
//add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe:'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title,argv.body)
    }
})

//remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//list command
yargs.command({
    command: 'list',
    describe: 'Lists out notes',
    handler() {
        console.log("Listing out all note titles")
        notes.listNotes()
    }
})

//read command
yargs.command({
    command: 'read',
    describe: 'Rads out notes',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})

// add, remove, read, list


yargs.parse()