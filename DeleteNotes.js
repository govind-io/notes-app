import * as fs from "fs";
import logmsg from "./Alert.js";
import loadnotes from "./Utils.js";

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

export { deletenotes };
