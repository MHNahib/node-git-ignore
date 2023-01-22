#!/usr/bin/env node

const fs = require("fs");
const nodeIgnore = require("./node-ignore");

// fs.copyFile("./node-ignore.txt", ".gitignore", (err) => {
//   if (err) throw err;
//   console.log("Successfully created .gitignore for node");
// });

fs.writeFile(".gitignore", nodeIgnore, function (err) {
  if (err) throw err;
  console.log("Successfully created .gitignore for node");
});
