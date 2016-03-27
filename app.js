var claim1 = {
	patientName: "John Doe",
	visitType: "Specialist",
	visitCost: 1100
};

var claim2 = {
	patientName: "Jane Doe",
	visitType: "Optical",
	visitCost: 100
};

var claim3 = {
	patientName: "Joe Johnson",
	visitType: "Emergency",
	visitCost: 31000
};

var claim4 = {
	patientName: "Sharon Smith",
	visitType: "Emergency",
	visitCost: 1300
};

var claim5 = {
	patientName: "Steve Wright",
	visitType: "Primary Care",
	visitCost: 770
};

var initialList = [claim1, claim2, claim3, claim4, claim5];

var totalPayedOut = 0;

function claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}
var claim6 = new claim("Josh Cool", "Emergency", 2300);
var claim7 = new claim("Nancy Fancy", "Primary Care", 250);
var claim8 = new claim("Cody Hockey", "Optical", 575);
var claim8 = new claim("Katie Cutie", "Primary Care", 175);
var claim9 = new claim("Hunter Hotshot", "Emergency", 12000);
var claim10 = new claim("Chief Doggie", "Specialist", 800);

initialList.push(claim6, claim7, claim8, claim9, claim10);

for(var x = 0 ; x<initialList.length; x++) {
	var namePatient = initialList[x].patientName;
// console.log(namePatient);
	var paid = amountCovered(initialList[x]);
	totalPayedOut += paid;
	console.log("Paid out $" + paid + " for " + namePatient + ".");
}
console.log('Total paid out $', totalPayedOut);
// //function to determine percent covered
function percentCovered(patient) {
	var covered = 0;
	var visit = patient.visitType;
	// console.log(visit);
	switch(visit){
		case 'Optical':
		covered = 0;
		break;
		case 'Specialist':
		covered = 0.10;
		break;
		case 'Emergency':
		covered = 1.00;
		break;
		case 'Primary Care':
		covered = 0.50;
		break;
	}
	// console.log(covered);
	return covered;

}
//function to determine amount covered
function amountCovered(patient) {
	var percent = percentCovered(patient);
	// console.log(percent);
	var amountPaid = patient.visitCost * percent;
	// console.log(amountPaid);
	return Math.round(amountPaid);
}
