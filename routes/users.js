var express = require('express');
const moment = require("moment");

var router = express.Router();
const Users = require("../apps/users");
const user = new Users()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

let temp = [];

function arrangeTime(arr) {
	// First sort the availability array with start time.
	arr.sort((a,b) => moment(a.start).diff(b.start));
	
	for(let i=0; i<arr.length-1; i++) {

		// checking if next elements start time is before the present element's end time if so then
		// merge them and push to new arr, else push as it is.

		if(moment(arr[i].end).dif(moment(arr[i+1].start))>0){
			temp.push({start: arr[i].start, end:arr[i+1].start})
		} else {
			temp.push(arr[i])
		}
	}

	// check if to continue with above process

	let c = temp.some((a, i, ar) => moment(a.end).diff(moment(arr[i+1].start) > 0))

	if(c) {
		temp1 = temp;
		temp = []
		arrangeTime(temp1)
	}

	return temp

}

router.post("/avail", (req, res) => {
	const uName = req.body.uName;
	const avail = req.body.avail;

	console.log(uName)
	console.log(avail);

	const allDuration = user.addAvailability(uName, avail);
	console.log(allDuration)

	res.json(arrangeTime(allDuration));
})

module.exports = router;
