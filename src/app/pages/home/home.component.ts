import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public itemSeleccionado = 'superheroes-item';
  public superheroes: {
    nombre: string;
    descripcion: string;
  }[] = [
    {
      nombre: 'Superman',
      descripcion: 'Clark Kent, también conocido por su nombre de nacimiento Kal-El o por su nombre de superhéroe Superman, es un personaje ficticio y superhéroe de las películas del Universo extendido de DC, basado en el personaje del mismo nombre creado por Jerry Siegel y Joe Shuster.'
    },
    {
      nombre: 'Wonder Woman',
      descripcion: 'Diana, hija de dioses y princesa de las amazonas, nunca ha salido de su isla. Un día, en el contexto de la Primera Guerra Mundial, un piloto americano se estrella en su isla y Diana salva su vida; el piloto le explica que se está desarrollando una gran guerra que puede devastar el mundo, y Diana parte a la batalla.'
    },
    {
      nombre: 'Spider-man',
      descripcion: 'Se trata de un superhéroe que emplea sus habilidades sobrehumanas, reminiscentes de una araña, para combatir a otros supervillanos que persiguen fines siniestros.'
    },
  ];
  public indexSuperheroeSeleccionado: number = -1;


  constructor() { }

  ngOnInit(): void {
  }

  public seleccionarItem( nombre: string ): void
  {
    this.itemSeleccionado = nombre;
  }

}
