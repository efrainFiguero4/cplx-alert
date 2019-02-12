/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hbGVydC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jcGx4LWFsZXJ0LyIsInNvdXJjZXMiOlsibGliL2NwbHgtYWxlcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0M7SUFBQTtJQWNBLENBQUM7Ozs7SUFOTyx1QkFBTzs7O0lBQWQ7UUFDQyxPQUFPO1lBQ04sUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDO1NBQzNDLENBQUM7SUFDSCxDQUFDOztnQkFiRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQztvQkFDckMsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBQ2xDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO29CQUM3QixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDN0I7O0lBU0Qsc0JBQUM7Q0FBQSxBQWRELElBY0M7U0FQWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ3BseEFsZXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9jcGx4LWFsZXJ0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENwbHhBbGVydFNlcnZpY2UgfSBmcm9tICcuL2NwbHgtYWxlcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21waWxlci9zcmMvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZV0sXHJcblx0ZGVjbGFyYXRpb25zOiBbQ3BseEFsZXJ0Q29tcG9uZW50XSxcclxuXHRleHBvcnRzOiBbQ3BseEFsZXJ0Q29tcG9uZW50XSxcclxuXHRwcm92aWRlcnM6IFtDcGx4QWxlcnRTZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENwbHhBbGVydE1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogQ3BseEFsZXJ0TW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFtDcGx4QWxlcnRTZXJ2aWNlLCBSb3V0ZXJNb2R1bGVdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG4iXX0=