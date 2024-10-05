import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';  // Importa el componente standalone

const routes: Routes = [
  {
    path: '',
    component: HomePage,  // Definir la ruta para el componente HomePage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),  // Importa RouterModule para rutas hijas
    HomePage // Importa el componente standalone aquí
  ],
})
export class HomePageModule {}
