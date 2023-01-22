import { Routes, RouterModule } from "@angular/router";
import { MediaItemFormComponent } from "./media-item-form.component";

const MediaItemFormRoutes: Routes = [
  { path: '', component: MediaItemFormComponent }
];

export const MediaItemFormRouting = RouterModule.forChild(MediaItemFormRoutes);


