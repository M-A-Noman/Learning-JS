
import { Injectable, inject } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, ResolveFn } from '@angular/router';
import { onDemandFileService } from './core/services/on-demand-file.service';

export const faqsResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {
  const faqs = inject(onDemandFileService);
  
  const faq = faqs.getFileOnDemand('faq.json');
  faqs.onDataChanges.next(false);
  return faq;
}
