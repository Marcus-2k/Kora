import { Component, OnInit } from '@angular/core';

import { UserInfo } from 'src/app/shared/interface/interfaces';

import { ApiUserService } from 'src/app/shared/service/server/api-user.service';
import { OpenSnackBarService } from 'src/app/shared/service/open-snack-bar.service';
import { RenameTitleService } from 'src/app/shared/service/rename-title.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(
    private apiUser: ApiUserService,
    private showMessage: OpenSnackBarService,
    private renameTitle: RenameTitleService
  ) {}

  ngOnInit(): void {
    this.apiUser.getUsers().subscribe({
      next: (data) => {
        console.log(data);

        this.usersInfo = data;
        this.loader = false;

        this.sortByType();
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });

    this.renameTitle.renameTitleSite('Список користувачів');
  }

  loader: boolean = true;

  usersInfo: UserInfo[] = [];

  search_text: string = '';
  type_sort: number = 0;

  deleteUser(id: string, idx: number) {
    this.apiUser.deleteUserById(id).subscribe({
      next: (data) => {
        console.log(data);
        this.showMessage.open(data.message);
        this.usersInfo.splice(idx, 1);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  }

  getValueSearch(event: { search_text: string }) {
    console.log('event = ', event);

    this.search_text = event.search_text;
  }

  getTypeSort(event: { type_sort: number }) {
    console.log('event = ', event);

    this.type_sort = event.type_sort;
    this.sortByType();
  }

  sortByType() {
    if (this.type_sort === 0) {
      this.usersInfo.sort((a, b) =>
        a.first_name > b.first_name ? 1 : b.first_name > a.first_name ? -1 : 0
      );
    } else if (this.type_sort === 1) {
      this.usersInfo.sort((a, b) =>
        a.date_of_create > b.date_of_create
          ? 1
          : b.date_of_create > a.date_of_create
          ? -1
          : 0
      );
    }
  }
}
