

import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

	constructor() { }

	doLogin(data: any) {
		if (data.email == "loganantham.c@studentportal.com" && data.password == "Loga123") {
			return {
				code: 200,
				message: "Login Successful",
				data: data
			};
		} else {
			return {
				code: 503,
				message: "Invalid Credentials",
				data: null
			};
		}
	}

	// doRegister(data){
	// 	return this.http.post('user-add.php',data);	
	// }
}

