import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'boot-screen',
    pathMatch: 'full'
  },
  {
    path: 'boot-screen',
    loadChildren: () => import('./pages/boot-screen/boot-screen.module').then( m => m.BootScreenPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
