/**
 * @fileoverview added by tsickle
 * Generated from: lib/cplx-alert.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CplxAlertComponent } from './cplx-alert.component';
import { CplxAlertService } from './cplx-alert.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
var CplxAlertModule = /** @class */ (function () {
    function CplxAlertModule() {
    }
    /**
     * @return {?}
     */
    CplxAlertModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: CplxAlertModule,
            providers: [CplxAlertService, RouterModule]
        };
    };
    CplxAlertModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, RouterModule],
                    declarations: [CplxAlertComponent],
                    exports: [CplxAlertComponent],
                    providers: [CplxAlertService]
                },] }
    ];
    return CplxAlertModule;
}());
export { CplxAlertModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hbGVydC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jcGx4LWFsZXJ0LyIsInNvdXJjZXMiOlsibGliL2NwbHgtYWxlcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DO0lBQUE7SUFjQSxDQUFDOzs7O0lBTk8sdUJBQU87OztJQUFkO1FBQ0MsT0FBTztZQUNOLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLFlBQVksQ0FBQztTQUMzQyxDQUFDO0lBQ0gsQ0FBQzs7Z0JBYkQsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUM7b0JBQ3JDLFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO29CQUNsQyxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDN0IsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7aUJBQzdCOztJQVNELHNCQUFDO0NBQUEsQUFkRCxJQWNDO1NBUFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENwbHhBbGVydENvbXBvbmVudCB9IGZyb20gJy4vY3BseC1hbGVydC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDcGx4QWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi9jcGx4LWFsZXJ0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXIvc3JjL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGVdLFxyXG5cdGRlY2xhcmF0aW9uczogW0NwbHhBbGVydENvbXBvbmVudF0sXHJcblx0ZXhwb3J0czogW0NwbHhBbGVydENvbXBvbmVudF0sXHJcblx0cHJvdmlkZXJzOiBbQ3BseEFsZXJ0U2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDcGx4QWxlcnRNb2R1bGUge1xyXG5cdHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IENwbHhBbGVydE1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbQ3BseEFsZXJ0U2VydmljZSwgUm91dGVyTW9kdWxlXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuIl19