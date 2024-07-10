// Ce composant affiche la liste des champions.
// Il utilise le service ChampionService pour récupérer les champions.
// 


import { Component, OnInit } from '@angular/core';
import { ChampionService } from './champion-service';
import { GridApi, GridReadyEvent } from 'ag-grid-community';
import { Champion } from './champion.interface';
import 'ag-grid-community';

@Component({
  selector: 'app-champions-list',
  templateUrl: './champions-list.component.html',
  styleUrls: ['./champions-list.component.css']
})
export class ChampionsListComponent implements OnInit {
  champions: Champion[] = [];
  displayedColumns: string[] = ['id', 'name', 'title', 'key'];
  columnDefs = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Nom', field: 'name' },
    { headerName: 'Titre', field: 'title' },
    { headerName: 'Clé', field: 'key' },
  ];
  gridApi: GridApi | undefined;

  constructor(private championService: ChampionService) { }

  ngOnInit(): void {
    this.getChampions();
  }

  getChampions(): void {
    this.championService.getChampions()
      .subscribe((champions: any[] | undefined) => {
        // .suscribe() permet de s'abonner à un Observable et d'obtenir les données émises par celui-ci, ici les champions.
        this.champions = champions || [];
      });
  }

  onGridReady(event: GridReadyEvent) {
    this.gridApi = event.api;
  }
}
