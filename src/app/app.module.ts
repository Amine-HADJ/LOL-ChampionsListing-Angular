// Ce fichier est le module racine de l'application.
// Il importe les autres modules nécessaires pour que l'application fonctionne correctement.


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { AgGridModule } from '@ag-grid-community/angular';
import { AppComponent } from './app.component';
import { ChampionsListComponent } from './champions-list.component';
import { DeleteChampionComponent } from './delete-champion.component';
import { AppRoutingModule } from './app-routing.module';
import { ChampionService } from './champion-service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data-service';
import 'ag-grid-community';



@NgModule({
  declarations: [
    AppComponent,
    ChampionsListComponent,
    DeleteChampionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatTableModule,
    AgGridModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [ChampionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

