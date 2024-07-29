import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { onDemandFileService } from '../core/services/on-demand-file.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css',
})
export class LanguageSelectorComponent implements OnInit, OnDestroy {
  @Output() languages: string[] = ['bn', 'en','de','fr'];
  faqs: any[];
  currentRoute: any;
  languageChangeSubscription: Subscription;
  onDemandFileSubscription: Subscription;
  constructor(
    public translate: TranslateService,
    private activeRoute: ActivatedRoute,
    private onDemandFile: onDemandFileService
  ) {}
  ngOnInit(): void {
    this.loadLanguage();

    this.languageChangeSubscription = this.translate.onLangChange.subscribe(
      () => {
        this.onDemandFile.onDataChanges.next(true);
        const routeName = this.activeRoute.snapshot['_routerState'].url;
        
        let fileNameForRoute;
        fileNameForRoute = routeName.substr(1, 3) + '.json';
        if (routeName === '/faqs') {
         
          this.onDemandFileSubscription = this.onDemandFile
            .getFileOnDemand(fileNameForRoute)
            .subscribe((newFaqs) => {
              this.translate.setTranslation(
                this.translate.currentLang || 'en',
                newFaqs,
                true
              );
              this.onDemandFile.onDataChanges.next(false);
            });
        }
      }
    );
  }
  loadLanguage() {
    const lang = 'en';
    this.translate.use(lang);

    
  }
  changeLanguage(event: Event) {
    const lang = (event.target as HTMLSelectElement).value;
    this.translate.use(lang);
  }
  ngOnDestroy(): void {
    this.onDemandFileSubscription.unsubscribe();
    this.languageChangeSubscription.unsubscribe();
  }
}
