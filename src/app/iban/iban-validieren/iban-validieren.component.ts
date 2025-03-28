import {Component, inject, signal} from '@angular/core';
import {IbanService} from "../../service/iban.service";

@Component({
  selector: 'app-iban-validieren',
  imports: [],
  templateUrl: './iban-validieren.component.html',
  styleUrl: './iban-validieren.component.css'
})
export class IbanValidierenComponent {
  ibanService = inject(IbanService);
  iban = signal<string>('');


  validateIban() {
    this.ibanService.validateIban(this.iban());
  }

  onInput(event: Event) {
      const input = event.target as HTMLInputElement;
      this.iban.set(input.value);
  }
}
