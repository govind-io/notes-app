import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import logmsg from "./Alert.js";
import { AddNotes, deletenotes, listnotes } from "./NotesUtils.js";
const checkvalidation = (id, all) => {
  if (id && all) {
    logmsg("dan", "Please select only one option");
    process.exit();
  } else if (!id && !all) {
    logmsg("dan", "Please select at least one option");
    process.exit();
  }
};

yargs(hideBin(process.argv))
  .command(
    "Add",
    "Adding Notes",
    {
      title: {
        describe: "Note Title",
        demandOption: true,
        type: "string",
      },
      body: {
        describe: "Note Body",
        demandOption: true,
        type: "string",
      },
    },
    (argv) => {
      logmsg("any", "Adding Notes");
      AddNotes(argv.title, argv.body);
      logmsg("sus", "Notes Added");
    }
  )
  .command(
    "Delete",
    "Deleting Notes",
    {
      id: {
        describe: "Note id",
        demandOption: false,
        type: "string",
      },
      all: {
        describe: "Delete All Notes",
        demandOption: false,
      },
    },
    (argv) => {
      checkvalidation(argv.id, argv.all);
      logmsg("any", "Deleting Notes");
      if (argv.id) {
        deletenotes(argv.id);
      } else if (argv.all) {
        deletenotes("all");
      }
      logmsg("sus", "Deleted Notes");
    }
  )
  .command(
    "List",
    "List Notes",
    {
      id: {
        describe: "Note id",
        demandOption: false,
        type: "integer",
      },
      all: {
        describe: "List All Notes",
        demandOption: false,
      },
    },
    (argv) => {
      checkvalidation(argv.id, argv.all);
      logmsg("any", "Extracting notes");
      if (argv.id) {
        listnotes(argv.id);
      } else if (argv.all) {
        listnotes("all");
      }
      logmsg("sus", "Your Notes are");
    }
  )
  .demandCommand(1)
  .parse();

const command = process.argv[2];

export { command };
