const path = require("path");
const fs = require("fs");

//joining path of directory
const directoryPath = path.join(__dirname, "../assests/jsonData/men");
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  //listing all files using forEach
  files.forEach(function (file) {
    // process file
    const parsedJson = [];
    const filePath = path.join(__dirname, "../assests/jsonData/men/" + file);
    // 1. read json object from scrapped files
    const data = require(filePath);
    // 2. parse it to new json object
    data.map(
      ({
        name,
        item__price: price,
        "web-scraper-order": id,
        description,
        "img1-src": image2url,
        "img2-src": image1url,
        Fit,
        Composition,
        colors,
      }) => {
        parsedJson.push({
          name,
          price,
          id,
          description,
          image1url,
          image2url,
          fit: Fit,
          composition: Composition,
          colors,
        });
      }
    );
    // 3. save results in new json file
    var jsonContent = JSON.stringify(parsedJson);

    fs.writeFile(`${file}_scrape.json`, jsonContent, "utf8", function (err) {
      if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
      }

      console.log(`${file} JSON file has been saved.`);
    });
  });
});
