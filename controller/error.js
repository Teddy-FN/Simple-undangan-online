exports.getErrorPage = (req, res, next) => {
  // res.status(404).sendFile(path.join(dirName, "views", "404.html"));
  res.status(404).render("404");
};
