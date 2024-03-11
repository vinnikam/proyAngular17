import {Component, inject, OnInit} from '@angular/core';
import {EquipoService} from "../../servicios/equipo.service";
import {RouterModule} from "@angular/router";
import {Equipo} from "../equipo";

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.css'
})
export default class EquipoComponent implements OnInit{
  isActivo = false;
  private equipoServicio = inject(EquipoService)

  equipos: Equipo[] = []
  ngOnInit(): void {
    this.consultarEquipos();
  }
  borrarEquipo(equipo: Equipo){
    this.equipoServicio.borrar(equipo.serial).subscribe(() =>{
      console.log( "oK")
      this.consultarEquipos();
    })
  }
  consultarEquipos(){
    this.equipoServicio.listar().subscribe((equipos) => {
      this.equipos = equipos;
    });
  }
}
