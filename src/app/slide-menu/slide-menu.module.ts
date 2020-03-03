import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { SlideMenuComponent } from "./slide-menu.component";
import { LoginPageModule } from "../login/login.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [SlideMenuComponent],
  imports: [CommonModule, IonicModule, LoginPageModule, FormsModule],
  exports: [SlideMenuComponent]
})
export class SlideMenuModule {}
