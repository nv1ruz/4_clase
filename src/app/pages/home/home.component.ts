import { Component, OnInit } from '@angular/core';


interface ISuperheroe {
	imagen_url: string;
	nombre: string;
	descripcion: string;
}

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public itemSeleccionado: 'superheroes-item' | 'detalles-item' = 'superheroes-item';
	public superheroeElegido: ISuperheroe = {
		nombre: '',
		descripcion: '',
		imagen_url: ''
	};
	public superheroes: ISuperheroe[] = [
		{
			imagen_url: 'https://wipy.tv/wp-content/uploads/2019/10/significado-de-la-S-de-superman-1-1200x720.jpg',
			nombre: 'Superman',
			descripcion: 'Clark Kent, también conocido por su nombre de nacimiento Kal-El o por su nombre de superhéroe Superman, es un personaje ficticio y superhéroe de las películas del Universo extendido de DC, basado en el personaje del mismo nombre creado por Jerry Siegel y Joe Shuster.'
		},
		{
			imagen_url: 'https://www.quever.news/u/fotografias/m/2021/1/5/f608x342-5136_34859_15.jpg',
			nombre: 'Wonder Woman',
			descripcion: 'Diana, hija de dioses y princesa de las amazonas, nunca ha salido de su isla. Un día, en el contexto de la Primera Guerra Mundial, un piloto americano se estrella en su isla y Diana salva su vida; el piloto le explica que se está desarrollando una gran guerra que puede devastar el mundo, y Diana parte a la batalla.'
		},
		{
			imagen_url: 'https://www.muycomputer.com/wp-content/uploads/2021/08/Spider-Man.jpg',
			nombre: 'Spider-man',
			descripcion: 'Se trata de un superhéroe que emplea sus habilidades sobrehumanas, reminiscentes de una araña, para combatir a otros supervillanos que persiguen fines siniestros.'
		},
	];

	constructor() { }

	ngOnInit(): void {
	}

	// 


	public seleccionarItem(nombre: 'superheroes-item' | 'detalles-item'): void
	{
		this.itemSeleccionado = nombre;
	}


	public elegirPersonaje(superheroe: ISuperheroe): void
	{
		this.itemSeleccionado = 'detalles-item';
		this.superheroeElegido = superheroe;
	}


	public atras(): void
	{
		this.itemSeleccionado = 'superheroes-item';
	}

}
