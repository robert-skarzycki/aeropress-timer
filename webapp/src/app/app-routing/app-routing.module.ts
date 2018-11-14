import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from '../start/start.component';
import { CoffeeGrindingComponent } from '../coffee-grinding/coffee-grinding.component';
import { CleanFilterComponent } from '../clean-filter/clean-filter.component';

export const appRoutes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'coffee-grinding', component: CoffeeGrindingComponent },
  { path: 'clean-filter', component: CleanFilterComponent },
  { path: '**', component: StartComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
