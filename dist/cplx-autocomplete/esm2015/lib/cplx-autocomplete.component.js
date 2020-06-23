var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostListener, Pipe, Output, EventEmitter, ElementRef, ViewChild, forwardRef } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, filter } from "rxjs/operators";
import { NG_VALUE_ACCESSOR, FormGroup, FormControl, Validators } from '@angular/forms';
let FilterPipe = class FilterPipe {
    transform(items, searchText, visible, params) {
        if (!items)
            return [];
        if (!searchText || !visible)
            return items;
        if (!isNullOrUndefined(params) && params.length > 0)
            return items.filter((data) => new RegExp(searchText, 'gi').test(data["search"]));
    }
    matchValue(data, value) {
        return Object.keys(data).map((key) => {
            return new RegExp(value, 'gi').test(data[key]);
        }).some(result => result);
    }
    matchValueParams(data, value, params) {
        return params.map((key) => {
            return new RegExp(value, 'gi').test(data[key]);
        }).some(result => result);
    }
};
FilterPipe = __decorate([
    Pipe({ name: 'filter' })
], FilterPipe);
export { FilterPipe };
const noop = () => {
};
const ɵ0 = noop;
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CplxAutocompleteComponent),
    multi: true
};
let CplxAutocompleteComponent = class CplxAutocompleteComponent {
    constructor() {
        this.visible = false;
        this.filter = false;
        this.selectedObject = new EventEmitter(true);
        this.textChange = new EventEmitter(true);
        this.timeout = 500;
        this.minlength = 2;
        this.loading = false;
        this.disabled = false;
        this.required = false;
        this.formulario = new FormGroup({
            value: new FormControl(null)
        });
        this.search = "search";
        this._value = '';
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    ngOnInit() {
        this.idcontainer = Math.random().toString().split(".")[1];
        if (!this.filter) {
            fromEvent(this.inputSearch.nativeElement, 'keyup').pipe(map((event) => {
                return event.target.value;
            }), filter(res => res.length >= this.minlength), debounceTime(this.timeout), distinctUntilChanged()).subscribe((text) => {
                this.value = text;
                this.visible = true;
                this.textChange.emit(text);
                //this.loading = true;
            });
        }
        if (this.required) {
            this.set_validator(this.formulario, "value", this.required);
        }
        this.formulario.controls.value.updateValueAndValidity();
    }
    set_validator(formgroup, control, required) {
        if (required)
            formgroup.controls[control].setValidators([Validators.required]);
        else
            formgroup.controls[control].clearValidators();
        formgroup.controls[control].updateValueAndValidity();
    }
    select(object) {
        this.selectedObject.emit(object);
        this.writeValue(object[this.search]);
        this.visible = false;
    }
    ngOnChanges(changes) {
        this.completar();
    }
    completar() {
        if (this.data) {
            this.data.forEach((d) => {
                let items = [];
                this.params.map((key) => {
                    items.push(d[key]);
                });
                d[this.search] = items.join(" - ");
            });
            setTimeout(() => {
                if (this.data && this.reflectparam && this.reflectvalue && this.filter) {
                    let object = this.data.filter(d => d[this.reflectparam] == this.reflectvalue)[0];
                    if (!isNullOrUndefined(object)) {
                        this.value = object[this.search];
                        this.selectedObject.emit(object);
                        this.textChange.emit(object[this.reflectparam]);
                    }
                }
            }, 200);
        }
        this.formulario.controls.value.updateValueAndValidity();
    }
    onClick(targetElement) {
        let clases = targetElement.className.split(" ");
        let clasecontrol = clases.filter(clase => clase == 'form-control-search');
        let clasecontainer = clases.filter(clase => clase == this.idcontainer);
        this.visible = (clasecontrol.length == 0 || clasecontainer.length == 0) ? false : true;
        this.formulario.controls.value.updateValueAndValidity();
    }
    get value() { return this._value; }
    ;
    set value(v) {
        if (v !== this._value) {
            this._value = v;
            this.formulario.controls.value.setValue(v);
            this.formulario.controls.value.updateValueAndValidity();
            this.onChange(v);
        }
    }
    writeValue(value) {
        this._value = value;
        this.formulario.controls.value.setValue(value);
        this.formulario.controls.value.updateValueAndValidity();
        this.onChange(value);
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], CplxAutocompleteComponent.prototype, "params", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], CplxAutocompleteComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CplxAutocompleteComponent.prototype, "placeholder", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CplxAutocompleteComponent.prototype, "filter", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CplxAutocompleteComponent.prototype, "selectedObject", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CplxAutocompleteComponent.prototype, "textChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CplxAutocompleteComponent.prototype, "timeout", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CplxAutocompleteComponent.prototype, "minlength", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CplxAutocompleteComponent.prototype, "loading", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CplxAutocompleteComponent.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CplxAutocompleteComponent.prototype, "reflectparam", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CplxAutocompleteComponent.prototype, "reflectvalue", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CplxAutocompleteComponent.prototype, "required", void 0);
__decorate([
    ViewChild('inputSearch', { static: true }),
    __metadata("design:type", ElementRef)
], CplxAutocompleteComponent.prototype, "inputSearch", void 0);
__decorate([
    HostListener('window:click', ['$event.target']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CplxAutocompleteComponent.prototype, "onClick", null);
CplxAutocompleteComponent = __decorate([
    Component({
        selector: 'cplx-autocomplete',
        template: "<div [formGroup]=\"formulario\" class=\"search selection dropdown {{visible ? 'active': ''}} box-search\"\r\n\t[style.cursor]=\"disabled ? 'not-allowed' : 'default'\">\r\n\t<input #inputSearch class=\"form-control form-control-sm form-control-search search {{idcontainer}}\"\r\n\t\t(change)=\"selectedObject.emit(null)\" autocomplete=\"off\" formControlName=\"value\" [placeholder]=\"placeholder\"\r\n\t\t[ngClass]=\"{'disabled': disabled}\">\r\n\t<div class=\"menu transition {{visible ? 'visible': 'hidden'}}\" *ngIf=\"!disabled\">\r\n\t\t<ng-container *ngIf=\"loading && !filter; else templateName\">\r\n\t\t\t<div class=\"item\">Buscando ...</div>\r\n\t\t</ng-container>\r\n\t\t<ng-template #templateName>\r\n\t\t\t<div *ngFor=\"let li of filter ? (data | filter : inputSearch.value : visible : params) : data\" class=\"item\"\r\n\t\t\t\t(click)=\"select(li)\"> {{li[search]}}\r\n\t\t\t</div>\r\n\t\t</ng-template>\r\n\t</div>\r\n</div>\r\n<!--input #inputSearch class=\"form-control form-control-sm\" [(ngModel)]=\"value\" [placeholder]=\"placeholder\"\r\n\t(change)=\"selectedObject.emit(null)\" [ngClass]=\"{'disabled': disabled}\" list=\"browsers\" autocomplete=\"off\">\r\n<ng-container *ngIf=\"loading && !filter; else templateName\">\r\n\t<datalist id=\"browsers\">\r\n\t\t<option> Cargando ...</option>\r\n\t</datalist>\r\n</ng-container>\r\n<ng-template #templateName>\r\n\t<datalist id=\"browsers\">\r\n\t\t<option *ngFor=\"let li of filter ? (data | filter : value : visible : params) : data\"\r\n\t\t\t(click)=\"selectedObject.emit(li)\" [value]=\"li[search]\"> {{li[search]}}</option>\r\n\t</datalist>\r\n</ng-template-->\r\n",
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
        styles: [".disabled{pointer-events:none!important;cursor:not-allowed!important;background-color:#e9ecef!important;opacity:1!important}.search.dropdown .menu{overflow-x:hidden;overflow-y:auto;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-overflow-scrolling:touch;max-height:14rem}.selection.dropdown .menu{overflow-x:hidden;overflow-y:auto;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-overflow-scrolling:touch;border-top-width:0!important;width:auto;outline:0;margin:0 -1px;min-width:calc(100% + 2px);width:calc(100% + 2px);border-radius:0 0 .28571429rem .28571429rem;box-shadow:0 2px 3px 0 rgba(34,36,38,.15);transition:opacity .1s}.dropdown .menu>.item:hover{background:rgba(0,0,0,.05);color:rgba(0,0,0,.95);z-index:13}.selection.dropdown .menu>.item{border-top:1px solid #fafafa;padding:.58571429rem 1.14285714rem!important;white-space:normal;word-wrap:normal}.dropdown .menu>.item{position:relative;cursor:pointer;display:block;border:none;height:auto;text-align:left;border-top:none;line-height:1em;color:rgba(0,0,0,.87);padding:.78571429rem 1.14285714rem!important;font-size:1rem;text-transform:none;font-weight:400;box-shadow:none;-webkit-touch-callout:none}.active.selection.dropdown{border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}.selection.active.dropdown{border-color:#96c8da;box-shadow:0 2px 3px 0 rgba(34,36,38,.15)}.search.dropdown>input.search{border:none!important;box-shadow:none!important;cursor:text;top:0;left:1px;width:100%;outline:0;-webkit-tap-highlight-color:rgba(255,255,255,0)}.menu{border-color:#96c8da;box-shadow:0 2px 3px 0 rgba(34,36,38,.15)}.dropdown .menu{left:0;cursor:auto;position:absolute;display:none;outline:0;top:100%;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;margin:0;padding:0;background:#fff;font-size:1em;text-shadow:none;text-align:left;box-shadow:0 2px 3px 0 rgba(34,36,38,.15);border:1px solid rgba(34,36,38,.15);border-radius:.28571429rem;transition:opacity .1s;z-index:11;will-change:transform,opacity}.visible.transition{display:block!important;visibility:visible!important;transition:.7s}.transition{-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-fill-mode:both;animation-fill-mode:both;transition:.7s}.form-control-search{height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem;border-bottom:0!important}.menu::-webkit-scrollbar{-webkit-appearance:none;width:10px;height:10px}.menu::-webkit-scrollbar-thumb{cursor:pointer;border-radius:5px;background:rgba(0,0,0,.25);-webkit-transition:color .2s;transition:color .2s}.menu::-webkit-scrollbar-track{background:rgba(0,0,0,.1);border-radius:0}::-moz-selection{background-color:#cce2ff;color:rgba(0,0,0,.87)}::selection{background-color:#cce2ff;color:rgba(0,0,0,.87)}.box-search{border-radius:.28571429rem!important;border:1px solid rgba(34,36,38,.15)!important}.box-search.ng-invalid.ng-touched{border-color:#dc3545!important}.box-search.ng-invalid.ng-touched:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}"]
    }),
    __metadata("design:paramtypes", [])
], CplxAutocompleteComponent);
export { CplxAutocompleteComponent };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hdXRvY29tcGxldGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY3BseC1hdXRvY29tcGxldGUvIiwic291cmNlcyI6WyJsaWIvY3BseC1hdXRvY29tcGxldGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBaUIsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBNEIsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9LLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWpDLE9BQU8sRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pGLE9BQU8sRUFBVyxpQkFBaUIsRUFBd0IsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd0SCxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFVO0lBQ3RCLFNBQVMsQ0FBQyxLQUFZLEVBQUUsVUFBa0IsRUFBRSxPQUFnQixFQUFFLE1BQWlCO1FBQzlFLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPLEtBQUssQ0FBQztRQUUxQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ2xELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFB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QUM7OEJBQWMsVUFBVTs4REFBQztBQXdFcEU7SUFEQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUM7Ozs7d0RBTy9DO0FBbEdXLHlCQUF5QjtJQU5yQyxTQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLHNuREFBdUM7UUFFdkMsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7O0tBQ2hELENBQUM7O0dBQ1cseUJBQXlCLENBMkhyQztTQTNIWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgUGlwZVRyYW5zZm9ybSwgUGlwZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc051bGxPclVuZGVmaW5lZCB9IGZyb20gJ3V0aWwnO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIG1hcCwgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgTmdNb2RlbCwgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AUGlwZSh7IG5hbWU6ICdmaWx0ZXInIH0pXG5leHBvcnQgY2xhc3MgRmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXHR0cmFuc2Zvcm0oaXRlbXM6IGFueVtdLCBzZWFyY2hUZXh0OiBzdHJpbmcsIHZpc2libGU6IGJvb2xlYW4sIHBhcmFtcz86IHN0cmluZ1tdKTogYW55IHtcblx0XHRpZiAoIWl0ZW1zKSByZXR1cm4gW107XG5cdFx0aWYgKCFzZWFyY2hUZXh0IHx8ICF2aXNpYmxlKSByZXR1cm4gaXRlbXM7XG5cblx0XHRpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKHBhcmFtcykgJiYgcGFyYW1zLmxlbmd0aCA+IDApXG5cdFx0XHRyZXR1cm4gaXRlbXMuZmlsdGVyKChkYXRhKSA9PiBuZXcgUmVnRXhwKHNlYXJjaFRleHQsICdnaScpLnRlc3QoZGF0YVtcInNlYXJjaFwiXSkpO1xuXHR9XG5cblx0bWF0Y2hWYWx1ZShkYXRhOiBhbnlbXSwgdmFsdWU6IHN0cmluZykge1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5tYXAoKGtleSkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBSZWdFeHAodmFsdWUsICdnaScpLnRlc3QoZGF0YVtrZXldKTtcblx0XHR9KS5zb21lKHJlc3VsdCA9PiByZXN1bHQpO1xuXHR9XG5cblx0bWF0Y2hWYWx1ZVBhcmFtcyhkYXRhOiBhbnlbXSwgdmFsdWU6IHN0cmluZywgcGFyYW1zOiBzdHJpbmdbXSkge1xuXHRcdHJldHVybiBwYXJhbXMubWFwKChrZXkpID0+IHtcblx0XHRcdHJldHVybiBuZXcgUmVnRXhwKHZhbHVlLCAnZ2knKS50ZXN0KGRhdGFba2V5XSk7XG5cdFx0fSkuc29tZShyZXN1bHQgPT4gcmVzdWx0KTtcblx0fVxufVxuXG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7XG59O1xuXG5leHBvcnQgY29uc3QgQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcblx0cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG5cdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENwbHhBdXRvY29tcGxldGVDb21wb25lbnQpLFxuXHRtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY3BseC1hdXRvY29tcGxldGUnLFxuXHR0ZW1wbGF0ZVVybDogJy4vY3BseC1hdXRvY29tcGxldGUuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2NwbHgtYXV0b2NvbXBsZXRlLmNzcyddLFxuXHRwcm92aWRlcnM6IFtDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgQ3BseEF1dG9jb21wbGV0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cblx0dmlzaWJsZSA9IGZhbHNlO1xuXHRpZGNvbnRhaW5lcjogc3RyaW5nO1xuXG5cdEBJbnB1dCgpIHBhcmFtczogc3RyaW5nW107XG5cdEBJbnB1dCgpIGRhdGE6IGFueVtdO1xuXHRASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXHRASW5wdXQoKSBmaWx0ZXI6IGJvb2xlYW4gPSBmYWxzZTtcblx0QE91dHB1dCgpIHNlbGVjdGVkT2JqZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KHRydWUpO1xuXHRAT3V0cHV0KCkgdGV4dENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U3RyaW5nPih0cnVlKVxuXHRASW5wdXQoKSB0aW1lb3V0ID0gNTAwO1xuXHRASW5wdXQoKSBtaW5sZW5ndGggPSAyO1xuXHRASW5wdXQoKSBsb2FkaW5nID0gZmFsc2U7XG5cdEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cdEBJbnB1dCgpIHJlZmxlY3RwYXJhbTogYW55O1xuXHRASW5wdXQoKSByZWZsZWN0dmFsdWU6IGFueTtcblx0QElucHV0KCkgcmVxdWlyZWQgPSBmYWxzZTtcblxuXHRAVmlld0NoaWxkKCdpbnB1dFNlYXJjaCcsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0U2VhcmNoOiBFbGVtZW50UmVmO1xuXG5cdGZvcm11bGFyaW8gPSBuZXcgRm9ybUdyb3VwKHtcblx0XHR2YWx1ZTogbmV3IEZvcm1Db250cm9sKG51bGwpXG5cdH0pO1xuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuaWRjb250YWluZXIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdO1xuXHRcdGlmICghdGhpcy5maWx0ZXIpIHtcblx0XHRcdGZyb21FdmVudCh0aGlzLmlucHV0U2VhcmNoLm5hdGl2ZUVsZW1lbnQsICdrZXl1cCcpLnBpcGUoXG5cdFx0XHRcdG1hcCgoZXZlbnQ6IGFueSkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBldmVudC50YXJnZXQudmFsdWU7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRmaWx0ZXIocmVzID0+IHJlcy5sZW5ndGggPj0gdGhpcy5taW5sZW5ndGgpLFxuXHRcdFx0XHRkZWJvdW5jZVRpbWUodGhpcy50aW1lb3V0KSxcblx0XHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0KS5zdWJzY3JpYmUoKHRleHQ6IHN0cmluZykgPT4ge1xuXHRcdFx0XHR0aGlzLnZhbHVlID0gdGV4dDtcblx0XHRcdFx0dGhpcy52aXNpYmxlID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy50ZXh0Q2hhbmdlLmVtaXQodGV4dCk7XG5cdFx0XHRcdC8vdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnJlcXVpcmVkKSB7XG5cdFx0XHR0aGlzLnNldF92YWxpZGF0b3IodGhpcy5mb3JtdWxhcmlvLCBcInZhbHVlXCIsIHRoaXMucmVxdWlyZWQpO1xuXHRcdH1cblx0XHR0aGlzLmZvcm11bGFyaW8uY29udHJvbHMudmFsdWUudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuXHR9XG5cblx0c2V0X3ZhbGlkYXRvcihmb3JtZ3JvdXA6IEZvcm1Hcm91cCwgY29udHJvbDogc3RyaW5nLCByZXF1aXJlZD86IGJvb2xlYW4pIHtcblx0XHRpZiAocmVxdWlyZWQpIGZvcm1ncm91cC5jb250cm9sc1tjb250cm9sXS5zZXRWYWxpZGF0b3JzKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSk7XG5cdFx0ZWxzZSBmb3JtZ3JvdXAuY29udHJvbHNbY29udHJvbF0uY2xlYXJWYWxpZGF0b3JzKCk7XG5cdFx0Zm9ybWdyb3VwLmNvbnRyb2xzW2NvbnRyb2xdLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcblx0fVxuXG5cdHNlbGVjdChvYmplY3Q6IGFueSkge1xuXHRcdHRoaXMuc2VsZWN0ZWRPYmplY3QuZW1pdChvYmplY3QpO1xuXHRcdHRoaXMud3JpdGVWYWx1ZShvYmplY3RbdGhpcy5zZWFyY2hdKTtcblx0XHR0aGlzLnZpc2libGUgPSBmYWxzZTtcblx0fVxuXG5cdHB1YmxpYyBzZWFyY2ggPSBcInNlYXJjaFwiO1xuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBsZXRhcigpO1xuXHR9XG5cblx0Y29tcGxldGFyKCkge1xuXHRcdGlmICh0aGlzLmRhdGEpIHtcblx0XHRcdHRoaXMuZGF0YS5mb3JFYWNoKChkKSA9PiB7XG5cdFx0XHRcdGxldCBpdGVtcyA9IFtdO1xuXHRcdFx0XHR0aGlzLnBhcmFtcy5tYXAoKGtleSkgPT4ge1xuXHRcdFx0XHRcdGl0ZW1zLnB1c2goZFtrZXldKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0ZFt0aGlzLnNlYXJjaF0gPSBpdGVtcy5qb2luKFwiIC0gXCIpO1xuXHRcdFx0fSk7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0aWYgKHRoaXMuZGF0YSAmJiB0aGlzLnJlZmxlY3RwYXJhbSAmJiB0aGlzLnJlZmxlY3R2YWx1ZSAmJiB0aGlzLmZpbHRlcikge1xuXHRcdFx0XHRcdGxldCBvYmplY3QgPSB0aGlzLmRhdGEuZmlsdGVyKGQgPT4gZFt0aGlzLnJlZmxlY3RwYXJhbV0gPT0gdGhpcy5yZWZsZWN0dmFsdWUpWzBdO1xuXHRcdFx0XHRcdGlmICghaXNOdWxsT3JVbmRlZmluZWQob2JqZWN0KSkge1xuXHRcdFx0XHRcdFx0dGhpcy52YWx1ZSA9IG9iamVjdFt0aGlzLnNlYXJjaF07XG5cdFx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkT2JqZWN0LmVtaXQob2JqZWN0KTtcblx0XHRcdFx0XHRcdHRoaXMudGV4dENoYW5nZS5lbWl0KG9iamVjdFt0aGlzLnJlZmxlY3RwYXJhbV0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSwgMjAwKTtcblx0XHR9XG5cdFx0dGhpcy5mb3JtdWxhcmlvLmNvbnRyb2xzLnZhbHVlLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcblx0fVxuXG5cdEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpjbGljaycsIFsnJGV2ZW50LnRhcmdldCddKVxuXHRvbkNsaWNrKHRhcmdldEVsZW1lbnQ6IGFueSkge1xuXHRcdGxldCBjbGFzZXM6IHN0cmluZ1tdID0gdGFyZ2V0RWxlbWVudC5jbGFzc05hbWUuc3BsaXQoXCIgXCIpO1xuXHRcdGxldCBjbGFzZWNvbnRyb2w6IGFueVtdID0gY2xhc2VzLmZpbHRlcihjbGFzZSA9PiBjbGFzZSA9PSAnZm9ybS1jb250cm9sLXNlYXJjaCcpO1xuXHRcdGxldCBjbGFzZWNvbnRhaW5lcjogYW55W10gPSBjbGFzZXMuZmlsdGVyKGNsYXNlID0+IGNsYXNlID09IHRoaXMuaWRjb250YWluZXIpO1xuXHRcdHRoaXMudmlzaWJsZSA9IChjbGFzZWNvbnRyb2wubGVuZ3RoID09IDAgfHwgY2xhc2Vjb250YWluZXIubGVuZ3RoID09IDApID8gZmFsc2UgOiB0cnVlO1xuXHRcdHRoaXMuZm9ybXVsYXJpby5jb250cm9scy52YWx1ZS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KClcblx0fVxuXG5cdHByaXZhdGUgX3ZhbHVlOiBhbnkgPSAnJztcblx0Z2V0IHZhbHVlKCk6IGFueSB7IHJldHVybiB0aGlzLl92YWx1ZTsgfTtcblxuXHRzZXQgdmFsdWUodjogYW55KSB7XG5cdFx0aWYgKHYgIT09IHRoaXMuX3ZhbHVlKSB7XG5cdFx0XHR0aGlzLl92YWx1ZSA9IHY7XG5cdFx0XHR0aGlzLmZvcm11bGFyaW8uY29udHJvbHMudmFsdWUuc2V0VmFsdWUodik7XG5cdFx0XHR0aGlzLmZvcm11bGFyaW8uY29udHJvbHMudmFsdWUudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuXHRcdFx0dGhpcy5vbkNoYW5nZSh2KTtcblx0XHR9XG5cdH1cblxuXHR3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLl92YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMuZm9ybXVsYXJpby5jb250cm9scy52YWx1ZS5zZXRWYWx1ZSh2YWx1ZSk7XG5cdFx0dGhpcy5mb3JtdWxhcmlvLmNvbnRyb2xzLnZhbHVlLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcblx0XHR0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcblx0fVxuXG5cdG9uQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xuXHRvblRvdWNoZWQgPSAoKSA9PiB7IH07XG5cdHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5vbkNoYW5nZSA9IGZuOyB9XG5cdHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMub25Ub3VjaGVkID0gZm47IH1cbn1cbiJdfQ==