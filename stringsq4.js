let mix = "jefhjwefhjw";
for (let i = 0; i < mix.length; i++) {
  if (
    mix[i] === "0" ||
    mix[i] === "1" ||
    mix[i] === "2" ||
    mix[i] === "3" ||
    mix[i] === "4" ||
    mix[i] === "5" ||
    mix[i] === "6" ||
    mix[i] === "7" ||
    mix[i] === "8" ||
    mix[i] === "9"
  ) {
    console.log("Found a number");
    break;
  }
}
