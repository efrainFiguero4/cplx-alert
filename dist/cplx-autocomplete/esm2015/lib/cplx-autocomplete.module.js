var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CplxAutocompleteComponent, FilterPipe, RequiredDirective } from './cplx-autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
let CplxAutocompleteModule = class CplxAutocompleteModule {
};
CplxAutocompleteModule = __decorate([
    NgModule({
        declarations: [CplxAutocompleteComponent, FilterPipe, RequiredDirective],
        imports: [CommonModule, FormsModule, ReactiveFormsModule],
        exports: [CplxAutocompleteComponent, FilterPipe, RequiredDirective]
    })
], CplxAutocompleteModule);
export { CplxAutocompleteModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hdXRvY29tcGxldGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY3BseC1hdXRvY29tcGxldGUvIiwic291cmNlcyI6WyJsaWIvY3BseC1hdXRvY29tcGxldGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pHLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFPL0MsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7Q0FBSSxDQUFBO0FBQTFCLHNCQUFzQjtJQUxsQyxRQUFRLENBQUM7UUFDVCxZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLENBQUM7UUFDeEUsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQztRQUN6RCxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLENBQUM7S0FDbkUsQ0FBQztHQUNXLHNCQUFzQixDQUFJO1NBQTFCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDcGx4QXV0b2NvbXBsZXRlQ29tcG9uZW50LCBGaWx0ZXJQaXBlLCBSZXF1aXJlZERpcmVjdGl2ZSB9IGZyb20gJy4vY3BseC1hdXRvY29tcGxldGUuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQE5nTW9kdWxlKHtcblx0ZGVjbGFyYXRpb25zOiBbQ3BseEF1dG9jb21wbGV0ZUNvbXBvbmVudCwgRmlsdGVyUGlwZSwgUmVxdWlyZWREaXJlY3RpdmVdLFxuXHRpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZV0sXG5cdGV4cG9ydHM6IFtDcGx4QXV0b2NvbXBsZXRlQ29tcG9uZW50LCBGaWx0ZXJQaXBlLCBSZXF1aXJlZERpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgQ3BseEF1dG9jb21wbGV0ZU1vZHVsZSB7IH1cbiJdfQ==