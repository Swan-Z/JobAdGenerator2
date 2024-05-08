import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class ServicioService {
  job_description: any;
  
  get jobDescription(): string {
    return this.job_description;
  }

  set jobDescription(value: string) {
    this.job_description = value;
  }
}
