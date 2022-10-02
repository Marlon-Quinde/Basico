import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Iroman','Hulk','Marlon'];
  heroeBorrado: string ='';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
