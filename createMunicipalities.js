const fse = require('fs-extra');

function createMunicipalities(data) {
    
    // Convert the data into an array of lines
    const lines = data.trim().split('\n');

    // Create an array of objects
    const municipalities = lines.map(line => {
        const parts = line.trim().split(/\s+/);
        const name = parts.slice(1, -4).join(' ');
        return { name };
    });

    fse.writeJson(`municipalities.json`, municipalities, { spaces: 2 })
      .then(() => {
          console.log('Municipalities successfully saved in municipalities.json');
      })
      .catch(err => {
          console.error('Error saving municipalities:', err);
      });
}

module.exports = createMunicipalities;