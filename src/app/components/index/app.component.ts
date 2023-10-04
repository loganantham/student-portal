import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'Student Management';

	// Add few students for initial listing
	studentsList = [
	{	
		id : 1,
		first_name : "Loganantham",
		last_name : "Chandrasekar",
		email : "loganantham@gmail.com",
		phone : 9503733178,
		department : "Computer Science And Engineering"
	},
	{
		id : 2,
		first_name : "Ramesh",
		last_name : "Babu",
		email : "ramesh@gmail.com",
		phone : 8574889658,
		department : "Computer Science And Engineering"
	}
	];

	constructor() {
		// Save students to localStorage
		localStorage.setItem('students', JSON.stringify(this.studentsList));
	}
}
