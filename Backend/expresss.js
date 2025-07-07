const express = require('express');
const app = express()
const port = 302
app.get('/ok', (req, res)=>{
    console.log('it worked')
    res.send('Hi!!')
})
app.use(express.static('public'))

app.listen(port, ()=> {console.log("fair enough")})

const fs = require('fs')
fs.access('/Users/aradhya/Desktop/Coding/Webdevelop/Backend/public/stylesheets/stysdfsdle.css', (err)=> {if (err) {console.log("filedont exists")} else {console.log('file exists')}})

fs.appendFile('/Users/aradhya/Desktop/Coding/Webdevelop/Backend/public/stylesheets/stysdfsdle.css', 'Some text to append\n', (err) => {
    if (err) {
        console.log('Error appending to file');
    } else {
        console.log('Successfully appended to file');
    }
});

// Other useful fs (filesystem) commands you can use:

// 1. Read a file
fs.readFile('/Users/aradhya/Desktop/Coding/Webdevelop/Backend/public/stylesheets/stysdfsdle.css', 'utf8', (err, data) => {
    if (err) {
        console.log('Error reading file');
    } else {
        console.log('File contents:', data);
    }
});

// 2. Write to a file (overwrites existing content)
fs.writeFile('/Users/aradhya/Desktop/Coding/Webdevelop/Backend/public/stylesheets/stysdfsdle.css', 'New content\n', (err) => {
    if (err) {
        console.log('Error writing to file');
    } else {
        console.log('Successfully wrote to file');
    }
});

// 3. Rename a file
fs.rename('/Users/aradhya/Desktop/Coding/Webdevelop/Backend/public/stylesheets/stysdfsdle.css', '/Users/aradhya/Desktop/Coding/Webdevelop/Backend/public/stylesheets/style-renamed.css', (err) => {
    if (err) {
        console.log('Error renaming file');
    } else {
        console.log('File renamed successfully');
    }
});

// 4. Delete a file
fs.unlink('/Users/aradhya/Desktop/Coding/Webdevelop/Backend/public/stylesheets/stysdfsdle.css', (err) => {
    if (err) {
        console.log('Error deleting file');
    } else {
        console.log('File deleted successfully');
    }
});

// 5. Create a directory
fs.mkdir('/Users/aradhya/Desktop/Coding/Webdevelop/Backend/public/newdir', (err) => {
    if (err) {
        console.log('Error creating directory');
    } else {
        console.log('Directory created successfully');
    }
});

// 6. Remove a directory
fs.rmdir('/Users/aradhya/Desktop/Coding/Webdevelop/Backend/public/newdir', (err) => {
    if (err) {
        console.log('Error removing directory');
    } else {
        console.log('Directory removed successfully');
    }
});
// 7. Watch for changes on a file
fs.watchFile('/Users/aradhya/Desktop/Coding/Webdevelop/Backend/public/stylesheets/stysdfsdle.css', (curr, prev) => {
    console.log('File changed');
});

// 8. Change file permissions
fs.chmod('/Users/aradhya/Desktop/Coding/Webdevelop/Backend/public/stylesheets/stysdfsdle.css', 0o644, (err) => {
    if (err) console.log('Error changing permissions');
    else console.log('Permissions changed');
});


