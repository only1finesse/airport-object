const {Person, Passenger, Crew, Pilot} = require('./Person')

describe('Person Class', () => {

	const testPerson1 = new Pilot('RZ', 'G600');
	const testPerson2 = new Passenger('Bri', 'G600')
	const testPerson3 = new Crew('Ami', 'G600')

	testPerson3.greet()

	test('get flight number', () => {
		expect(testPerson1.flightNo).toBe('G600')
		expect(testPerson2.flightNo).toBe('G600')
		expect(testPerson2.flightNo).toBe('G600')
	})

	test('check for persons role on the flight', () => {
		expect(testPerson1.role).toBe('Pilot');
	})

	test('check in method for all persons', () => {
		console.log(testPerson2.checkIn())
		expect(testPerson2.checkIn()).toStrictEqual(['Passenger', 'Bri'])
	})

	test('only crew is able to greet', () => {
		expect(testPerson3.greet()).toBeDefined();

		expect(() => {
			testPerson2.greet();
		  }).toThrow();

		expect(() => {
			testPerson1.greet();
		  }).toThrow();
		  
		// expect(testPerson2.greet()).toThrow();
	})
})