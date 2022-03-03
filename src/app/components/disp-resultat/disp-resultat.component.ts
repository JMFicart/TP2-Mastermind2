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
  nbreCorrect: number = 0
  trouve: boolean = false
  nbreEssai: number = 0
  combinaison: Color[] = [{c1:'green', c2:'blue', c3:'blue', c4:'red'}]
  
  @Input()
  essaicolor: Color = {c1:"",c2:"", c3:"", c4:""}//| undefined;

  constructor() {}

  ngOnInit(): void {
  }
  
  // ngOnChanges(nl: Color) {
  //   console.log('ngOnChanges')
  //   console.log(this.essaicolor)

  //   // this.addLine.emit({
  //   //   c1:  this.pcolor[0],
  //   //   c2:  this.pcolor[1],
  //   //   c3:  this.pcolor[2],
  //   //   c4:  this.pcolor[3]
  //   // });

  //   // this.ecolor.push(c1: this.essaicolor.c1)
  //   console.log(this.ecolor.length)
  // }

  checkResult():boolean {
  //   this.nbreCorrect = 0;
  //   for(var i = 0; i < 4; i++){
  //     if(this.ecolor[this.cptEssai][i]==this.combinaison[i]){
  //       // bg green
  //       this.ebgcolor[this.cptEssai][i] = "green";
  //       this.nbreCorrect++;
  //     }
  //     else {
  //       this.trouve = false;
  //       for(var j = 0; j < 4; j++){
  //         if(this.ecolor[this.cptEssai][i]==this.combinaison[j]){
  //           if(this.ecolor[this.cptEssai][i]!=this.ecolor[this.cptEssai][j]){
  //             this.trouve = true;
  //           }
  //           j = 4;
  //         }
  //       }
  //       if(this.trouve==true){
  //         // bg yellow
  //         this.eBGColor[this.cptEssai][i] = "yellow";
  //       }else{
  //         // bg red
  //         this.eBGColor[this.cptEssai][i] = "red";
  //       }
  //     }
  //   }

  //   return (this.nbreCorrect == 4);
  return false
  }
}
