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

  app.get("/login", function(req, res) {
    res.render("login_form");
  });

  app.get("/hwarang", function(req, res) {
    res.render("hwarang_foundation");
  });

  app.get("/nomination", function(req, res) {
    res.render("nomination");
  });

  app.get("/nomination_category", function(req, res) {
    res.render("nomination_category");
  });

  app.get("/blogs_writings", function(req, res) {
    res.render("blogs_writings");
  });

  app.get("/prizes", function(req, res) {
    res.render("prizes_and_honorees");
  });

  app.get("/photos_videos", function(req, res) {
    res.render("photos_videos");
  });

  app.get("/login_register", function(req, res) {
    res.render("login_register");
  });

  app.get("/login_reset", function(req, res) {
    res.render("login_reset");
  });
};
