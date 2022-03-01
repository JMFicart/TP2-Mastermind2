import { Component, Input, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color.model';

@Component({
  selector: 'app-disp-resultat',
  templateUrl: './disp-resultat.component.html',
  styleUrls: ['./disp-resultat.component.css']
})
export class DispResultatComponent implements OnInit {
  // ecolor: Color[] = [{c1:'white', c2:'white', c3:'white', c4:'white'}]
  ecolor: Color[] = []
  ebgcolor: Color[] = [{c1:'white', c2:'white', c3:'white', c4:'white'}]
  pcolor: Color = {c1:"",c2:"",c3:"",c4:""}

  @Input()
  essaicolor: Color = {c1:"",c2:"", c3:"", c4:""}//| undefined;
  
  constructor() {}

  ngOnInit(): void {
  }
  
  ngOnChanges(nl: Color) {
    console.log('ngOnChanges')
    console.log(this.essaicolor)

    // this.addLine.emit({
    //   c1:  this.pcolor[0],
    //   c2:  this.pcolor[1],
    //   c3:  this.pcolor[2],
    //   c4:  this.pcolor[3]
    // });

    // this.ecolor.push(c1: this.essaicolor.c1)
    console.log(this.ecolor.length)
  }
}
