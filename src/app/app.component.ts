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
  ], // Liste des modules dont les éléments exportés sont requis par le module courant.
  templateUrl: './app.component.html', // Chemin vers le fichier HTML
  styleUrl: './app.component.css', // Chemin vers le fichier CSS (optionnel)
})
export class AppComponent {
  // Propriétés pour l'interpolation et la liaison de propriété
  titrePrincipal: string = 'Ma super App Dynamique';
  logoUrl: string = 'assets/logo.jpg'; // Supposez que vous avez un logo.png dans src/assets/
  isButtonDisabled: boolean = false;
  // -------------------------------------//
  // Propriétés pour *ngIf
  isLoggedIn: boolean = true;
  username: string = 'John';
  // -------------------------------------//
  // Propriétés pour *ngFor
  taches: string[] = ['Apprendre Angular', 'Faire les courses', 'Promener le chien'];

  nouvelleTache: string = ''; // Pour la liaison bidirectionnelle
  // -------------------------------------//
  // Méthode pour la liaison d'événement
  onButtonClick(): void {
    alert('Bouton cliqué !');
    this.isButtonDisabled = true; // Désactiver le bouton après le clic
  }
  // -------------------------------------//
  // Méthode pour *ngFor et liaison d'événement
  ajouterTache(): void {
    if (this.nouvelleTache.trim() !== '') {
      this.taches.push(this.nouvelleTache);
      this.nouvelleTache = ''; // Vider le champ après ajout
    }
  }
  // -------------------------------------//
  // Méthode pour changer l'état de connexion
  toggleLogin(): void {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
