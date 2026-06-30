const fs = require('fs');
const path = require('path');

const outputFile = 'project-map.txt';
const projectRoot = './'; 

// Folders/Files to ignore
const ignore = ['node_modules', '.next', '.git', '.sanity', 'package-lock.json', '.gitignore'];
// Extensions to skip (binary/assets)
const skipExtensions = ['.ico', '.png', '.jpg', '.jpeg', '.svg', '.gif'];

function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    if (ignore.includes(file)) return;
    const filePath = path.join(dir, file);
    
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (!skipExtensions.includes(ext)) {
        fileList.push(filePath);
      }
    }
  });
  return fileList;
}

const allFiles = getFiles(projectRoot);
let output = 'PROJECT CODE MAP (Assets Excluded)\n==================================\n\n';

allFiles.forEach(file => {
  output += `\n--- FILE: ${file} ---\n`;
  try {
    output += fs.readFileSync(file, 'utf8');
  } catch (err) {
    output += '[Could not read file]';
  }
  output += '\n\n';
});

fs.writeFileSync(outputFile, output);
console.log(`Success! Your clean code map is saved in ${outputFile}`);