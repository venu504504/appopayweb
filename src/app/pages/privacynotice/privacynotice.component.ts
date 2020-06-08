import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Router } from '@angular/router';
import {_} from '@biesbjerg/ngx-translate-extract/dist/utils/utils';

import defaultLanguage from "assets/i18n/en.json";

@Component({
  selector: 'app-privacynotice',
  templateUrl: './privacynotice.component.html',
  styleUrls: ['./privacynotice.component.scss']
})
export class PrivacynoticeComponent implements OnInit {
    fromCode = _('demo.text-in-code');

    constructor(private translate: TranslateService ,private router: Router) {
        translate.setTranslation('en', defaultLanguage);
        translate.setDefaultLang('en');
    }

    useLanguage(language: string) {
        this.translate.use(language);
    }
  ngOnInit() {
  }
}
