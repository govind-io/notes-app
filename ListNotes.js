import logmsg from "./Alert.js";
import loadnotes from "./Utils.js";

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

export { listnotes };
