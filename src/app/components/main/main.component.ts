import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  combinaison: Color[] = [{c1:'green', c2:'blue', c3:'blue', c4:'red'}]
  pcolor: Color = {c1:'white', c2:'white', c3:'white', c4:'white'}

  constructor() { }

  ngOnInit(): void {
  }

}
