import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
    {
        path: '',
        loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
    },
    {
        path: 'tab2',
        loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
    },
    {
        path: 'details',
        loadChildren: () => import('./details/details.module').then(m => m.DetailsPageModule)
    },
    {
        path: 'volunteer',
        loadChildren: () => import('./volunteer/volunteer.module').then(m => m.VolunteerPageModule)
    },
    {
        path: 'protection',
        loadChildren: () => import('./protection/protection.module').then(m => m.ProtectionPageModule)
    },
    {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map