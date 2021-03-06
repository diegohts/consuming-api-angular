import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { ICarro } from './ICarros';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private httpClient: HttpClient) { }

  buscarTodos(){
    return this.httpClient.get<ICarro[]>(`${API_PATH}carros`).toPromise();
  }

  buscarPorId(carroId: number){
    return this.httpClient.get<ICarro>(`${API_PATH}carros/${carroId}`).toPromise();
  }

  adicionar(carro: ICarro){
    return this.httpClient.post<ICarro>(`${API_PATH}carros/`, carro).toPromise();
  }

  atualizar(carro: ICarro){
    return this.httpClient.put<ICarro>(`${API_PATH}carros/${carro.id}`, carro).toPromise();
  }

  excluir(carroId: number){
    return this.httpClient.delete<void>(`${API_PATH}carros/${carroId}`).toPromise();
  }

}
