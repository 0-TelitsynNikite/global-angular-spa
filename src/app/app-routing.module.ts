import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'b2b', loadChildren: () => import('./domains/b2b/b2b.module').then(md => md.B2bModule)},
  {path: 'b2c', loadChildren: () => import('./domains/b2c/b2c.module').then(md => md.B2cModule)},
  {path: 'design', loadChildren: () => import('./domains/design/design.module').then(md => md.DesignModule)},
  {path: 'boxes', loadChildren: () => import('./domains/boxes/boxes.module').then(md => md.BoxesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
