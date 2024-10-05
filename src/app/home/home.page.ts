import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonText, IonInput, IonButton, IonRadioGroup, IonRadio, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonText, IonInput, IonButton, FormsModule, IonRadioGroup, IonRadio, IonItem, IonLabel], // Agregando todos los componentes que usas en el HTML
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Permitir componentes personalizados como los de Ionic
})
export class HomePage {
  bogeto: number = 0;

  // Define el tipo para la moneda
  selectedCurrency: 'dolar' | 'bolivar' | 'euro' = 'dolar'; 

  // Define las tasas de conversión
  conversionRates: Record<'dolar' | 'bolivar' | 'euro', number> = {
    dolar: 20,     // Tasa de conversión de Dólar a Pesos
    bolivar: 0.02, // Tasa de conversión de Bolívar a Pesos
    euro: 22       // Tasa de conversión de Euro a Pesos
  };

  pesos() {
    // Asegura que selectedCurrency es una clave válida
    const conversionRate = this.conversionRates[this.selectedCurrency]; 
    const result = this.bogeto * conversionRate;
    console.log(`Cantidad convertida a pesos: ${result}`);
  }
}
