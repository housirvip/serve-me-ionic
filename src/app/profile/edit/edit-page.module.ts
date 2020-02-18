import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ProfilePage } from "../profile.page";
import { EditPage } from "./edit.page";
import { MePage } from "../../me/me.page";
import { RegisterPage } from "../../register/register.page";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: "", component: EditPage }])
  ],
  entryComponents: [EditPage],
  declarations: [EditPage]
})
export class EditPageModule {}
