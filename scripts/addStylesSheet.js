const fs = require('fs');
const path = require('path');

// Directory with your .scss files
const scssDir = '../src/styles/';
const scssClockDir = '../src/styles/clock/'

const scssDirs = [scssDir, scssClockDir]

for (let index = 0; index < scssDirs.length; index++) {
    const scssDir = scssDirs[index];

    fs.readdir(scssDir, (err, files) => {
        if (err) throw err;
      
        let content = '';
      
        files.forEach(file => {
          if (path.extname(file) === '.scss') {
            // Remove the file extension
            let filename = path.basename(file, '.scss');
            let dirpath = scssDir
            let extension = path.extname(file)
            // Add the @use directive
            content += `@use '${dirpath}${filename}${extension}';\n`;
          }
        });
      
        fs.writeFile(path.join(scssDir, 'styles.scss'), content, err => {
          if (err) throw err;
          console.log('styles.scss has been updated!');
        });
      });
}
