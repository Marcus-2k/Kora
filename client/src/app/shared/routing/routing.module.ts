import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

// Not Found 404
import { NotFoundComponent } from 'src/app/not-found/not-found.component';

// Home page
import { HomeComponent } from 'src/app/layouts/home/home.component';
import { UsersComponent } from 'src/app/layouts/users/users.component';
import { UserNewComponent } from 'src/app/layouts/user-new/user-new.component';

// Guard, Resolver
// import { AuthGuard } from "../guard/auth.guard";
// import { CardResolver } from "src/app/shared/resolver/card.resolver";
// import { CardInfoResolver } from "../resolver/card-info.resolver";
// import { CardCharacteristicsResolver } from "../resolver/card-characteristics.resolver";
// import { CardCommentsResolver } from "../resolver/card-comments.resolver";
// import { CardQuestionsResolver } from "../resolver/card-questions.resolver";
// import { CardPhotoResolver } from "../resolver/card-photo.resolver";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'user-new',
        component: UserNewComponent,
      },
      {
        path: 'user-new/:id',
        component: UserNewComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
