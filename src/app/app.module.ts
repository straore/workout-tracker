import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxLoadingModule} from 'ngx-loading';
import { NgbModule, NgbDateAdapter} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { EntryEditorComponent } from './entry-editor/entry-editor.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { WorkoutsApiService } from './services/workouts-api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { DateStringAdapterService } from './services/date-string-adapter.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkoutsComponent,
    EntryEditorComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({}),
    NgbModule.forRoot()
  ],
  providers: [
    WorkoutsApiService,
  {provide:NgbDateAdapter, useClass: DateStringAdapterService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
