var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, OnInit, Input, HostListener, PipeTransform, Pipe, Output, EventEmitter, ElementRef, ViewChild, OnChanges, SimpleChanges, forwardRef, Renderer2, Directive } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, filter } from "rxjs/operators";
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormGroup, FormControl, Validators, AbstractControl, NgControl } from '@angular/forms';
let RequiredDirective = class RequiredDirective {
    constructor(ngControl, renderer, elementRef) {
        this.ngControl = ngControl;
        this.renderer = renderer;
        this.elementRef = elementRef;
    }
    hasRequiredField(abstractControl) {
        if (abstractControl.validator) {
            const validator = abstractControl.validator({});
            if (validator && validator.required) {
                return true;
            }
        }
        return false;
    }
    ngOnInit() {
        const required = this.hasRequiredField(this.ngControl.control);
        if (required) {
            this.renderer.setAttribute(this.elementRef.nativeElement, 'required', '');
        }
    }
};
RequiredDirective.ctorParameters = () => [
    { type: NgControl },
    { type: Renderer2 },
    { type: ElementRef }
];
RequiredDirective = __decorate([
    Directive({
        selector: '[fieldrequired]'
    }),
    __metadata("design:paramtypes", [NgControl, Renderer2, ElementRef])
], RequiredDirective);
export { RequiredDirective };
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
    }
    onClick(targetElement) {
        let clases = targetElement.className.split(" ");
        let clasecontrol = clases.filter(clase => clase == 'form-control-search');
        let clasecontainer = clases.filter(clase => clase == this.idcontainer);
        this.visible = (clasecontrol.length == 0 || clasecontainer.length == 0) ? false : true;
    }
    get value() { return this._value; }
    ;
    set value(v) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
        }
    }
    writeValue(value) {
        this._value = value;
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
        template: "<div class=\"search selection dropdown {{visible ? 'active': ''}} box-search\"\r\n\t[style.cursor]=\"disabled ? 'not-allowed' : 'default'\">\r\n\t<input #inputSearch class=\"form-control form-control-sm form-control-search search {{idcontainer}}\"\r\n\t\t(change)=\"selectedObject.emit(null)\" autocomplete=\"off\" [(ngModel)]=\"value\" [placeholder]=\"placeholder\"\r\n\t\t[ngClass]=\"{'disabled': disabled}\" [required]=\"required\"\r\n\t\t[ngClass]=\"!required ? ( value == '' ? 'novalido': 'valido'): ''\">\r\n\t<div class=\"menu transition {{visible ? 'visible': 'hidden'}}\" *ngIf=\"!disabled\">\r\n\t\t<ng-container *ngIf=\"loading && !filter; else templateName\">\r\n\t\t\t<div class=\"item\">Buscando ...</div>\r\n\t\t</ng-container>\r\n\t\t<ng-template #templateName>\r\n\t\t\t<div *ngFor=\"let li of filter ? (data | filter : inputSearch.value : visible : params) : data\" class=\"item\"\r\n\t\t\t\t(click)=\"select(li)\"> {{li[search]}}\r\n\t\t\t</div>\r\n\t\t</ng-template>\r\n\t</div>\r\n</div>\r\n",
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
        styles: [".disabled{pointer-events:none!important;cursor:not-allowed!important;background-color:#e9ecef!important;opacity:1!important}.search.dropdown .menu{overflow-x:hidden;overflow-y:auto;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-overflow-scrolling:touch;max-height:14rem}.selection.dropdown .menu{overflow-x:hidden;overflow-y:auto;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-overflow-scrolling:touch;border-top-width:0!important;width:auto;outline:0;margin:0 -1px;min-width:calc(100% + 2px);width:calc(100% + 2px);border-radius:0 0 .28571429rem .28571429rem;box-shadow:0 2px 3px 0 rgba(34,36,38,.15);transition:opacity .1s}.dropdown .menu>.item:hover{background:rgba(0,0,0,.05);color:rgba(0,0,0,.95);z-index:13}.selection.dropdown .menu>.item{border-top:1px solid #fafafa;padding:.58571429rem 1.14285714rem!important;white-space:normal;word-wrap:normal}.dropdown .menu>.item{position:relative;cursor:pointer;display:block;border:none;height:auto;text-align:left;border-top:none;line-height:1em;color:rgba(0,0,0,.87);padding:.78571429rem 1.14285714rem!important;font-size:1rem;text-transform:none;font-weight:400;box-shadow:none;-webkit-touch-callout:none}.active.selection.dropdown{border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}.selection.active.dropdown{border-color:#96c8da;box-shadow:0 2px 3px 0 rgba(34,36,38,.15)}.search.dropdown>input.search{box-shadow:none;cursor:text;top:0;left:1px;width:100%;outline:0;-webkit-tap-highlight-color:rgba(255,255,255,0)}.menu{border-color:#96c8da;box-shadow:0 2px 3px 0 rgba(34,36,38,.15)}.dropdown .menu{left:0;cursor:auto;position:absolute;display:none;outline:0;top:100%;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;margin:0;padding:0;background:#fff;font-size:1em;text-shadow:none;text-align:left;box-shadow:0 2px 3px 0 rgba(34,36,38,.15);border:1px solid rgba(34,36,38,.15);border-radius:.28571429rem;transition:opacity .1s;z-index:11;will-change:transform,opacity}.visible.transition{display:block!important;visibility:visible!important;transition:.7s}.transition{-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-fill-mode:both;animation-fill-mode:both;transition:.7s}.form-control-search{height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.menu::-webkit-scrollbar{-webkit-appearance:none;width:10px;height:10px}.menu::-webkit-scrollbar-thumb{cursor:pointer;border-radius:5px;background:rgba(0,0,0,.25);-webkit-transition:color .2s;transition:color .2s}.menu::-webkit-scrollbar-track{background:rgba(0,0,0,.1);border-radius:0}::-moz-selection{background-color:#cce2ff;color:rgba(0,0,0,.87)}::selection{background-color:#cce2ff;color:rgba(0,0,0,.87)}.box-search{border-radius:.28571429rem}.form-control.ng-invalid.ng-touched:required{border-color:#dc3545}.form-control.ng-invalid.ng-touched:required:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-control.ng-valid,.form-control:valid{border-color:#28a745;padding-right:0;background-image:none!important;background-repeat:no-repeat;background-position:0;background-size:0}.form-control.valido{border-color:#28a745!important;padding-right:0;background-image:none!important;background-repeat:no-repeat;background-position:0;background-size:0}.form-control.novalido{border:1px solid #ced4da!important;padding-right:0;background-image:none!important;background-repeat:no-repeat;background-position:0;background-size:0}"]
    }),
    __metadata("design:paramtypes", [])
], CplxAutocompleteComponent);
export { CplxAutocompleteComponent };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hdXRvY29tcGxldGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY3BseC1hdXRvY29tcGxldGUvIiwic291cmNlcyI6WyJsaWIvY3BseC1hdXRvY29tcGxldGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyTSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS3pJLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBbUI3QixZQUNTLFNBQW9CLEVBQVMsUUFBbUIsRUFBUyxVQUFzQjtRQUEvRSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7SUFDcEYsQ0FBQztJQW5CTCxnQkFBZ0IsQ0FBQyxlQUFnQztRQUNoRCxJQUFJLGVBQWUsQ0FBQyxTQUFTLEVBQUU7WUFDOUIsTUFBTSxTQUFTLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQyxFQUFxQixDQUFDLENBQUM7WUFDbkUs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Ozs7d0RBTS9DO0FBbkZXLHlCQUF5QjtJQU5yQyxTQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLGdnQ0FBdUM7UUFFdkMsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7O0tBQ2hELENBQUM7O0dBQ1cseUJBQXlCLENBd0dyQztTQXhHWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgUGlwZVRyYW5zZm9ybSwgUGlwZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBmb3J3YXJkUmVmLCBSZW5kZXJlcjIsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNOdWxsT3JVbmRlZmluZWQgfSBmcm9tICd1dGlsJztcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBtYXAsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgQWJzdHJhY3RDb250cm9sLCBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tmaWVsZHJlcXVpcmVkXSdcbn0pXG5leHBvcnQgY2xhc3MgUmVxdWlyZWREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGhhc1JlcXVpcmVkRmllbGQoYWJzdHJhY3RDb250cm9sOiBBYnN0cmFjdENvbnRyb2wpIHtcblx0XHRpZiAoYWJzdHJhY3RDb250cm9sLnZhbGlkYXRvcikge1xuXHRcdFx0Y29uc3QgdmFsaWRhdG9yID0gYWJzdHJhY3RDb250cm9sLnZhbGlkYXRvcih7fSBhcyBBYnN0cmFjdENvbnRyb2wpO1xuXHRcdFx0aWYgKHZhbGlkYXRvciAmJiB2YWxpZGF0b3IucmVxdWlyZWQpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdGNvbnN0IHJlcXVpcmVkID0gdGhpcy5oYXNSZXF1aXJlZEZpZWxkKHRoaXMubmdDb250cm9sLmNvbnRyb2wpO1xuXHRcdGlmIChyZXF1aXJlZCkge1xuXHRcdFx0dGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdyZXF1aXJlZCcsICcnKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIG5nQ29udHJvbDogTmdDb250cm9sLCBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcblx0KSB7IH1cblxufVxuXG5AUGlwZSh7IG5hbWU6ICdmaWx0ZXInIH0pXG5leHBvcnQgY2xhc3MgRmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXHR0cmFuc2Zvcm0oaXRlbXM6IGFueVtdLCBzZWFyY2hUZXh0OiBzdHJpbmcsIHZpc2libGU6IGJvb2xlYW4sIHBhcmFtcz86IHN0cmluZ1tdKTogYW55IHtcblx0XHRpZiAoIWl0ZW1zKSByZXR1cm4gW107XG5cdFx0aWYgKCFzZWFyY2hUZXh0IHx8ICF2aXNpYmxlKSByZXR1cm4gaXRlbXM7XG5cblx0XHRpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKHBhcmFtcykgJiYgcGFyYW1zLmxlbmd0aCA+IDApXG5cdFx0XHRyZXR1cm4gaXRlbXMuZmlsdGVyKChkYXRhKSA9PiBuZXcgUmVnRXhwKHNlYXJjaFRleHQsICdnaScpLnRlc3QoZGF0YVtcInNlYXJjaFwiXSkpO1xuXHR9XG5cblx0bWF0Y2hWYWx1ZShkYXRhOiBhbnlbXSwgdmFsdWU6IHN0cmluZykge1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5tYXAoKGtleSkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBSZWdFeHAodmFsdWUsICdnaScpLnRlc3QoZGF0YVtrZXldKTtcblx0XHR9KS5zb21lKHJlc3VsdCA9PiByZXN1bHQpO1xuXHR9XG5cblx0bWF0Y2hWYWx1ZVBhcmFtcyhkYXRhOiBhbnlbXSwgdmFsdWU6IHN0cmluZywgcGFyYW1zOiBzdHJpbmdbXSkge1xuXHRcdHJldHVybiBwYXJhbXMubWFwKChrZXkpID0+IHtcblx0XHRcdHJldHVybiBuZXcgUmVnRXhwKHZhbHVlLCAnZ2knKS50ZXN0KGRhdGFba2V5XSk7XG5cdFx0fSkuc29tZShyZXN1bHQgPT4gcmVzdWx0KTtcblx0fVxufVxuXG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7XG59O1xuXG5leHBvcnQgY29uc3QgQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcblx0cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG5cdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENwbHhBdXRvY29tcGxldGVDb21wb25lbnQpLFxuXHRtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY3BseC1hdXRvY29tcGxldGUnLFxuXHR0ZW1wbGF0ZVVybDogJy4vY3BseC1hdXRvY29tcGxldGUuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2NwbHgtYXV0b2NvbXBsZXRlLmNzcyddLFxuXHRwcm92aWRlcnM6IFtDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgQ3BseEF1dG9jb21wbGV0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cblx0dmlzaWJsZSA9IGZhbHNlO1xuXHRpZGNvbnRhaW5lcjogc3RyaW5nO1xuXG5cdEBJbnB1dCgpIHBhcmFtczogc3RyaW5nW107XG5cdEBJbnB1dCgpIGRhdGE6IGFueVtdO1xuXHRASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXHRASW5wdXQoKSBmaWx0ZXI6IGJvb2xlYW4gPSBmYWxzZTtcblx0QE91dHB1dCgpIHNlbGVjdGVkT2JqZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KHRydWUpO1xuXHRAT3V0cHV0KCkgdGV4dENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U3RyaW5nPih0cnVlKVxuXHRASW5wdXQoKSB0aW1lb3V0ID0gNTAwO1xuXHRASW5wdXQoKSBtaW5sZW5ndGggPSAyO1xuXHRASW5wdXQoKSBsb2FkaW5nID0gZmFsc2U7XG5cdEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cdEBJbnB1dCgpIHJlZmxlY3RwYXJhbTogYW55O1xuXHRASW5wdXQoKSByZWZsZWN0dmFsdWU6IGFueTtcblx0QElucHV0KCkgcmVxdWlyZWQgPSBmYWxzZTtcblxuXHRAVmlld0NoaWxkKCdpbnB1dFNlYXJjaCcsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0U2VhcmNoOiBFbGVtZW50UmVmO1xuXG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5pZGNvbnRhaW5lciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV07XG5cdFx0aWYgKCF0aGlzLmZpbHRlcikge1xuXHRcdFx0ZnJvbUV2ZW50KHRoaXMuaW5wdXRTZWFyY2gubmF0aXZlRWxlbWVudCwgJ2tleXVwJykucGlwZShcblx0XHRcdFx0bWFwKChldmVudDogYW55KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGV2ZW50LnRhcmdldC52YWx1ZTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdGZpbHRlcihyZXMgPT4gcmVzLmxlbmd0aCA+PSB0aGlzLm1pbmxlbmd0aCksXG5cdFx0XHRcdGRlYm91bmNlVGltZSh0aGlzLnRpbWVvdXQpLFxuXHRcdFx0XHRkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG5cdFx0XHQpLnN1YnNjcmliZSgodGV4dDogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMudmFsdWUgPSB0ZXh0O1xuXHRcdFx0XHR0aGlzLnZpc2libGUgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLnRleHRDaGFuZ2UuZW1pdCh0ZXh0KTtcblx0XHRcdFx0Ly90aGlzLmxvYWRpbmcgPSB0cnVlO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdH1cblxuXHRzZWxlY3Qob2JqZWN0OiBhbnkpIHtcblx0XHR0aGlzLnNlbGVjdGVkT2JqZWN0LmVtaXQob2JqZWN0KTtcblx0XHR0aGlzLndyaXRlVmFsdWUob2JqZWN0W3RoaXMuc2VhcmNoXSk7XG5cdFx0dGhpcy52aXNpYmxlID0gZmFsc2U7XG5cdH1cblxuXHRwdWJsaWMgc2VhcmNoID0gXCJzZWFyY2hcIjtcblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wbGV0YXIoKTtcblx0fVxuXG5cdGNvbXBsZXRhcigpIHtcblx0XHRpZiAodGhpcy5kYXRhKSB7XG5cdFx0XHR0aGlzLmRhdGEuZm9yRWFjaCgoZCkgPT4ge1xuXHRcdFx0XHRsZXQgaXRlbXMgPSBbXTtcblx0XHRcdFx0dGhpcy5wYXJhbXMubWFwKChrZXkpID0+IHtcblx0XHRcdFx0XHRpdGVtcy5wdXNoKGRba2V5XSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdGRbdGhpcy5zZWFyY2hdID0gaXRlbXMuam9pbihcIiAtIFwiKTtcblx0XHRcdH0pO1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLmRhdGEgJiYgdGhpcy5yZWZsZWN0cGFyYW0gJiYgdGhpcy5yZWZsZWN0dmFsdWUgJiYgdGhpcy5maWx0ZXIpIHtcblx0XHRcdFx0XHRsZXQgb2JqZWN0ID0gdGhpcy5kYXRhLmZpbHRlcihkID0+IGRbdGhpcy5yZWZsZWN0cGFyYW1dID09IHRoaXMucmVmbGVjdHZhbHVlKVswXTtcblx0XHRcdFx0XHRpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKG9iamVjdCkpIHtcblx0XHRcdFx0XHRcdHRoaXMudmFsdWUgPSBvYmplY3RbdGhpcy5zZWFyY2hdO1xuXHRcdFx0XHRcdFx0dGhpcy5zZWxlY3RlZE9iamVjdC5lbWl0KG9iamVjdCk7XG5cdFx0XHRcdFx0XHR0aGlzLnRleHRDaGFuZ2UuZW1pdChvYmplY3RbdGhpcy5yZWZsZWN0cGFyYW1dKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sIDIwMCk7XG5cdFx0fVxuXHR9XG5cblx0QEhvc3RMaXN0ZW5lcignd2luZG93OmNsaWNrJywgWyckZXZlbnQudGFyZ2V0J10pXG5cdG9uQ2xpY2sodGFyZ2V0RWxlbWVudDogYW55KSB7XG5cdFx0bGV0IGNsYXNlczogc3RyaW5nW10gPSB0YXJnZXRFbGVtZW50LmNsYXNzTmFtZS5zcGxpdChcIiBcIik7XG5cdFx0bGV0IGNsYXNlY29udHJvbDogYW55W10gPSBjbGFzZXMuZmlsdGVyKGNsYXNlID0+IGNsYXNlID09ICdmb3JtLWNvbnRyb2wtc2VhcmNoJyk7XG5cdFx0bGV0IGNsYXNlY29udGFpbmVyOiBhbnlbXSA9IGNsYXNlcy5maWx0ZXIoY2xhc2UgPT4gY2xhc2UgPT0gdGhpcy5pZGNvbnRhaW5lcik7XG5cdFx0dGhpcy52aXNpYmxlID0gKGNsYXNlY29udHJvbC5sZW5ndGggPT0gMCB8fCBjbGFzZWNvbnRhaW5lci5sZW5ndGggPT0gMCkgPyBmYWxzZSA6IHRydWU7XG5cdH1cblxuXHRwcml2YXRlIF92YWx1ZTogYW55ID0gJyc7XG5cdGdldCB2YWx1ZSgpOiBhbnkgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH07XG5cblx0c2V0IHZhbHVlKHY6IGFueSkge1xuXHRcdGlmICh2ICE9PSB0aGlzLl92YWx1ZSkge1xuXHRcdFx0dGhpcy5fdmFsdWUgPSB2O1xuXHRcdFx0dGhpcy5vbkNoYW5nZSh2KTtcblx0XHR9XG5cdH1cblxuXHR3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLl92YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMub25DaGFuZ2UodmFsdWUpO1xuXHR9XG5cblx0b25DaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XG5cdG9uVG91Y2hlZCA9ICgpID0+IHsgfTtcblx0cmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLm9uQ2hhbmdlID0gZm47IH1cblx0cmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxufVxuIl19