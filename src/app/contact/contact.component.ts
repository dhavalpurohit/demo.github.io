import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	contactName:  string  =  "";
	contactAddress:  string  =  "";
	contactSource:  string  =  "direct";
	contactGender:  string  =  "male";
	isDeleted  :  boolean  =  false;
	date  =  new  FormControl(new  Date());

	public  saveCustomer(){
    /* Typically this method will be used to send the contact form to a server to save it*/
	}

  constructor() { }

  ngOnInit() {
  }

}
