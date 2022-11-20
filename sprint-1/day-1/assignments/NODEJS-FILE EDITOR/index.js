const fs = require('fs');


//FOR READING THE CONTENT OF FILE
const content =  fs.readFileSync('./RenamedFile.txt', {
  //if encoding wali line (4th) na likhe toh output me buffer aayega (buffer means sequence of ASCII CODE) character ki jgh code me likha hua aayega in terminal
  // agr encoding :'utf-8' likhenge toh output String me aayega.
  
  encoding: 'utf-8'
});

//FOR APPENDING THE DATA 
const appendData =  fs.appendFile('test.txt', 'data', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// FOR CREATING NEW FILE
//The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:
fs.appendFile('test.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

//FOR RENAME THE FILE test.txt to=> tes.txt

fs.rename('test.txt', 'tes.txt', (error) => {
  if (error) {
      
    // Show the error 
    console.log(error);
  }
  else {
  
    
    console.log("\nFile Renamed\n");
   
  }
});
console.log(content);
console.log(appendData);

// FOR DELETING test.txt file

var filePath = 'test.txt'; 
fs.unlinkSync(filePath);

//FOR LISTING THE ALL FILES 
const fs = require("fs");
// fs.readdirSync("./")
const demofile = fs.readdirSync("./");
for(var i=0; i<demofile.length;i++){
console.log(demofile[i]);

}
