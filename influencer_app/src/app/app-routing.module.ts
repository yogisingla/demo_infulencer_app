import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'request-gig',
    pathMatch: 'full'
  },
  {
    path: 'request-gig',
    loadChildren: () => import('./request-gig/request-gig.module').then( m => m.RequestGigPageModule)
  },
  {
    path: 'create-gig',
    loadChildren: () => import('./create-gig/create-gig.module').then( m => m.CreateGigPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
