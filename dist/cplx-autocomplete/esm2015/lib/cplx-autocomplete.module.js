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
let CplxAutocompleteModule = class CplxAutocompleteModule {
};
CplxAutocompleteModule = __decorate([
    NgModule({
        declarations: [CplxAutocompleteComponent, FilterPipe],
        imports: [CommonModule, FormsModule, ReactiveFormsModule],
        exports: [CplxAutocompleteComponent, FilterPipe]
    })
], CplxAutocompleteModule);
export { CplxAutocompleteModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hdXRvY29tcGxldGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY3BseC1hdXRvY29tcGxldGUvIiwic291cmNlcyI6WyJsaWIvY3BseC1hdXRvY29tcGxldGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RGLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFPL0MsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7Q0FBSSxDQUFBO0FBQTFCLHNCQUFzQjtJQUxsQyxRQUFRLENBQUM7UUFDVCxZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxVQUFVLENBQUM7UUFDckQsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQztRQUN6RCxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxVQUFVLENBQUM7S0FDaEQsQ0FBQztHQUNXLHNCQUFzQixDQUFJO1NBQTFCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDcGx4QXV0b2NvbXBsZXRlQ29tcG9uZW50LCBGaWx0ZXJQaXBlIH0gZnJvbSAnLi9jcGx4LWF1dG9jb21wbGV0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ATmdNb2R1bGUoe1xuXHRkZWNsYXJhdGlvbnM6IFtDcGx4QXV0b2NvbXBsZXRlQ29tcG9uZW50LCBGaWx0ZXJQaXBlXSxcblx0aW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGVdLFxuXHRleHBvcnRzOiBbQ3BseEF1dG9jb21wbGV0ZUNvbXBvbmVudCwgRmlsdGVyUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgQ3BseEF1dG9jb21wbGV0ZU1vZHVsZSB7IH1cbiJdfQ==