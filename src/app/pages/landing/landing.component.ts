import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Router } from '@angular/router';
import {_} from '@biesbjerg/ngx-translate-extract/dist/utils/utils';
import { BannerService } from '../../services/banner.service';
import defaultLanguage from "assets/i18n/en.json";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
 image_url: String = 'https://appopay.com/images/admin/offer-banner.jpg';
    fromCode = _('demo.text-in-code');

    constructor(private translate: TranslateService ,private router: Router,private bannerService:BannerService) {
        translate.setTranslation('en', defaultLanguage);
        translate.setDefaultLang('en');
		  //this.getBannerImage();
    this.createUser();
    }

    useLanguage(language: string) {
        this.translate.use(language);
    }

  ngOnInit() {
  }
  
  
  public getBannerImage(): void {

    // var link = "https://jsonplaceholder.typicode.com/todos/1"
    var link = "https://appopay.com/images/admin/offer-banner.jpg";  
    this.bannerService.getBanner(link).subscribe(res => {
      this.image_url = res.data.avatar
      console.log("image_url: " + this.image_url);
      console.log("res: " + JSON.stringify(res));

    }, error => {
      console.log("error" + JSON.stringify(error));
    });
  }

  public createUser(): void {

    var payload = '{"name": "test11","salary": "1231","age": "231" }';
    var link = "http://dummy.restapiexample.com/api/v1/create"
    this.bannerService.createUser(link,payload).subscribe(res => {
      console.log("createUser res.status: " + res.status);
        console.log("createUser res: " + JSON.stringify(res));
    }, error => {
      console.log("error" + JSON.stringify(error));
    });


  }

}
