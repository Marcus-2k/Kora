import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

import { RenameTitleService } from 'src/app/shared/service/rename-title.service';
import { OpenSnackBarService } from 'src/app/shared/service/open-snack-bar.service';
import { ApiUserService } from 'src/app/shared/service/server/api-user.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserInfo } from 'src/app/shared/interface/interfaces';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss'],
})
export class UserNewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private renameTitle: RenameTitleService,
    private showMessage: OpenSnackBarService,
    private apiUser: ApiUserService
  ) {}

  ngOnInit(): void {
    console.log('Start ngOnInit User-New');

    this.route.params.subscribe((params: Params) => {
      this.id_user = params['id'];
    });

    if (this.id_user) {
      this.updateMode = true;
      this.apiUser.getUserInfo(this.id_user).subscribe({
        next: (data) => {
          console.log(data);
          this.initUserInfo(data);
        },
        error: (error) => {},
        complete: () => {},
      });
    } else {
      this.initUserInfo(null);
    }

    this.renameTitle.renameTitleSite('Створення користувача');
  }

  updateMode: boolean = false;
  id_user: string | undefined;

  formUserNew: UntypedFormGroup | undefined;

  initUserInfo(data: null | UserInfo) {
    this.formUserNew = new UntypedFormGroup({
      first_name: new UntypedFormControl(data?.first_name, [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$'),
        Validators.minLength(4),
        Validators.maxLength(16),
      ]),
      last_name: new UntypedFormControl(data?.last_name, [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$'),
        Validators.minLength(4),
        Validators.maxLength(16),
      ]),
      email: new UntypedFormControl(data?.email, [
        Validators.required,
        Validators.email,
        Validators.maxLength(32),
      ]),
      date_of_birth: new UntypedFormControl(data?.date_of_birth, [
        Validators.required,
      ]),
    });
  }

  onSubmit() {
    if (this.formUserNew) {
      if (this.updateMode === false) {
        // Create new user
        this.formUserNew.disable();
        this.apiUser.createUser(this.formUserNew.value).subscribe({
          next: (data) => {
            console.log(data);
            this.showMessage.open(data.message);
          },
          error: (error) => {
            this.showMessage.open(error.message);
            this.formUserNew?.enable();
          },
          complete: () => {
            this.router.navigate(['users']);
          },
        });
      } else {
        // Change user info
        this.formUserNew.disable();
        if (this.id_user) {
          console.log(this.formUserNew.value);
          this.apiUser
            .updateUser(this.formUserNew.value, this.id_user)
            .subscribe({
              next: (data) => {
                console.log(data);
                this.showMessage.open(data.message);
              },
              error: (error) => {
                this.showMessage.open(error.message);
                this.formUserNew?.enable();
              },
              complete: () => {
                this.router.navigate(['users']);
              },
            });
        }
      }
    }
  }
}
