import { Component, OnInit, ViewChild } from "@angular/core";
import { User } from "../model/user";
import { MatTableDataSource, MatSort } from "@angular/material";
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
  constructor() {}

  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}
