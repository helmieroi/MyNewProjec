// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const app = express();
const port = 5000;
const Blob = require('blob');
app.use(express.json({ limit: '50mb' })); // Increase payload limit if needed
const ensureDirExists = (dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Directory ${dir} created`);
    }
  };
  
  // Define the uploads directory
  const UPLOADS_DIR = path.join(__dirname, 'uploads');
  ensureDirExists(UPLOADS_DIR);
  
  // Set up multer for file storage
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, UPLOADS_DIR);
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });
  
  const upload = multer({ storage: storage });
  
  // Endpoint to handle file upload
  app.post('/upload', upload.single('document'), (req, res) => {
    try {
        console.log(req.file)
        fs.readFile(req.file.path, (err, data) => {
            if (err) {
              return res.status(500).send('Error reading file');
            }
        
            // Set the content type header
            res.setHeader('Content-Type', 'application/octet-stream');
        console.log(data)
        const buffer = Buffer.from(data)
            // Send the file data as a blob in the response
            res.send(URL.createObjectURL(new Blob([buffer])));
          }); 
      //res.json({ message: 'File uploaded successfully', file: req.file });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
