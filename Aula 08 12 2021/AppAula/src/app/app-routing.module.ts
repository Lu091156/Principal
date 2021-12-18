import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogosComponent } from './views/jogos/jogos.component';
import { HomeComponent } from './views/home/home.component';
import { homedir } from 'os';

const routes: Routes = [
    {
    path: 'jogos',
    component: JogosComponent
    },
    {
    path: '',
    component: HomeComponent  
    }
    
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
