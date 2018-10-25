/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CplxAlertComponent } from './cplx-alert.component';
import { CplxAlertService } from './cplx-alert.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
export class CplxAlertModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: CplxAlertModule,
            providers: [CplxAlertService, RouterModule]
        };
    }
}
CplxAlertModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule],
                declarations: [CplxAlertComponent],
                exports: [CplxAlertComponent],
                providers: [CplxAlertService]
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hbGVydC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jcGx4LWFsZXJ0LyIsInNvdXJjZXMiOlsibGliL2NwbHgtYWxlcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFTL0MsTUFBTTs7OztJQUNMLE1BQU0sQ0FBQyxPQUFPO1FBQ2IsT0FBTztZQUNOLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLFlBQVksQ0FBQztTQUMzQyxDQUFDO0tBQ0Y7OztZQWJELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO2dCQUNyQyxZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDbEMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQzdCLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENwbHhBbGVydENvbXBvbmVudCB9IGZyb20gJy4vY3BseC1hbGVydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3BseEFsZXJ0U2VydmljZSB9IGZyb20gJy4vY3BseC1hbGVydC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXIvc3JjL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlXSxcblx0ZGVjbGFyYXRpb25zOiBbQ3BseEFsZXJ0Q29tcG9uZW50XSxcblx0ZXhwb3J0czogW0NwbHhBbGVydENvbXBvbmVudF0sXG5cdHByb3ZpZGVyczogW0NwbHhBbGVydFNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgQ3BseEFsZXJ0TW9kdWxlIHtcblx0c3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBDcGx4QWxlcnRNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtDcGx4QWxlcnRTZXJ2aWNlLCBSb3V0ZXJNb2R1bGVdXG5cdFx0fTtcblx0fVxufVxuIl19