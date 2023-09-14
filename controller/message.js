const message = [];

exports.postMessage = (req, res, next) => {
  const date = new Date();
  const getYear = date.getFullYear();
  const getDate = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const getMonth =
    date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
  const formatDate = `${getDate}/${getMonth}/${getYear}`;

  message.push({
    name: req.body.name,
    message: req.body.message,
    date: formatDate,
  });

  res.redirect("/");
};

exports.getMessage = (req, res, next) => {
  // To render html file
  // res.sendFile(path.join(dirName, "views", "home.html"));

  // To render pug file -> set up in app.js
  res.render("home", { messages: message });
};
