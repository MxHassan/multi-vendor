const fs = require('fs');

const deleteImage = (filename) => {
  const filePath = `uploads/${filename}`;
  fs.unlink(filePath, (err) => {
    if (err) {
      console.log('Error deleting file', err);
    }
  });
};
module.exports = deleteImage;
