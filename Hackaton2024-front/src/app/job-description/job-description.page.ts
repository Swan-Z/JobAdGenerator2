import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.page.html',
  styleUrls: ['./job-description.page.scss'],
})
export class JobDescriptionPage implements OnInit {

  job_description: any;

  constructor(private miServicio: ServicioService) {
      this.job_description = this.miServicio.job_description;
      console.log("Desde job_description",this.job_description);
      
      
   }

  ngOnInit() {

  }

}
