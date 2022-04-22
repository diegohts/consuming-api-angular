import { Component } from '@angular/core';
import { CarroService } from './carro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-Angular';

  constructor(private carroService: CarroService){

  }

}
