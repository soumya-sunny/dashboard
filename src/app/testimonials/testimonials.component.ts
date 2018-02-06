import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Testimonial} from './models/Testimonial';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

   testimonials:Array<Testimonial>;

  constructor(private http: HttpClient) {

   }

  ngOnInit() {
	  /* this.testimonials=[{heading:"Best Service",
	  content:"Awesome",
	  author:"Steaphanie"},
	  {heading:"Self starters",
	  content:"Great Team work",
	  author:"Luke"}]

	  */

	   this.http.get('/assets/testimonials.json').subscribe(data => {
      // Read the result field from the JSON response.
      this.testimonials = data[results];
    });
  }

}
