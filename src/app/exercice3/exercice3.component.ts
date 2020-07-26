import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  template: `<p *ngIf=statut>p1<p> <p *ngIf=!statut>p2<p>
<button (click)="changevalue()">click</button>`,
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {

  constructor() { }
  statut: boolean = true;

  ngOnInit() {
  }
  changevalue() {
    this.statut = !this.statut;
    alert(this.statut);
  }

}
