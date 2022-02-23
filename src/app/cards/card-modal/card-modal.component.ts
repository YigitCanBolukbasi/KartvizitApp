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

  constructor(
    private fb: FormBuilder,
    private cardService: CardService,
    private dialogRef: MatDialogRef<CardModalComponent>,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Cart //  sorulacak !!!
  ) {}

  ngOnInit(): void {
    this.cardForm = this.fb.group({
      name: [this.data?.name || '', Validators.required],
      title: [this.data?.title || '', Validators.max(255)],
      phone: [this.data?.phone || '', Validators.required],
      email: [this.data?.email || '', Validators.email],
      address: [this.data?.address || '', Validators.max(255)],
    });
  }
  addCard() {
    this.cardService.addCard(this.cardForm.value).subscribe((res: any) => {
      this._snackBar.open(res);
      this.dialogRef.close(true);
    });
  }
}
