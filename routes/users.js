var express = require('express');
const moment = require("moment");

var router = express.Router();
const Users = require("../apps/users");
const user = new Users()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/avail", (req, res) => {
	const uName = req.body.uName;
	const avail = req.body.avail;

	console.log(uName)
	console.log(avail);

	const allDuration = user.addAvailability(uName, avail);
	console.log(allDuration)

	res.json(allDuration);
})

module.exports = router;
