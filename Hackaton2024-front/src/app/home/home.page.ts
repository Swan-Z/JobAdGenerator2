import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from '../services/datos.service';
import { HttpClient } from '@angular/common/http';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre: string = "";
  // Descripción del problema del paciente
  issue_description: string = "";
  isLoading: boolean = false; 

  constructor(
    private router: Router,
    private datos: DatosService,
    public http: HttpClient,
    private miServicio: ServicioService
    
  ) {

  }

  verMedicamentos(): void {
    this.isLoading = true;
    const request = { position: this.issue_description, company: this.nombre};    
    // Enviar la solicitud POST al servidor Flask
    this.http.post("http://localhost:8000/api/job_posting", request)
      .subscribe((response: any) => {
        // Manejar la respuesta del servidor aquí
        console.log(response);
        
        this.miServicio.jobDescription = response.result;
        this.isLoading = false;
        this.router.navigate(['/job-description']);
      }, (error: any) => {
        // Manejar errores aquí
        console.error(error);
        this.isLoading = false;
      });


    
  }
}