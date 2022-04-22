import { Component } from '@angular/core';
import { CarroService } from './carro.service';
import { ICarro } from './ICarros';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-Angular';

  constructor(private carroService: CarroService){

  }

  buscarTodosCarros(){
    this.carroService.buscarTodos()
      .then(carros => console.log(carros))
      .catch(error => console.error(error));
  }

  buscarSomenteUm(){
    this.carroService.buscarPorId(7)
      .then(carro => console.log(carro))
      .catch(error => console.error(error));
  }

  adicionarCarro(){
    const carro: ICarro = {
      marca: "Volkswagen",
      nome: "Gol 1.0"
    }

    this.carroService.adicionar(carro)
      .then(carro => console.log('Carro adicionado!', carro))
      .catch(error => console.error(error));
  }

  atualizarCarro(){
    const carro: ICarro = {
      id: 6,
      marca: "Honda",
      nome: "Civic"
    }

    this.carroService.atualizar(carro)
      .then(carro => console.log('Carro atualizado!', carro))
      .catch(error => console.error(error));
  }

  excluirCarro(){
    this.carroService.excluir(4)
      .then(res => console.log('Carro removido!', res))
      .catch(error => console.error(error));
  }

}
