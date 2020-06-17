import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators,FormArray } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { _ } from '@biesbjerg/ngx-translate-extract/dist/utils/utils';

import defaultLanguage from "assets/i18n/en.json";
import { MerchantService } from '../../services/merchant.service';
@Component({
  selector: 'app-merchantapplication',
  templateUrl: './merchantapplication.component.html',
  styleUrls: ['./merchantapplication.component.scss']
})
export class MerchantapplicationComponent implements OnInit {

  fromCode = _('demo.text-in-code');
  form: FormGroup;
  rows: FormArray;

  constructor(private translate: TranslateService, private router: Router, private formBuilder: FormBuilder, private merchantService: MerchantService) {
    translate.setTranslation('en', defaultLanguage);
    translate.setDefaultLang('en');
    this.rows = this.formBuilder.array([]);
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }






  ngOnInit() {
    this.form = this.formBuilder.group({
      legalName: ['', Validators.required],
      businessName: [],
      
      legalEntity: [],
      merchantTax:[],
      websitesUrl:[],
      testUser: [],
      address: [],

      principalName:[],
      principalPhone:[],
      principalEmail: [],

      operationalName: [],
      operationalPhone: [],
      operationalEmail:[],

      technicalName: [],
      technicalPhone: [],
      technicalEmail: [],
      
      monthly_volume: [],
      monthly_tran: [],
      per_tran: [],

      business_address: [],
      checkboxes_0:[],
      checkboxes_1:[],
      checkboxes_3 :[],
      checkboxes_4:[],

      checkboxes_5:[],
      checkboxes_6:[],
      checkboxes_7:[],
      checkboxes_8:[],
      checkboxes_9:[],
      checkboxes_10:[],
      checkboxes_11:[],
      checkboxes_12:[],
      checkboxes_13:[],
      checkboxes_14:[],
      checkboxes_15:[],
      checkboxes_16:[],
      checkboxes_17:[],
      checkboxes_18:[],
       address_1:[],
      address_2:[],
      address_3:[],
      address_4:[],
      address_5:[]


    });

  }



  row = [
    {
      id: '',
      name: '',
      email: '',
      gmail:''
    },
    {
      id: '2',
      name: '3',
      email: '5',
      gmail : "hh"
    }
  ];

  addTable() {

    //this.rows.push(this.createItemFormGroup());
    const obj = {
      id: '',
      name: '',
      email: '',
      gmail:''
    }
    this.row.push(obj)
  }
  createItemFormGroup(): FormGroup {
    return this.formBuilder.group({
      name: null,
      description: null,
      qty: null
    });
  }


  deleteRow(x) {
    var delBtn = confirm(" Do you want to delete ?");
    if (delBtn == true) {
      this.row.splice(x, 1);
    }
  }

  // deleteRow (){
  //   //console.log(name);

  //   for(var i=0 ; i<this.row.length-1 ; i++){
  //     var delBtn = confirm(" Do you want to delete ?");     
  //            if( delBtn == true ) {

  //       this.row.splice(i,1);
  //     }
  //   }

  // }
  // }

  onClickSubmit(data) {
    this.postMerchnat(data);
  }


  public postMerchnat(data): void {
    var jasonRequest = {};
    jasonRequest["legalname"] = data.legalame;
    jasonRequest["businessname"] = data.businessname;
    jasonRequest["merchanttax_id"] = data.merchanttax_id;
    jasonRequest["legal_entity"] = data.legal_entity;
    jasonRequest["websites_url"] = data.websites_url;
    jasonRequest["testuser"] = data.testuser;
    jasonRequest["address"] = data.address;
    jasonRequest["principa_name"] = data.principa_name;
    jasonRequest["principa_phone"] = data.principa_phone;
    jasonRequest["principa_email"] = data.principa_email;
    jasonRequest["operational_name"] = data.operational_name;
    jasonRequest["operational_phone"] = data.operational_phone;
    jasonRequest["operational_email"] = data.operational_email;
    jasonRequest["technical_name"] = data.technical_name;
    jasonRequest["technical_phone"] = data.technical_phone;
    jasonRequest["technical_email"] = data.technical_email;
    jasonRequest["monthlysales_volume"] = data.monthlysales_volume;
    jasonRequest["monthly_transaction"] = data.monthly_transaction;
    jasonRequest["amountper_transaction"] = data.amountper_transaction;
    jasonRequest["business_address"] = data.business_address;
    //alert("Entered Email id : " + data.name+" ;" +data.email+":"+data.phone_number+";"+data.msg_subject+";"+data.message);
    var payload = JSON.stringify(jasonRequest);
    console.log("JSON Request : " + payload);
    var link = "https://appopay.com/v2/sendapplication"
    this.merchantService.postMerchnat(link, payload).subscribe(res => {
      console.log("postMerchnat res.status: " + res.status);
      console.log("postMerchnat res: " + JSON.stringify(res));
    }, error => {
      console.log("error" + JSON.stringify(error));
    });
  }


  
  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      alert(JSON.stringify(this.form.value));
      alert(JSON.stringify(this.row))
     
    }
  }

  




}
