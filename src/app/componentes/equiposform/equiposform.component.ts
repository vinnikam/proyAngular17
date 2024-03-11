import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {EquipoService} from "../../servicios/equipo.service";
import {Equipo} from "../equipo";
import {Observable} from "rxjs";
import {response} from "express";

@Component({
  selector: 'app-equiposform',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './equiposform.component.html',
  styleUrl: './equiposform.component.css'
})
export default class EquiposformComponent implements OnInit{

  private fb = inject(FormBuilder);
  private equipoServicio = inject(EquipoService);
  private router = inject(Router);
  private route = inject(ActivatedRoute)
  form? : FormGroup;
  equipo? : Equipo;
  errors?: string[]




  guardar(){

    if (this.form?.invalid){
      return ;
    }
    let request: Observable<Equipo>;
    const equipo = this.form!.value;
    if (this.equipo){
      request = this.equipoServicio.modificar( equipo);

    }else{
      request = this.equipoServicio.crear(equipo);
    }

    //console.log(this.form.value);

    request.subscribe({
      next: () => {
        this.errors = []
      this.router.navigate(['/']);
      },
      error : response => {
        this.errors = response.error.errors;
      }
    });



  }

  ngOnInit(): void {
    const serial=this.route.snapshot.paramMap.get('serial');
    if (serial){
      this.equipoServicio.detalle(parseInt(serial)).subscribe(equipo => {
          this.equipo = equipo;
          this.form = this.fb.group({
            serial: [equipo.serial],
          nombre: [equipo.nombre, [Validators.required]],
          descripcion: [equipo.descripcion,[Validators.required]]
        });
      });
    }else{
      this.form = this.fb.group({
        nombre: ['', [Validators.required]],
        descripcion: ['',[Validators.required]]
      });
    }


  }
}
