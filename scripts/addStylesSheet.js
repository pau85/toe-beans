const fs = require('fs');
const path = require('path');
const readline = require('readline')

// Directory with your .scss files
const scssStylesDir = './src/styles/';

const scssDirs = [scssStylesDir]

async function processFiles() {
  for (let index = 0; index < scssDirs.length; index++) {
    const scssDir = scssDirs[index];
    let content = '';
    let newFilesAdded = false; // Add this line
    const files = fs.readdirSync(scssDir);
      
    const promises = files.map(async file => {
      if (path.extname(file) === '.scss') {
        // Remove the file extension
        let filename = path.basename(file, '.scss');
        if (filename === 'styles') { return }
        let dirpath = scssDir
        let extension = path.extname(file)

        let fileAlreadyAdded = await isFileAlreadyAdded(dirpath + filename + extension)
        console.log(`fileAlreadyAdded - '${filename}'.scss : `, fileAlreadyAdded)
        if (fileAlreadyAdded === false) {
          dirpath = scssDir
          extension = path.extname(file)
          // Add the @use directive
          content += `@use '${dirpath}${filename}${extension}';\n`;
          console.log('content: ',content)
          newFilesAdded = true; // Update the flag
        }
      }
    });

    await Promise.all(promises);
    if (newFilesAdded){
      fs.appendFileSync(path.join(scssDir, 'styles.scss'), content);
      console.log('styles.scss has been updated!');
    } else {
      console.log('No new .scss files to added to "' +scssDir+'"!');
    }
    console.log('Compiling all scss files with gulp next.')
  }
}

processFiles();

function isFileAlreadyAdded(filename) {
  return new Promise((resolve, reject) => {  
    const fileStream = fs.createReadStream(scssStylesDir + 'styles.scss');

    // Use readline to read from the stream
    const rl = readline.createInterface({
      input: fileStream,
      crldDelay: Infinity
    });

    // Listen for 'line' events and log each line to the console
    rl.on('line', (line) => {
      if (line === (`@use '${filename}';`)) {   
        resolve(true)
      }
    })

    rl.on('close', () => {
      resolve(false);
    });

    rl.on('error', (err) => {
      reject(err);
    });
  })
}
