import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryEditorComponent } from './entry-editor/entry-editor.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'workouts', component: WorkoutsComponent },
  { path: 'workouts/:id', component: EntryEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
