import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = '0';
  annualInvestment = '10';
  expectedReturn = '0';
  duration = '0';

  @Output() calculate = new EventEmitter<InvestmentInput>();

  onSubmit() {
    console.log(
      'Form submitted!',
      this.initialInvestment,
      this.annualInvestment,
      this.expectedReturn,
      this.duration
    );
    this.calculate.emit({
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration,
    });
  }
}
