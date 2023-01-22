const fs = require("fs");

fs.copyFile("node-ignore.txt", ".gitignore", (err) => {
  if (err) throw err;
  console.log("Successfully created .gitignore for node");
});
