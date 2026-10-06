// multerConfig.js

import multer from 'multer';

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload/'); // Specify the destination directory for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Define how files will be named
  }
});

// File filter to accept only PDF files
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true); // Accept the file
  } else {
    cb(new Error('Invalid file type. Only PDF files are allowed.')); // Reject the file
  }
};

// Configure Multer
const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});

export default upload;
