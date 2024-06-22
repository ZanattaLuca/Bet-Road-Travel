//CONFIG
const config = require("./config.json")
const PORT = config.port|| 3000;

//NODE PACKAGE
const express = require('express')
const readline = require('readline');

//My modules
const createMunicipalities = require('./createMunicipalities')

const app = express();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptInput() {
    console.log('[1] - Press [1] to generate the json of the municipalities starting from the string');
    console.log('[0] - Press [0] to exit');
    rl.question('Please enter your choice: ', (answer) => {
        switch (answer) {
            case "1":
                console.log("You have selected option 1.");
                createMunicipalities();
                promptInput();
                break;
            case "0":
                console.log("Exiting application...");
                server.close(() => {
                    console.log('Server has been shut down.');
                });
                rl.close();
                break;
            default:
                console.log("Invalid option. Please enter '1' or '0'.");
                promptInput();
                break;
        }
    });
}

let server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    promptInput();
});