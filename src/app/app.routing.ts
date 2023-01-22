import { Routes, RouterModule } from "@angular/router";
import { MediaItemListComponent } from "./media-item-list/media-item-list.component";

const appRoutes: Routes = [
  {
    path: 'add',
    loadChildren: () => import ('./media-item-form/media-item-form.module').then(m => m.MediaItemFormModule)
  },
  { path: ':medium', component: MediaItemListComponent },
  { path: '', redirectTo: 'all', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);