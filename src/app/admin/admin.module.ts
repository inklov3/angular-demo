import {NgModule} from '@angular/core';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {SharedModule} from "src/app/@shared/shared.module";
import {BackTopModule, DialogService} from "ng-devui";
import {DaLayoutModule} from "src/app/@shared/layouts/da-layout";

@NgModule({
    imports: [AdminRoutingModule, SharedModule, BackTopModule, DaLayoutModule],
    declarations: [AdminComponent],
    providers: [DialogService]
})
export class AdminModule {
}
