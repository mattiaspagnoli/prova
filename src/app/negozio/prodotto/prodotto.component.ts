import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent implements OnInit {

  @Input() prodotto:any;
  @Output() clickProdotto = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  aggiungi(): void {
    this.clickProdotto.emit(this.prodotto.name);
  }
}
