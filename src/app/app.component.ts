import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Souvent importé ici pour *ngIf, *ngFor
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// Décorateur (@Component):
// Ce décorateur marque une classe comme étant un composant Angular et fournit des métadonnées de configuration
@Component({
  selector: 'app-root', // Nom de la balise HTML pour utiliser ce composant
  standalone: true,
  imports: [
    CommonModule, // Nécessaire pour *ngIf, *ngFor, etc.
    FormsModule,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // Propriétés pour l'interpolation et la liaison de propriété
  titrePrincipal: string = 'Ma super App Dynamique';
  logoUrl: string = 'assets/logo.jpg'; // Supposez que vous avez un logo.png dans src/assets/
  isButtonDisabled: boolean = false;

  // Méthode pour la liaison d'événement
  onButtonClick(): void {
    alert('Bouton cliqué !');
    this.isButtonDisabled = true; // Désactiver le bouton après le clic
  }
}
