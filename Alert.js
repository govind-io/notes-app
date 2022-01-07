import chalk from "chalk";

const log = console.log;
const message = {
  dan: {
    color: "red",
    bgcolor: "bgred",
    font: "bold",
  },
};

const logmsg = (stat, msg) => {
  if (stat === "dan") {
    log(chalk.bgRed.white.bold(msg));
  } else if (stat === "sus") {
    log(chalk.bgGreen.white.bold(msg));
  } else {
    log(chalk.bgWhite.black.bold(msg));
  }
};

export default logmsg;
