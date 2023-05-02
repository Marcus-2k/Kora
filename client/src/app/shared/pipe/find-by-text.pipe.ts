import { Pipe, PipeTransform } from '@angular/core';
import { UserInfo } from '../interface/interfaces';

@Pipe({
  name: 'find_by_text',
})
export class FindByTextPipe implements PipeTransform {
  transform(userInfo: UserInfo[], text: string): UserInfo[] {
    if (userInfo.length === 0 || text === '') {
      return userInfo;
    }
    let newUserInfo: (UserInfo & { full_name: string })[] = [];

    for (let idx = 0; idx < userInfo.length; idx++) {
      const full_name =
        userInfo[idx].first_name + ' ' + userInfo[idx].last_name;

      newUserInfo[idx] = { ...userInfo[idx], full_name };
    }

    newUserInfo = newUserInfo.filter(function (
      e: UserInfo & { full_name: string }
    ) {
      return e.full_name.toLowerCase().indexOf(text.toLowerCase(), 0) !== -1;
    });

    return newUserInfo;
  }
}
