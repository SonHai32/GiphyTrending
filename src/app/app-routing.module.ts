import { GifListComponent } from './components/gif-list/gif-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifDetailComponent } from './pages/gif-detail/gif-detail.component';

const routes: Routes = [
  {
    path: '',
    component: GifListComponent,
  },
  {
    path: ':id',
    component: GifDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
