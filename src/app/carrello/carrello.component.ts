import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {
@Input() object:any={};
  constructor() { }

  ngOnInit(): void {
  }

}
