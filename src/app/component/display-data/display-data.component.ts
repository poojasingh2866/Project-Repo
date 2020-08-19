import { Component, OnInit } from '@angular/core';
import { UserInfoModel } from 'src/app/models/UserInfoModel';


@Component({
  selector: 'display-user-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})

export class DisplayDataComponent implements OnInit {
	
	user: UserInfoModel = new UserInfoModel({guid: "D21ds12x", 
		customerUid: "cust2dsa12dsa", 
		full_name: "Pooja Rani", 
		
		email: "xyz@gmail.com", 
	
		password: "pooja"});

	constructor() { }

	ngOnInit()
	{

	}

}