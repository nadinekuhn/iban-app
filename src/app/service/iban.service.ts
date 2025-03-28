import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IbanValidationResult} from "../data/interfaces";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IbanService {
  private apiUrl = 'https://openiban.com/';
  // private apiKey = 'DEIN_API_KEY'; // API Key einfügen
  http = inject(HttpClient);
  result = signal<IbanValidationResult | null>(null); // Validierungsergebnis
  loading = signal<boolean>(false); // Ladezustand


  // IBAN-Validierung ausführen
  validateIban(iban: string): void {
    if (!iban) return; // Kein IBAN -> keine Anfrage

    this.loading.set(true);

    this.http
        .get<any>(`${this.apiUrl}/validate/${iban}?getBIC=true&validateBankCode=true`)
        .pipe(map((response) => this.mapToIbanValidationResult(response)))
        .subscribe({
          next: (result: IbanValidationResult) => {
            console.log(result)
            this.result.set(result);
            this.loading.set(false);
          },
          error: () => {
            this.result.set(null);
            this.loading.set(false);
          },
        });
  }

  // Mapping auf das Interface
  private mapToIbanValidationResult(response: any): IbanValidationResult {
    return {
      valid: response.valid ?? false,
      messages: response.messages ?? [],
      iban: response.iban ?? '',
      bankData: {
        bankCode: response.bankData?.bankCode ?? '',
        name: response.bankData?.name ?? '',
        zip: response.bankData?.zip ?? '',
        city: response.bankData?.city ?? '',
        bic: response.bankData?.bic ?? '',
      },
      checkResults: {
        bankCode: response.checkResults?.bankCode ?? false,
      },
    };
  }
}
