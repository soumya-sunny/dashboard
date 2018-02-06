import { Component, OnInit } from '@angular/core';
import { BoxComponent } from '../box/box.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

 boxes:Array<object>;
 isValid:boolean
  constructor(){
  	this.boxes=[{heading:'box 1', content: 'content of box 1'},
  	{heading:'box 2', content: 'content of box 2'},
  	{heading:'box 3', content: 'content of box 3'},
  	{heading:'box 4', content: 'content of box 4'}];
    this.isValid=true;
  }

  ngOnInit() {
  }

}
