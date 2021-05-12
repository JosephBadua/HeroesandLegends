module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.render("index");
  });

  app.get("/index", function(req, res) {
    res.render("index");
  });

  app.get("/announcements", function(req, res) {
    res.render("announcements");
  });

  app.get("/blogs", function(req, res) {
    res.render("blogs_writings");
  });
};
