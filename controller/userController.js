const express = require('express');
const router = express.Router();

const League = require('../model/league');

router.get("/", (req, res, next) => {
    const leagueList = League.list();
    res.render('users/leagueList', {leagueList: leagueList});
});

router.get("/showNewForm", (req, res, next) => {
    res.render('users/userForm', { pageTitle: "Nowy użytkownik", formAction: "add", user: {} });
});

router.get("/showEditForm", (req, res, next) => {

});

router.post("/add", (req, res, next) => {
    const newUser = new User(req.body.first_name, req.body.last_name);
    User.add(newUser);
    res.redirect("/users");
});

router.post("/edit", (req, res, next) => {
    const editUser = new User(req.body.first_name, req.body.last_name, req.body.user_id);

});

router.get("/showDetails", (req, res, next) => {


});

router.get("/delete/", (req, res, next) => {

});


module.exports.route = router; 