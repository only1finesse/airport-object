class Person {
	constructor(name, flightNo, role){
		this.name = name;
		this.flightNo = flightNo
		this.role = role;
	}

	checkIn() {
		return [this.role, this.name]
	}
}

class Passenger extends Person {
	constructor(name, flightNo) {
		super(name, flightNo); 
		this.role = 'Passenger'
	}

}

class Crew extends Person {
	constructor(name, flightNo) {
		super(name, flightNo); 
		this.role = 'Crew'
	}

	greet() {
		return `Welcome to flightNo ${this.flightNo}. Fasten your seatbelts!`
	}

}

class Pilot extends Person {
	constructor(name, flightNo) {
		super(name, flightNo); 
		this.role = 'Pilot'
	}

	fly() {
		return `Flight ${this.flightNo} ready for take off. Have a nice flightNo!`
	}

}



module.exports = {Person, Passenger, Crew, Pilot}