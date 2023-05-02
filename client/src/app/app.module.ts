import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material UI
import { MaterialModule } from './shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RoutingModule } from './shared/routing/routing.module';

// Pipe, else
import { FindByTextPipe } from './shared/pipe/find-by-text.pipe';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './layouts/home/home.component';
import { UserNewComponent } from './layouts/user-new/user-new.component';
import { UsersComponent } from './layouts/users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './layouts/components/header/header.component';
import { SearchUsersComponent } from './layouts/search-users/search-users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserNewComponent,
    UsersComponent,
    NotFoundComponent,
    HeaderComponent,
    SearchUsersComponent,
    FindByTextPipe,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
