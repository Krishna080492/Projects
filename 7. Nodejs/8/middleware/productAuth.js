const productAuth = (req, res, next) => {
  const { pname, pimage, pdsc, pprice } = req.body;
  if (pname && pimage && pdsc && pprice) {
    next();
  } else {
    console.log("All fields are Required");
    return res.redirect("/product");
  }
}

module.exports = { productAuth }