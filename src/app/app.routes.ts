import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsCharacterComponent } from './component/details-character/details-character.component';
import { HomeComponent } from './component/home-componemt/home-component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Component'
    },
    {
        path: 'details-character/:id',
        component: DetailsCharacterComponent,
        title: 'Details Component'
    }
];
