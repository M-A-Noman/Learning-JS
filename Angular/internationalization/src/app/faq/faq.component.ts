import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CustomTranslateHttpLoader} from '../custom-translate-http-loader';
import { ActivatedRoute } from '@angular/router';
import { onDemandFileService } from '../core/services/on-demand-file.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit, OnDestroy {
  dataLoading: boolean = false;
  dataChangesSubscription: Subscription;
  faqs: any[] = [];
  title: string;
  isOpen: Map<string, boolean> = new Map<string, boolean>();
  constructor(public translate: TranslateService,private route:ActivatedRoute,private onDemandFile:onDemandFileService) {}

  ngOnInit(): void {

    
    this.dataChangesSubscription = this.onDemandFile.onDataChanges.subscribe((res) => {
      this.dataLoading = res;
    })

  }

  toggleFAQ(index: number) {
    let key = "Q" + index;
   
    if (!this.isOpen.has(key)) {
      this.isOpen.set(key, true);
    }
    else {
      const value = this.isOpen.get(key);
      this.isOpen.set(key, !value);
    }
  }

  ngOnDestroy(): void {
    this.dataChangesSubscription.unsubscribe();
  }
}
