const fs = require("fs");

fs.writeFile("text.txt", "New Content Written !", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file written successfully");
  }
});
