import {NgModule} from '@angular/core'
import {CommonModule} from "@angular/common";
import {AdminRoutingModule} from "./admin-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {AdminComponent} from "./admin.component";
import {TranslateModule} from "@ngx-translate/core";
import {MainTitleComponent} from "../../components/main-title/main-title.component";

@NgModule({
  declarations: [
    AdminComponent,
    MainTitleComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AdminRoutingModule,
    TranslateModule
  ],
  exports: [
    MainTitleComponent
  ],
  providers: []
})
export class AdminModule { }
