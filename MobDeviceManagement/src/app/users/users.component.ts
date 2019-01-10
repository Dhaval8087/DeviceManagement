import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { User } from "../model/user";
import {
  MatTableDataSource,
  MatSort,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material";
@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  ELEMENT_DATA: User[] = [
    {
      empid: "1",
      name: "Name 1",
      email: "name1@name.com",
      phonenumber: "9898989898",
      userid: "123456789"
    },
    {
      empid: "2",
      name: "Name 2",
      email: "name2@name.com",
      phonenumber: "999999999",
      userid: "123456789"
    },
    {
      empid: "3",
      name: "Name 1",
      email: "name1@name.com",
      phonenumber: "9898989898",
      userid: "123456789"
    },
    {
      empid: "4",
      name: "Name 1",
      email: "name1@name.com",
      phonenumber: "9898989898",
      userid: "123456789"
    }
  ];
  displayedColumns = ["empid", "name", "email", "phonenumber", "action"];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  constructor(public dialog: MatDialog) {}

  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.dataSource.sort = this.sort;
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
