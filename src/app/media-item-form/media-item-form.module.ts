import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MediaItemFormComponent } from "./media-item-form.component";
import { MediaItemFormRouting } from "./media-item-form.routing";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MediaItemFormRouting
  ],
  declarations: [
    MediaItemFormComponent
  ]
})

export class MediaItemFormModule {}