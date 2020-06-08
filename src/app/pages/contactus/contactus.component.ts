import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Router } from '@angular/router';
import {_} from '@biesbjerg/ngx-translate-extract/dist/utils/utils';
import { NgModule } from '@angular/core';
import { ContactService } from '../../services/contact.service';

import defaultLanguage from "assets/i18n/en.json";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
     fromCode = _('demo.text-in-code');

    constructor(private translate: TranslateService ,private router: Router, private contactService : ContactService,private toastr: ToastrService) {
        translate.setTranslation('en', defaultLanguage);
        translate.setDefaultLang('en');
		
    }

    useLanguage(language: string) {
        this.translate.use(language);
    }

  ngOnInit() {
  }

  onClickSubmit(data) {
    
    //
	this.postContact(data);
 }


  public postContact(data): void {
var jasonRequest = {};
    jasonRequest["username"] = data.name;
    jasonRequest["email"] = data.email;
	  jasonRequest["phone"] = data.phone_number;
	    jasonRequest["subject"] = data.msg_subject;
	 jasonRequest["message"] = data.message;
	
	  
  
	
	 
	  
	  //alert("Entered Email id : " + data.name+" ;" +data.email+":"+data.phone_number+";"+data.msg_subject+";"+data.message);

    var payload = JSON.stringify(jasonRequest);
    var link = "https://appopay.com/v2/customerquery"
    this.contactService.postContact(link,payload).subscribe(res => {
      console.log("postContact res.status: " + res.status);
        console.log("postContact res: " + JSON.stringify(res));
		    if (res === 'Y') {
				 this.toastr.success('Your request has been captured ,Our executive will contact you shortly ');
			}
			else{
				
				this.toastr.warning('Failed to process your request ,please try after some time or please call us');
			}
    }, error => {
      console.log("error" + JSON.stringify(error));
	  
    });


  }
}
