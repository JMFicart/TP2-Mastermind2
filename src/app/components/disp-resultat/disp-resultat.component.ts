import { Component, Input, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color.model';

@Component({
  selector: 'app-disp-resultat',
  templateUrl: './disp-resultat.component.html',
  styleUrls: ['./disp-resultat.component.css']
})
export class DispResultatComponent implements OnInit {
  ecolor: Color[] = [{c1:'white', c2:'white', c3:'white', c4:'white'}]
  ebgcolor: Color[] = [{c1:'white', c2:'white', c3:'white', c4:'white'}]

  @Input()
  essaicolor: Color | undefined;
  
  constructor() {}

  ngOnInit(): void {
  }
}
