import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChampionService } from './champion-service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-champion',
  templateUrl: './delete-champion.component.html',
  styleUrls: ['./delete-champion.component.css']
})
export class DeleteChampionComponent implements OnInit {
  deleteForm: FormGroup = new FormGroup({});
  championId: number | undefined;

  constructor(private fb: FormBuilder, private championService: ChampionService, private snackBar: MatSnackBar) { }
  

  ngOnInit(): void {
    this.deleteForm = this.fb.group({
      id: ['', Validators.required]
    });
  }

  onDeleteChampion(): void {
    if (this.deleteForm && this.deleteForm.valid) {
      this.championService.deleteChampion(this.deleteForm.get('id')?.value)
        .subscribe(() => {
          if (this.deleteForm) {
            this.deleteForm.reset();
          }
          this.snackBar.open('Le champion a été supprimé', 'Fermer', { duration: 2000 });
        });
    }
  }

}
