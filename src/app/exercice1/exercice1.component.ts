import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  values = ''; 

  constructor() { }

  public onKey(event: any): void {
    this.values = (event.target as HTMLInputElement).value ;
    
  }

  public attribut: string = "Un super titre pour le projet des bases";
  public inputType = 'date';
  ngOnInit() {
  }

}
