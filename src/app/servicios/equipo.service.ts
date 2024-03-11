import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Equipo} from "../componentes/equipo";

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  urlRest  = 'http://localhost:8862/api/equipos/';

  private httpClient = inject(HttpClient)

  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};

  public listar() {
    return this.httpClient.get<Equipo[]>(this.urlRest+'', this.httpOptions);
  }
  public detalle(id: number) {
    return this.httpClient.get<Equipo>(this.urlRest+ `${id}`, this.httpOptions);
  }

  public crear(equipo: Equipo) {
    return this.httpClient.post<Equipo>(this.urlRest,equipo, this.httpOptions);
  }

  public modificar(equipo: any) {
    console.log(equipo)
    return this.httpClient.put<Equipo>(this.urlRest,equipo, this.httpOptions);
  }
  public borrar(id: number) {
    return this.httpClient.delete(this.urlRest+ `${id}`, this.httpOptions);
  }
}
