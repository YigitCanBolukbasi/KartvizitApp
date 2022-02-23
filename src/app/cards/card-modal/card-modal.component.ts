import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cart } from 'src/app/models/cart';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss'],
})
export class CardModalComponent implements OnInit {
  cardForm!: FormGroup;
  showspinner: boolean = false;

  constructor(
    private fb: FormBuilder,
    private cardService: CardService,
    private dialogRef: MatDialogRef<CardModalComponent>,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Cart //  sorulacak !!!
  ) {}

  ngOnInit(): void {
    this.cardForm = this.fb.group({
      name: [this.data?.name || '', [Validators.required, Validators.max(255)]],
      title: [
        this.data?.title || '',
        [Validators.required, Validators.max(50)],
      ],
      phone: [
        this.data?.phone || '',
        [Validators.required, Validators.max(20)],
      ],
      email: [
        this.data?.email || '',
        [Validators.required, Validators.max(50)],
      ],
      address: [this.data?.address || '', Validators.max(255)],
    });
  }
  addCard() {
    this.showspinner = true;
    this.cardService.addCard(this.cardForm.value).subscribe((res: any) => {
      this._snackBar.open(res);
      this.cardService.getCards();
      this.showspinner = false;
      this.dialogRef.close(true);
    });
  }

  updateCard(): void {
    this.showspinner = true;
    this.cardService
      .updateCard(this.cardForm.value, this.data.id)
      .subscribe((res: any) => {
        console.log(res);
        this._snackBar.open(res);
        this.cardService.getCards();
        this.showspinner = false;
        this.dialogRef.close(true);
      });
  }

  deleteCard(): void {
    this.showspinner = true;
    this.cardService.deleteCard(this.data.id).subscribe((res: any) => {
      this._snackBar.open(res);
      this.cardService.getCards();
      this.showspinner = false;
      this.dialogRef.close(true);
    });
  }
}
