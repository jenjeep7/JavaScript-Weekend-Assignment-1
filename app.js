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
var paidList = "";


function claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}
//new objects being created
var claim6 = new claim("Josh Cool", "Emergency", 2300);
var claim7 = new claim("Nancy Fancy", "Primary Care", 250);
var claim8 = new claim("Cody Hockey", "Optical", 575);
var claim8 = new claim("Katie Cutie", "Primary Care", 175);
var claim9 = new claim("Hunter Hotshot", "Emergency", 12000);
var claim10 = new claim("Chief Doggie", "Specialist", 800);

//pushing all new claims to the initialList array
initialList.push(claim6, claim7, claim8, claim9, claim10);

for(var x = 0 ; x<initialList.length; x++) {
	var namePatient = initialList[x].patientName;
// console.log(namePatient);
	var paid = amountCovered(initialList[x]);
	totalPayedOut += paid;
	paidList = "Paid out $" + paid + " for " + namePatient + ".";
	console.log(paidList);
    addToNode(paidList);

}

var payedOutText = 'Total paid out $'+ totalPayedOut;
console.log(payedOutText);
// adds payed out amount to the DOM
addTotalPaid(payedOutText);

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
//this function is adding payout list to the DOM
function addToNode(stuff) {
    var htmlList = document.createElement("li");
    var textnode = document.createTextNode(stuff);
		document.getElementById("transactions").appendChild(htmlList);

    htmlList.appendChild(textnode);
		htmlList.style.setProperty('color', 'blue');
		htmlList.style.background = "#ccc";
		htmlList.style.fontSize= "25px";
		htmlList.style.width = "40%";
	}
	//this function is used to add the total paid to the DOM
function addTotalPaid(input) {
	var totalPaid = document.createElement("p");
	var textnode = document.createTextNode(input);
	document.getElementById("main").appendChild(totalPaid);
	totalPaid.appendChild(textnode);
	totalPaid.style.setProperty('border-bottom','1px solid black','');
	totalPaid.style.fontSize = "30px";
	totalPaid.style.width = '40%';
}
