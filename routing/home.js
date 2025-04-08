const express = require("express");
const router = express.Router();

const { MENU_LINKS } = require("../constants/navigation");

router.get("/", (req, res) => {
  res.render("home", {
    headTitle: "Shop – Home",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/"
  });
});

module.exports = router;
