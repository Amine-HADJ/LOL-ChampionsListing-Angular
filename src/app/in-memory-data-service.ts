// Ce service permet de récupérer les données des champions via le fichier JSON champion_info.json.
// in-memory-data-service sert à créer une base de données en mémoire pour stocker les données des champions.


import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Champion } from './champion.interface';
import data from '../assets/champion_info.json';


@Injectable({ providedIn: 'root' })
export class InMemoryDataService implements InMemoryDbService {
  champions: { [key: string]: Champion; } = data.data;

  

  createDb() {
    const db: { champions: Champion[] } = { champions: [] };

    if (this.champions) {
      Object.keys(this.champions).forEach(key => {
        const championData = this.champions ? this.champions[key] : undefined;
        if (championData) {
          const champion: Champion = {
            title: championData.title,
            id: championData.id,
            key: championData.key,
            name: championData.name,
          };
          db.champions.push(champion);
        }
      });
    }



    return db;
  }
}
