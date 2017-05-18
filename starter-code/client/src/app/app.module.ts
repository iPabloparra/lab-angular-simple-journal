import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JournalListComponent } from './journal-list/journal-list.component';
import { RouterModule } from "@angular/router";
import { routes } from './app.routing';
import {JournalService} from './journal.service';
import { JournalItemComponent } from './journal-item/journal-item.component'



@NgModule({
  declarations: [
    AppComponent,
    JournalListComponent,
    JournalItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
