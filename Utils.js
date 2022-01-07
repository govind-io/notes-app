import * as fs from "fs";

const loadnotes = () => {
  let notes = fs.readFileSync("./Data/Notes.json");
  notes = notes.toString();
  notes = JSON.parse(notes);
  return notes;
};

export default loadnotes;
