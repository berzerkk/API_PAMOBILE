var express = require('express');
var router = express.Router();

var Users = require('./../model/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
        res.send('respond with a resource');
});


router.post('/authenticate', function(req, res, next) {
        Users.find({
                login: req.body.login,
                password: req.body.password
        }, function(err, user) {
                if (err) throw err;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                        status: (user.length ? "ok" : "bad")
                }));
        })
});

router.post('/create', function(req, res, next) {
        let newUser = Users({
                login: req.body.login,
                password: req.body.password,
                name: req.body.name,
                firstname: req.body.firstname,
                mail: req.body.mail,
                phone: req.body.phone,
                postale: req.body.postale,
                activity: req.body.activity,
        });
        Users.find({
                login: req.body.login
        }, function(err, user) {
                if (err) throw err;
                res.setHeader('Content-Type', 'application/json');
                if (!user.length) {
                        newUser.save(function(err) {
                                if (err) throw err;
                                res.end(JSON.stringify({status: "ok"}));
                        });
                } else {
                        res.end(JSON.stringify({
                                status: "bad"
                        }));
                }
        })
})


module.exports = router;
