const fse = require('fs-extra');

function loadData(filepath) {
    return new Promise((resolve, reject) => {
        fse.readFile(filepath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

module.exports = loadData;