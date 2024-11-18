const auth = (req, res, next) => {
  const { image, name, dsc, date, direname, rate } = req.body;

  if (image && name && dsc && date && genres && rate) {
    next();
  } else {
    res.send("All field Required..")
  }
}
// module.exports = auth;

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const movieAuth = multer({ storage: storage }).single('image');

module.exports = { auth, movieAuth };