/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CplxDatatableComponent } from './cplx-datatable.component';
import { CommonModule } from '@angular/common';
import { Pipe } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CplxDatatableService } from './cplx-datatable.service';
import { isNullOrUndefined } from 'util';
var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    /**
     * @param {?} items
     * @param {?} filter
     * @return {?}
     */
    SearchPipe.prototype.transform = /**
     * @param {?} items
     * @param {?} filter
     * @return {?}
     */
    function (items, filter) {
        if (!filter)
            return items;
        if (isNullOrUndefined(filter) || filter == "")
            return items;
        if (!Array.isArray(items))
            return items;
        if (filter && Array.isArray(items)) {
            /** @type {?} */
            var filterKeys_1 = Object.keys(filter);
            return items.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return filterKeys_1.some((/**
                 * @param {?} keyName
                 * @return {?}
                 */
                function (keyName) {
                    return new RegExp(String(filter[keyName]).trim(), 'gi').test(item[keyName]) || filter[keyName] == "";
                }));
            }));
        }
    };
    SearchPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'datatablepipe'
                },] }
    ];
    return SearchPipe;
}());
export { SearchPipe };
var CplxDatatableModule = /** @class */ (function () {
    function CplxDatatableModule() {
    }
    CplxDatatableModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CplxDatatableComponent, SearchPipe],
                    imports: [CommonModule, FormsModule, ReactiveFormsModule],
                    exports: [CplxDatatableComponent],
                    providers: [CplxDatatableService]
                },] }
    ];
    return CplxDatatableModule;
}());
export { CplxDatatableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1kYXRhdGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY3BseC1kYXRhdGFibGUvIiwic291cmNlcyI6WyJsaWIvY3BseC1kYXRhdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXpDO0lBQUE7SUFxQkEsQ0FBQzs7Ozs7O0lBakJBLDhCQUFTOzs7OztJQUFULFVBQVUsS0FBVSxFQUFFLE1BQVc7UUFDaEMsSUFBSSxDQUFDLE1BQU07WUFDVixPQUFPLEtBQUssQ0FBQztRQUNkLElBQUksaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxJQUFJLEVBQUU7WUFDNUMsT0FBTyxLQUFLLENBQUM7UUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDeEIsT0FBTyxLQUFLLENBQUM7UUFFZCxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFOztnQkFDL0IsWUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3BDLE9BQU8sS0FBSyxDQUFDLE1BQU07Ozs7WUFBQyxVQUFBLElBQUk7Z0JBQ3ZCLE9BQU8sWUFBVSxDQUFDLElBQUk7Ozs7Z0JBQUMsVUFBQyxPQUFPO29CQUM5QixPQUFPLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdEcsQ0FBQyxFQUFDLENBQUM7WUFDSixDQUFDLEVBQUMsQ0FBQztTQUNIO0lBQ0YsQ0FBQzs7Z0JBcEJELElBQUksU0FBQztvQkFDTCxJQUFJLEVBQUUsZUFBZTtpQkFDckI7O0lBbUJELGlCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FsQlksVUFBVTtBQXFCdkI7SUFBQTtJQU9tQyxDQUFDOztnQkFQbkMsUUFBUSxTQUFDO29CQUNULFlBQVksRUFBRSxDQUFDLHNCQUFzQixFQUFFLFVBQVUsQ0FBQztvQkFDbEQsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQztvQkFDekQsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ2pDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO2lCQUNqQzs7SUFFa0MsMEJBQUM7Q0FBQSxBQVBwQyxJQU9vQztTQUF2QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3BseERhdGF0YWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY3BseC1kYXRhdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuaW1wb3J0IHsgQ3BseERhdGF0YWJsZVNlcnZpY2UgfSBmcm9tICcuL2NwbHgtZGF0YXRhYmxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgaXNOdWxsT3JVbmRlZmluZWQgfSBmcm9tICd1dGlsJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnZGF0YXRhYmxlcGlwZSdcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXHR0cmFuc2Zvcm0oaXRlbXM6IGFueSwgZmlsdGVyOiBhbnkpOiBhbnkge1xuXHRcdGlmICghZmlsdGVyKVxuXHRcdFx0cmV0dXJuIGl0ZW1zO1xuXHRcdGlmIChpc051bGxPclVuZGVmaW5lZChmaWx0ZXIpIHx8IGZpbHRlciA9PSBcIlwiKVxuXHRcdFx0cmV0dXJuIGl0ZW1zO1xuXHRcdGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpXG5cdFx0XHRyZXR1cm4gaXRlbXM7XG5cblx0XHRpZiAoZmlsdGVyICYmIEFycmF5LmlzQXJyYXkoaXRlbXMpKSB7XG5cdFx0XHRsZXQgZmlsdGVyS2V5cyA9IE9iamVjdC5rZXlzKGZpbHRlcik7XG5cdFx0XHRyZXR1cm4gaXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xuXHRcdFx0XHRyZXR1cm4gZmlsdGVyS2V5cy5zb21lKChrZXlOYW1lKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBSZWdFeHAoU3RyaW5nKGZpbHRlcltrZXlOYW1lXSkudHJpbSgpLCAnZ2knKS50ZXN0KGl0ZW1ba2V5TmFtZV0pIHx8IGZpbHRlcltrZXlOYW1lXSA9PSBcIlwiO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufVxuXG5cbkBOZ01vZHVsZSh7XG5cdGRlY2xhcmF0aW9uczogW0NwbHhEYXRhdGFibGVDb21wb25lbnQsIFNlYXJjaFBpcGVdLFxuXHRpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZV0sXG5cdGV4cG9ydHM6IFtDcGx4RGF0YXRhYmxlQ29tcG9uZW50XSxcblx0cHJvdmlkZXJzOiBbQ3BseERhdGF0YWJsZVNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgQ3BseERhdGF0YWJsZU1vZHVsZSB7IH1cbiJdfQ==