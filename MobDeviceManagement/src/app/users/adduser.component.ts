import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormControl, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "app-adduser",
  templateUrl: "./adduser.component.html",
  styleUrls: ["./adduser.component.css"]
})
export class AdduserComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AdduserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
  userForm: FormGroup = new FormGroup({
    email: this.emailFormControl
  });
  getEmailErrorMessage() {
    return this.emailFormControl.hasError("required")
      ? "You must enter a value"
      : this.emailFormControl.hasError("email")
      ? "Not a valid email"
      : "";
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {}
}
