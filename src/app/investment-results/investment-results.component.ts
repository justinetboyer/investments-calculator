import { Component, Input } from '@angular/core';
import {  InvestmentResult } from '../investment-input';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input() investmentData?: InvestmentResult[];

  constructor() {}

  setInvestmentData(data: any[]) {
    this.investmentData = data;
  }
}
