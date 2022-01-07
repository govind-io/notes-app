import * as fs from "fs";
import loadnotes from "./Utils.js";
export default function AddNotes(title, body) {
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
