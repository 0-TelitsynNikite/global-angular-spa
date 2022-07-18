import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {B2cComponent} from "./b2c.component";

const routes: Routes = [
  {path: '', component: B2cComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class B2cRoutingModule {}
