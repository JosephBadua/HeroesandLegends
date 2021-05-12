module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.render("index");
  });

  app.get("/announcements", function(req, res) {
    res.render("announcements");
});
};
