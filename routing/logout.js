const express = require("express");
const path = require("path");
const router = express.Router();

const { LOGOUT_LINKS } = require("../constants/navigation");
router.get("/", (_request, response) => {
  response.render("logout", {
    headTitle: "Logout",
    menuLinks: LOGOUT_LINKS,
    activeLinkPath: "/logout"
  });
});

module.exports = router;
