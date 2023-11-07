import { Personne } from 'src/app/model/personne.model';
import { PersonneService } from '../../service/personne.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent {
  title = 'angular_Test';
  personne : any
  constructor(private service: PersonneService) { }

  ngOnInit() {
    this.service.getPersons().subscribe({
      next: (data) => {
        this.personne = data;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des données :', error);
      }
    });

  }
}
