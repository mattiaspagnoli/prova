import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-negozio',
  templateUrl: './negozio.component.html',
  styleUrls: ['./negozio.component.css']
})
export class NegozioComponent implements OnInit {

  prodotti = [
    { name: 'banane', price: 3.5 },
    { name: 'mele', price: 1.59 },
    { name: 'pere', price: 2.8 },
    { name: 'mais', price: 5.8 }
  ];

  carrello = [
    { name: 'banane', selezionati: 0 },
    { name: 'mele', selezionati: 0 },
    { name: 'pere', selezionati: 0 },
    { name: 'mais', selezionati: 0 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  aggiungiProdottoCliccato(prodottoName: string): void {
    this.carrello.forEach(i => {
      if (i.name === prodottoName) {
        i.selezionati++;
      }
    });
  }

}
