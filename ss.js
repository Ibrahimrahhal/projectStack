const fs = require('fs');
const path = require('path');

// Function to recursively scan the directory
function scanAndProcessFiles(dir) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.error(`Error reading directory ${dir}:`, err);
            return;
        }

        files.forEach((file) => {
            const fullPath = path.join(dir, file);

            fs.stat(fullPath, (err, stats) => {
                if (err) {
                    console.error(`Error getting stats for file ${fullPath}:`, err);
                    return;
                }

                if (stats.isDirectory()) {
                    // If it's a directory, recurse into it
                    scanAndProcessFiles(fullPath);
                } else if (stats.isFile() && isJsOrTsFile(fullPath)) {
                    // If it's a JS/TS file, append a new line
                    appendNewLine(fullPath);
                }
            });
        });
    });
}

// Function to check if a file is a JS or TS file
function isJsOrTsFile(filePath) {
    return filePath.endsWith('.js') || filePath.endsWith('.ts');
}

// Function to append a new line to a file
function appendNewLine(filePath) {
    fs.appendFile(filePath, '\n', (err) => {
        if (err) {
            console.error(`Error appending to file ${filePath}:`, err);
        } else {
            console.log(`Appended new line to ${filePath}`);
        }
    });
}

// Start scanning from the current working directory
const currentDirectory = process.cwd();
scanAndProcessFiles(currentDirectory);

