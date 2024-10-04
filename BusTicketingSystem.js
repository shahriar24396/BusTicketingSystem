// QUERIES
// check variable type in functions (USE A UTILITY FUNCTION, USE ARRAY OF ELEMENTS)
// how to export classes using Node when there are separate js files

class User {
    constructor(firstName, lastName, phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
    }

    // TO DO
    // add error validation for restricted special chars and numbers
    // add function for trimming whitespaces
    getUserName() {
        return this.firstName + " " + this.lastName;
    }

    // TO DO
    // add error validation for special chars and alphabets
    // add function for trimming whitespaces
    getUserInfo() {
        return (this.getUserName() + "\n" + this.phoneNumber);
    }
}

//const firstUser = new User(123, "Shahriar", 1794735746);
//console.log(firstUser.getUserInfo());

class Passenger extends User {
    constructor(firstName, lastName, phoneNumber, emailAddress) {
        super(firstName, lastName, phoneNumber);
        this.emailAddress = emailAddress;
        this.accountCreationDate = new Date().toJSON().slice(0, 10);
    }

    getUserInfo() {
        return ("Passenger Name: " + this.getUserName() +
                "\nPhone Number: " + this.phoneNumber +
                "\nEmail Address: " + this.emailAddress);
    }
}

//const firstPassenger = new Passenger("Ahmed", "Shahriar", 1794735746, "shahriar24396@gmail.com");
//console.log(firstPassenger.getUserInfo());
//console.log(firstPassenger.accountCreationDate);

class TicketManager extends User {
    constructor(firstName, lastName, phoneNumber, employeeId, joinDate) {
        super(firstName, lastName, phoneNumber);
        this.employeeId = employeeId;
        this.joinDate = joinDate.toLocaleDateString('en-US');
    }

    getUserInfo() {
        return ("Manager Name: " + this.getUserName() +
                "\nEmployee ID: " + this.employeeId +
                "\nJoin Date: " + this.joinDate);
    }
}

//const firstManager = new TicketManager("Ahmed", "Shahriar", 1794735746, 510, new Date("2021-01-01"));
//console.log(firstManager.getUserInfo());

class Bus {
    constructor(registrationNumber, driverName) {
        this.registrationNumber = registrationNumber;
        this. driverName = driverName;
    }
}

class Schedule {
    constructor(routeName, startingPlace, finalDestination, startingTime, endingTime, assignedBus) {
        this.routeName = routeName;
        this.startingPlace = startingPlace;
        this.finalDestination = finalDestination;
        this.startingTime = startingTime;
        this.endingTime = endingTime;
        this.assignedBus = assignedBus;
    }

    getTotalTravelTime() {
        return Math.abs(this.endingTime - this.startingTime) / (60*60*1000);
    }
}

class Ticket {
    constructor(issuedBy, issuedTo, route, issueDate) {
        this.issuedBy = issuedBy;
        this.issuedTo = issuedTo;
        this.route = route;
        this.issueDate = issueDate.toLocaleDateString('en-US');
    }

    getTicketInfo() {
        return ("Issue Date: " + this.issueDate +
                "\nIssuer:\n-------------------\n" +
                this.issuedBy.getUserName() + "\n" +
                "\nIssued To:\n----------------------\n" +
                this.issuedTo.getUserName() + "\n" +
                "\nTravel Info:\n------------" +
                "\nDeparture Station: " + this.route.startingPlace +
                "\nDestination: " + this.route.finalDestination +
                "\nTravel Start Time: " + this.route.startingTime +
                "\nTravel End Time: " + this.route.endingTime +
                "\nTotal Travel Time: " + this.route.getTotalTravelTime() + " hours\n" +
                "\nBus Info:\n---------" +
                "\nBus Registration Number: " + this.route.assignedBus.registrationNumber +
                "\nDriver Name: " + this.route.assignedBus.driverName
        );
    }
}


// TESTING WITH ACTUAL VALUES

// TASK 2: PASSENGER REGISTRATION

const passengers = [];

passengers.push(new Passenger("John", "Doe", "01234567891", "john.doe@email.com"));
passengers.push(new Passenger("Mark", "Ross", "01234567821", "mark.ross@email.com"));
passengers.push(new Passenger("Peter", "Williams", "01234567841", "peter.williams@email.com"));

// TASK 3: TICKET MANAGER REGISTRATION

const firstManager = new TicketManager("Lisa", "Johnson", "01234567412", "013", new Date("01/01/2014"));

// TASK 4: BUS FLEET REGISTRATION

const buses = [];

buses.push(new Bus("0231A", "Kalvin Phillips"));
buses.push(new Bus("0134E", "Marco Williamson"));
buses.push(new Bus("0123F", "Karen Moss"));

// TASK 5: ROUTE SCHEDULING

const schedules = [];

schedules.push(new Schedule("Black Valley - Arno County", "Black Valley", "Arno County", new Date("2024/04/12 11:45 AM"), new Date("2024/04/12 5:45 PM"), buses[0]));
schedules.push(new Schedule("Weeping Edge - Fall's Ridge", "Weeping Edge", "Fall's Ridge", new Date("2024/06/15 11:45 AM"), new Date("2024/06/15 5:45 PM"), buses[1]));
schedules.push(new Schedule("Thornton Canyons - Red Forest", "Thornton Canyons", "Red Forest", new Date("2024/08/28 11:45 AM"), new Date("2024/08/28 5:45 PM"), buses[2]));

// TASK 6: TICKET ISSUANCE

const firstTicket = new Ticket(firstManager, passengers[0], schedules[0], new Date("2024/04/12"));
console.log(firstTicket.getTicketInfo());

// TASK 7: SCHEDULE QUERY

let filteredDates = schedules.filter(schedule => schedule.startingTime > new Date("2024/06/01"));
console.log("--------------------------------------");
console.log("SCHEDULES WITH DATES AFTER 2024/06/01");
console.log(filteredDates);

// TASK 8: ROUTE NAME UPDATE

schedules.forEach(schedule => {
    schedule.routeName = schedule.routeName.replace("-", "->");
});
console.log("-----------------------------------------");
console.log("SCHEDULES WITH UPDATED FORMAT FOR ROUTES");
console.log(schedules);