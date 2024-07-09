import { Component, OnInit } from '@angular/core';
import { ChampionService } from './champion-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  champions: any[] = [];
  columnDefs = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Title', field: 'title' },
    { headerName: 'Key', field: 'key' },
    {
      headerName: 'Actions',
      field: 'id',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.onDelete.bind(this),
        label: 'Delete'
      }
    }
  ];

  constructor(private championService: ChampionService) {}

  ngOnInit() {
    this.getChampions();
  }

  getChampions() {
    this.championService.getChampions().subscribe(
      data => {
        this.champions = data;
      },
      error => {
        console.error('Error fetching champions:', error);
      }
    );
  }

  onDelete(params: any) {
    this.championService.deleteChampion(params.data.id).subscribe(
      () => {
        this.getChampions();
      },
      error => {
        console.error('Error deleting champion:', error);
      }
    );
  }

  onGridReady(params: any) {
    params.api.sizeColumnsToFit();
  }
}
