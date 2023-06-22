import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'portada',
        loadChildren: () => import('../portada/portada.module').then( m => m.PortadaPageModule)
      },
      {
        path: 'personajes',
        loadChildren: () => import('../personajes/personajes.module').then( m => m.PersonajesPageModule)
      },
      {
        path: 'momentos',
        loadChildren: () => import('../momentos/momentos.module').then( m => m.MomentosPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: 'vida',
        loadChildren: () => import('../vida/vida.module').then( m => m.VidaPageModule)
      },
      {
        path: 'contratame',
        loadChildren: () => import('../contratame/contratame.module').then( m => m.ContratamePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/portada',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/portada',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
