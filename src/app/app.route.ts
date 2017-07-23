import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {UserComponent} from './component/user.component';
import {aboutComponent} from './component/about.component';

const appRoutes : Routes= [
    {
        path:'',
        component : UserComponent
},
    {
        path:'about',
        component : aboutComponent
    }
]

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);