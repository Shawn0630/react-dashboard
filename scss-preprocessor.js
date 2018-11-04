const sass = require("node-sass");
const DtsCreator = require("typed-css-modules");
const glob = require("glob");

const creator = new DtsCreator();

module.exports = {
    preprocess: (cb) => {
        console.log("Processing scss files");
        glob("src/**/*.scss", {}, (err, filePaths) => {
            if (err) {
                console.log(err);
            }
            const total = filePaths.length;
            let counter = 0;
            for (const filePath of filePaths) {
                const result = sass.renderSync({
                    file: filePath
                });
                creator.create(filePath, result.css)
                    .then(content => content.writeFile())
                    .then(() => {
                        counter++;
                        if (counter === total) {
                            console.log("Finished processing scss files");
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    });
            }
        });
    }
}
