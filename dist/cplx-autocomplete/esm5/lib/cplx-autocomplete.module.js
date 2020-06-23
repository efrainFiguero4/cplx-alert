var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CplxAutocompleteComponent, FilterPipe } from './cplx-autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
var CplxAutocompleteModule = /** @class */ (function () {
    function CplxAutocompleteModule() {
    }
    CplxAutocompleteModule = __decorate([
        NgModule({
            declarations: [CplxAutocompleteComponent, FilterPipe],
            imports: [CommonModule, FormsModule, ReactiveFormsModule],
            exports: [CplxAutocompleteComponent, FilterPipe]
        })
    ], CplxAutocompleteModule);
    return CplxAutocompleteModule;
}());
export { CplxAutocompleteModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hdXRvY29tcGxldGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY3BseC1hdXRvY29tcGxldGUvIiwic291cmNlcyI6WyJsaWIvY3BseC1hdXRvY29tcGxldGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RGLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFPL0M7SUFBQTtJQUFzQyxDQUFDO0lBQTFCLHNCQUFzQjtRQUxsQyxRQUFRLENBQUM7WUFDVCxZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxVQUFVLENBQUM7WUFDckQsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQztZQUN6RCxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxVQUFVLENBQUM7U0FDaEQsQ0FBQztPQUNXLHNCQUFzQixDQUFJO0lBQUQsNkJBQUM7Q0FBQSxBQUF2QyxJQUF1QztTQUExQixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3BseEF1dG9jb21wbGV0ZUNvbXBvbmVudCwgRmlsdGVyUGlwZSB9IGZyb20gJy4vY3BseC1hdXRvY29tcGxldGUuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQE5nTW9kdWxlKHtcblx0ZGVjbGFyYXRpb25zOiBbQ3BseEF1dG9jb21wbGV0ZUNvbXBvbmVudCwgRmlsdGVyUGlwZV0sXG5cdGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcblx0ZXhwb3J0czogW0NwbHhBdXRvY29tcGxldGVDb21wb25lbnQsIEZpbHRlclBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIENwbHhBdXRvY29tcGxldGVNb2R1bGUgeyB9XG4iXX0=