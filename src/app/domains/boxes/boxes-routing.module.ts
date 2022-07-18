import {NgModule} from '@angular/core'
import {Routes, RouterModule} from "@angular/router";
import {BoxesComponent} from "./boxes.component";

const routes: Routes = [
  {path: '', component: BoxesComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoxesRoutingModule {}
