import {
  Component,
  OnInit,
  ViewChild,
  Inject,
  AfterViewInit
} from "@angular/core";
import { User } from "../model/user";
import {
  MatTableDataSource,
  MatSort,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material";

import { UserService } from "./user.service";
import { Observable } from "rxjs";
import { SpinnerComponent } from "../common/spinner/spinner.component";
@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit, AfterViewInit {
  ELEMENT_DATA: User[] = [];
  displayedColumns = ["empid", "name", "email", "phonenumber", "action"];
  dataSource;
  errorMessage;
  isloading: false;
  dialogRef: MatDialogRef<SpinnerComponent>;
  constructor(public dialog: MatDialog, private userservice: UserService) {}

  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    setTimeout(() => {
      this.dialogRef = this.dialog.open(SpinnerComponent, {
        panelClass: "transparent",
        disableClose: true
      });
    });
    this.getUsers();
  }
  getUsers() {
    this.userservice.getUsers().subscribe(
      (users: any) => {
        this.dataSource = new MatTableDataSource(users.users);
        this.dataSource.sort = this.sort;
        this.dialogRef.close();
      },
      error => (this.errorMessage = <any>error)
    );
  }

  onEdit(event) {
    const findUser = Object.assign(
      {},
      this.dataSource.data.find(p => p.empid === event.target.id)
    );
    const dialogRef = this.dialog.open(EdituserComponent, {
      width: "250px",
      data: { user: findUser, isedit: true }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.dataSource.data.findIndex(
          p => p.empid === result.empid
        );
        this.dataSource.data[index] = result;
        this.dataSource = new MatTableDataSource(this.dataSource.data);
      }
    });
  }
  onDelete(event) {
    const dialogRef = this.dialog.open(EdituserComponent, {
      width: "250px",
      data: { user: {}, isedit: false }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource = new MatTableDataSource(
          this.dataSource.data.filter(p => p.empid !== event.target.id)
        );
      }
    });
  }
}
@Component({
  // tslint:disable-next-line:component-selector
  selector: "edituser.component",
  templateUrl: "edituser.component.html"
})
export class EdituserComponent {
  constructor(
    public dialogRef: MatDialogRef<EdituserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
