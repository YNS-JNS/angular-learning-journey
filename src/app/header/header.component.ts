import { Component, OnInit, input } from '@angular/core'; // OnInit est une interface de cycle de vie, nous y reviendrons

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  titreApplication: string = 'My App is ready!';
  constructor() {}

  ngOnInit(): void {
    // Une méthode de cycle de vie, exécutée après la création du composant
    // Initialization logic can go here
    console.log('HeaderComponent initialized');
  }
}
