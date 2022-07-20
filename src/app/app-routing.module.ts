import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./domains/home/home.component";
import {AdminGuard} from "./guards/admin.guard";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'b2b', loadChildren: () => import('./domains/b2b/b2b.module').then(md => md.B2bModule)},
  {path: 'b2c', loadChildren: () => import('./domains/b2c/b2c.module').then(md => md.B2cModule)},
  {path: 'design', loadChildren: () => import('./domains/design/design.module').then(md => md.DesignModule)},
  {path: 'boxes', loadChildren: () => import('./domains/boxes/boxes.module').then(md => md.BoxesModule)},
  {path: 'games', loadChildren: () => import('./domains/games/games.module').then(md => md.GamesModule)},
  {path: 'network', loadChildren: () => import('./domains/network/network.module').then(md => md.NetworkModule)},
  {path: 'admin', loadChildren: () => import('./domains/admin/admin.module').then(md => md.AdminModule), canActivate: [AdminGuard]},
  {path: 'signup', loadChildren: () => import('./domains/signUp/sign-up.module').then(md => md.SignUpModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
