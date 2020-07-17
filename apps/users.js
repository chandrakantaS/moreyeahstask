const avail = new Array();
const name='';

class User {
	constructor(){
		this.name = name;
		this.avail=avail;
	}

	addAvailability(name, dur){
		this.name = name;
		this.avail.push(dur);
		return this.avail;
	}
}

module.exports = User;