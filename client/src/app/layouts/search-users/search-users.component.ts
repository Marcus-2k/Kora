import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.scss'],
})
export class SearchUsersComponent {
  @Output() valueSearch = new EventEmitter();
  @Output() valueTypeSort = new EventEmitter();

  search_text: string = '';
  type_sort: number = 0;

  setValueSearch() {
    this.valueSearch.emit({ search_text: this.search_text });
  }
  setTypeSort() {
    this.valueTypeSort.emit({ type_sort: this.type_sort });
  }
}
