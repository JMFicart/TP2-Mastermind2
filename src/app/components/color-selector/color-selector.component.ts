import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Color } from 'src/app/models/color.model';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.css']
})
export class ColorSelectorComponent implements OnInit {
  couleurpion = ["pink", "green", "blue", "red", "purple", "yellow", "brown"];
  // pcolor = ["white", "white", "white", "white"];
  ptrcouleur: number = 0;
  
  @Output("add")
  addLine= new EventEmitter<Color>()
  constructor() { }

  ngOnInit(): void {
  }

  validate() {
    this.addLine.emit({
      c1: 
        this.pcolor[0],
        this.pcolor[1],
        this.pcolor[2],
        this.pcolor[3]
      ,
    });
  }

  reset() {
    this.ptrcouleur = 0;
    this.pcolor = ["white", "white", "white", "white"];
  }

  choosecolor(i: number) {
    if (this.ptrcouleur <= 3) {
      this.pcolor[this.ptrcouleur] = this.couleurpion[i];
      this.ptrcouleur++;
    }
  }
}
