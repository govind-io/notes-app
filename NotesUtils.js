import * as fs from "fs";
import logmsg from "./Alert.js";

const loadnotes = () => {
  let notes = fs.readFileSync("./Data/Notes.json");
  notes = notes.toString();
  notes = JSON.parse(notes);
  return notes;
};

function AddNotes(title, body) {
  var notes = loadnotes();
  let ids = Object.keys(notes);
  let newId = 0;
  if (ids.length) {
    newId = parseInt(ids[ids.length - 1]) + 1;
  } else {
    newId = 1;
  }

  notes[newId] = { title: title, body: body };
  notes = JSON.stringify(notes);
  fs.writeFileSync("./Data/Notes.json", notes);
}

const deletenotes = (id) => {
  let notes = loadnotes();
  if (id === "all") {
    notes = {};
  } else {
    if (notes[id]) {
      console.log(notes);
      delete notes[id];
    } else {
      logmsg("dan", "No log with this id was found");
      process.exit();
    }
  }
  notes = JSON.stringify(notes);
  fs.writeFileSync("./Data/Notes.json", notes);
};

const listnotes = (id) => {
  let notes = loadnotes();
  if (id === "all") {
    let ids = Object.keys(notes);
    ids.forEach((element) => {
      logmsg("any", `\nTitle: ${notes[element].title}`);
      console.log(notes[element].body, "\n");
    });
  } else {
    if (notes[id]) {
      logmsg("any", `\nTitle: ${notes[id].title}`);
      console.log(notes[id].body, "\n");
    } else {
      logmsg("dan", "No log with this id was found");
      process.exit();
    }
  }
};

export { deletenotes, AddNotes, listnotes };
