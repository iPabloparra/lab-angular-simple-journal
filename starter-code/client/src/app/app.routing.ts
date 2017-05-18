import { Routes } from '@angular/router';

import { JournalListComponent } from './journal-list/journal-list.component';
import { JournalItemComponent}  from './journal-item/journal-item.component'

export const routes: Routes = [
    { path: '', component: JournalListComponent },
    { path: ':id', component: JournalItemComponent},
    { path: '**', redirectTo: '' }
];
