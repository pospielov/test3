import {
    NgModule
} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';
const routes: Routes = [{
        path: '',
        redirectTo: 'screen1',
        pathMatch: 'full'
    },
    {
        path: 'screen1',
        loadChildren: () =>
            import ('./Screen1/Screen1.module').then(m => m.Screen1PageModule),
    },
    {
        path: 'screen2',
        loadChildren: () =>
            import ('./Screen2/Screen2.module').then(m => m.Screen2PageModule),
    },
];
@NgModule({
    imports: [RouterModule.forRoot(
        routes, {
            enableTracing: false,
            useHash: true
        }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule {}