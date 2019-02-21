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
export class SearchPipe {
    /**
     * @param {?} items
     * @param {?} filter
     * @return {?}
     */
    transform(items, filter) {
        if (!filter)
            return items;
        if (isNullOrUndefined(filter) || filter == "")
            return items;
        if (!Array.isArray(items))
            return items;
        if (filter && Array.isArray(items)) {
            /** @type {?} */
            let filterKeys = Object.keys(filter);
            return items.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                return filterKeys.some((/**
                 * @param {?} keyName
                 * @return {?}
                 */
                (keyName) => {
                    return new RegExp(String(filter[keyName]).trim(), 'gi').test(item[keyName]) || filter[keyName] == "";
                }));
            }));
        }
    }
}
SearchPipe.decorators = [
    { type: Pipe, args: [{
                name: 'datatablepipe'
            },] }
];
export class CplxDatatableModule {
}
CplxDatatableModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CplxDatatableComponent, SearchPipe],
                imports: [CommonModule, FormsModule, ReactiveFormsModule],
                exports: [CplxDatatableComponent],
                providers: [CplxDatatableService]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1kYXRhdGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY3BseC1kYXRhdGFibGUvIiwic291cmNlcyI6WyJsaWIvY3BseC1kYXRhdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sTUFBTSxDQUFDO0FBS3pDLE1BQU0sT0FBTyxVQUFVOzs7Ozs7SUFDdEIsU0FBUyxDQUFDLEtBQVUsRUFBRSxNQUFXO1FBQ2hDLElBQUksQ0FBQyxNQUFNO1lBQ1YsT0FBTyxLQUFLLENBQUM7UUFDZCxJQUFJLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sSUFBSSxFQUFFO1lBQzVDLE9BQU8sS0FBSyxDQUFDO1FBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3hCLE9BQU8sS0FBSyxDQUFDO1FBRWQsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTs7Z0JBQy9CLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNwQyxPQUFPLEtBQUssQ0FBQyxNQUFNOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzFCLE9BQU8sVUFBVSxDQUFDLElBQUk7Ozs7Z0JBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtvQkFDbEMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3RHLENBQUMsRUFBQyxDQUFDO1lBQ0osQ0FBQyxFQUFDLENBQUM7U0FDSDtJQUNGLENBQUM7OztZQXBCRCxJQUFJLFNBQUM7Z0JBQ0wsSUFBSSxFQUFFLGVBQWU7YUFDckI7O0FBNkJELE1BQU0sT0FBTyxtQkFBbUI7OztZQVAvQixRQUFRLFNBQUM7Z0JBQ1QsWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsVUFBVSxDQUFDO2dCQUNsRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixDQUFDO2dCQUN6RCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDakMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7YUFDakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3BseERhdGF0YWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY3BseC1kYXRhdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuaW1wb3J0IHsgQ3BseERhdGF0YWJsZVNlcnZpY2UgfSBmcm9tICcuL2NwbHgtZGF0YXRhYmxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgaXNOdWxsT3JVbmRlZmluZWQgfSBmcm9tICd1dGlsJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnZGF0YXRhYmxlcGlwZSdcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXHR0cmFuc2Zvcm0oaXRlbXM6IGFueSwgZmlsdGVyOiBhbnkpOiBhbnkge1xuXHRcdGlmICghZmlsdGVyKVxuXHRcdFx0cmV0dXJuIGl0ZW1zO1xuXHRcdGlmIChpc051bGxPclVuZGVmaW5lZChmaWx0ZXIpIHx8IGZpbHRlciA9PSBcIlwiKVxuXHRcdFx0cmV0dXJuIGl0ZW1zO1xuXHRcdGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpXG5cdFx0XHRyZXR1cm4gaXRlbXM7XG5cblx0XHRpZiAoZmlsdGVyICYmIEFycmF5LmlzQXJyYXkoaXRlbXMpKSB7XG5cdFx0XHRsZXQgZmlsdGVyS2V5cyA9IE9iamVjdC5rZXlzKGZpbHRlcik7XG5cdFx0XHRyZXR1cm4gaXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xuXHRcdFx0XHRyZXR1cm4gZmlsdGVyS2V5cy5zb21lKChrZXlOYW1lKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBSZWdFeHAoU3RyaW5nKGZpbHRlcltrZXlOYW1lXSkudHJpbSgpLCAnZ2knKS50ZXN0KGl0ZW1ba2V5TmFtZV0pIHx8IGZpbHRlcltrZXlOYW1lXSA9PSBcIlwiO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufVxuXG5cbkBOZ01vZHVsZSh7XG5cdGRlY2xhcmF0aW9uczogW0NwbHhEYXRhdGFibGVDb21wb25lbnQsIFNlYXJjaFBpcGVdLFxuXHRpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZV0sXG5cdGV4cG9ydHM6IFtDcGx4RGF0YXRhYmxlQ29tcG9uZW50XSxcblx0cHJvdmlkZXJzOiBbQ3BseERhdGF0YWJsZVNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgQ3BseERhdGF0YWJsZU1vZHVsZSB7IH1cbiJdfQ==