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
import { NG_VALUE_ACCESSOR, ControlValueAccessor, AbstractControl, NgControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime, map, distinctUntilChanged, filter } from "rxjs/operators";
import { isNullOrUndefined } from 'util';
import { fromEvent } from 'rxjs';
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
let ReadOnlyDirective = class ReadOnlyDirective {
    constructor(ngControl, renderer, elementRef) {
        this.ngControl = ngControl;
        this.renderer = renderer;
        this.elementRef = elementRef;
    }
    hasRequiredField(abstractControl) {
        if (abstractControl.disabled) {
            return abstractControl.disabled;
        }
        return false;
    }
    ngOnInit() {
        const required = this.hasRequiredField(this.ngControl.control);
        if (required) {
            this.renderer.setAttribute(this.elementRef.nativeElement, 'readonly', '');
        }
    }
};
ReadOnlyDirective.ctorParameters = () => [
    { type: NgControl },
    { type: Renderer2 },
    { type: ElementRef }
];
ReadOnlyDirective = __decorate([
    Directive({
        selector: '[fieldreadonly]'
    }),
    __metadata("design:paramtypes", [NgControl, Renderer2, ElementRef])
], ReadOnlyDirective);
export { ReadOnlyDirective };
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
        this.minlength = 3;
        this.loading = false;
        this.isdisabled = false;
        this.isrequired = false;
        this.search = "search";
        this._value = '';
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    ngOnInit() {
        this.idcontainer = Math.random().toString().split(".")[1];
        fromEvent(this.inputSearch.nativeElement, 'keyup').pipe(map((event) => {
            return event.target.value;
        }), filter(res => !this.filter ? res.length >= this.minlength : true), debounceTime(this.timeout), distinctUntilChanged()).subscribe((text) => {
            this.value = text;
            this.visible = true;
            this.textChange.emit(text);
        });
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
        let clasecontrol = clases.filter(clase => clase == 'input-search');
        let clasecontainer = clases.filter(clase => clase == this.idcontainer);
        if (clasecontrol.length == 0 && clasecontainer.length == 0)
            this.visible = false;
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
], CplxAutocompleteComponent.prototype, "isdisabled", void 0);
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
    __metadata("design:type", Boolean)
], CplxAutocompleteComponent.prototype, "isrequired", void 0);
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
        template: "<div class=\"search dropdown {{visible ? 'active': ''}}\" [ngClass]=\"{'disabled': isdisabled}\">\r\n\t<input #inputSearch class=\"form-control form-control-sm search {{idcontainer}} input-search\"\r\n\t\t(change)=\"selectedObject.emit(null)\" autocomplete=\"off\" [(ngModel)]=\"value\" [placeholder]=\"placeholder\"\r\n\t\t[required]=\"isrequired\" [ngClass]=\"!isrequired ? ( value == '' ? 'novalido': ''): ''\"\r\n\t\t(click)=\"visible = !filter ? value?.length >= minlength : true\">\r\n\t<div class=\"menu transition {{visible ? 'visible': 'hidden'}}\" *ngIf=\"!isdisabled\">\r\n\t\t<ng-container *ngIf=\"loading && !filter; else templateName\">\r\n\t\t\t<div class=\"item\">Buscando ...</div>\r\n\t\t</ng-container>\r\n\t\t<ng-template #templateName>\r\n\t\t\t<div *ngFor=\"let li of filter ? (data | filter : value : visible : params) : data\" class=\"item\"\r\n\t\t\t\t(click)=\"select(li)\"> {{li[search]}}\r\n\t\t\t</div>\r\n\t\t</ng-template>\r\n\t</div>\r\n</div>\r\n",
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
        styles: [".disabled input{pointer-events:none!important;cursor:not-allowed!important;background-color:#e9ecef!important;opacity:1!important}.search.dropdown.active input{border-bottom-left-radius:0!important;border-bottom-right-radius:0!important;border-bottom:0!important}.search.dropdown .menu{overflow-x:hidden;overflow-y:auto;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-overflow-scrolling:touch;max-height:14rem}.dropdown .menu>.item:hover{background:rgba(0,0,0,.05);color:rgba(0,0,0,.95);z-index:13}.dropdown .menu>.item{border-top:1px solid #fafafa;white-space:normal;word-wrap:normal;position:relative;cursor:pointer;display:block;border:none;height:auto;text-align:left;border-top:none;line-height:1em;color:rgba(0,0,0,.87);padding:.78571429rem 1.14285714rem!important;font-size:1rem;text-transform:none;font-weight:400;box-shadow:none;-webkit-touch-callout:none}.active.dropdown{border-bottom-left-radius:0!important;border-bottom-right-radius:0!important;border-color:#96c8da;box-shadow:0 2px 3px 0 rgba(34,36,38,.15)}.search.dropdown>input.search{box-shadow:none;cursor:text;top:0;left:1px;width:100%;outline:0;-webkit-tap-highlight-color:rgba(255,255,255,0)}.menu{border-color:#96c8da;box-shadow:0 2px 3px 0 rgba(34,36,38,.15)}.dropdown .menu{cursor:auto;position:absolute;display:block;outline:0;top:100%;margin:0;padding:0;background:#fff;font-size:1em;text-shadow:none;text-align:left;box-shadow:0 2px 3px 0 rgba(34,36,38,.15);border:1px solid rgba(34,36,38,.15);border-radius:.28571429rem;z-index:11}.transition{-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-fill-mode:both;animation-fill-mode:both;transition:.5s}.transition.visible{min-width:calc(100% + 2px);width:calc(100% + 2px);max-height:14rem;opacity:1!important;border-top-left-radius:0!important;border-top-right-radius:0!important}.transition.hidden{height:0;opacity:0!important}.menu::-webkit-scrollbar{-webkit-appearance:none;width:10px;height:10px}.menu::-webkit-scrollbar-thumb{cursor:pointer;border-radius:5px;background:rgba(0,0,0,.25);-webkit-transition:color .2s;transition:color .2s}.menu::-webkit-scrollbar-track{background:rgba(0,0,0,.1);border-radius:0}::-moz-selection{background-color:#cce2ff;color:rgba(0,0,0,.87)}::selection{background-color:#cce2ff;color:rgba(0,0,0,.87)}.form-control.ng-invalid.ng-touched[required]{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.ng-invalid.ng-touched[required]:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25);padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.ng-valid[required=true],.form-control.ng-valid[required],.form-control[required]:valid{border-color:#28a745;padding-right:0;background-image:none!important;background-repeat:no-repeat;background-position:0;background-size:0}.form-control:valid{border-color:#ced4da;padding-right:0;background-image:none!important;background-repeat:no-repeat;background-position:0;background-size:0}.form-control:valid:focus{border-color:#ced4da;padding-right:0;background-image:none!important;background-repeat:no-repeat;background-position:0;background-size:0}.form-control.novalido{border:1px solid #ced4da!important;padding-right:0;background-image:none!important;background-repeat:no-repeat;background-position:0;background-size:0}"]
    }),
    __metadata("design:paramtypes", [])
], CplxAutocompleteComponent);
export { CplxAutocompleteComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hdXRvY29tcGxldGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY3BseC1hdXRvY29tcGxldGUvIiwic291cmNlcyI6WyJsaWIvY3BseC1hdXRvY29tcGxldGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyTSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pJLE9BQU8sRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBS2pDLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBbUI3QixZQUNTLFNBQW9CLEVBQVMsUUFBbUIsRUFBUyxVQUFzQjtRQUEvRSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7SUFDcEYsQ0FBQztJQW5CTCxnQkFBZ0IsQ0FBQyxlQUFnQztRQUNoRCxJQUFJLGVBQWUsQ0FBQyxTQUFTLEVBQUU7WUFDOUIsTUFBTSxTQUFTLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQyxFQUFxQixDQUFDLENBQUM7WUFDbkUs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QyxDQUFDO0lBQ3BFLGlCQUFpQixDQUFDLEVBQWMsSUFBVSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FDaEUsQ0FBQTtBQTdGUztJQUFSLEtBQUssRUFBRTs7eURBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFOzt1REFBYTtBQUNaO0lBQVIsS0FBSyxFQUFFOzs4REFBcUI7QUFDcEI7SUFBUixLQUFLLEVBQUU7O3lEQUF5QjtBQUN2QjtJQUFULE1BQU0sRUFBRTs7aUVBQThDO0FBQzdDO0lBQVQsTUFBTSxFQUFFOzs2REFBNEM7QUFDNUM7SUFBUixLQUFLLEVBQUU7OzBEQUFlO0FBQ2Q7SUFBUixLQUFLLEVBQUU7OzREQUFlO0FBQ2Q7SUFBUixLQUFLLEVBQUU7OzBEQUFpQjtBQUNoQjtJQUFSLEtBQUssRUFBRTs7NkRBQTZCO0FBQzVCO0lBQVIsS0FBSyxFQUFFOzsrREFBbUI7QUFDbEI7SUFBUixLQUFLLEVBQUU7OytEQUFtQjtBQUNsQjtJQUFSLEtBQUssRUFBRTs7NkRBQTZCO0FBR087SUFBM0MsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs4QkFBYyxVQUFVOzhEQUFDO0FBb0RwRTtJQURDLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7Ozt3REFNL0M7QUE5RVcseUJBQXlCO0lBTnJDLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsKzlCQUF1QztRQUV2QyxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQzs7S0FDaEQsQ0FBQzs7R0FDVyx5QkFBeUIsQ0FtR3JDO1NBbkdZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSG9zdExpc3RlbmVyLCBQaXBlVHJhbnNmb3JtLCBQaXBlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIGZvcndhcmRSZWYsIFJlbmRlcmVyMiwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFic3RyYWN0Q29udHJvbCwgTmdDb250cm9sLCBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBtYXAsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IGlzTnVsbE9yVW5kZWZpbmVkIH0gZnJvbSAndXRpbCc7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2ZpZWxkcmVxdWlyZWRdJ1xufSlcbmV4cG9ydCBjbGFzcyBSZXF1aXJlZERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0aGFzUmVxdWlyZWRGaWVsZChhYnN0cmFjdENvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkge1xuXHRcdGlmIChhYnN0cmFjdENvbnRyb2wudmFsaWRhdG9yKSB7XG5cdFx0XHRjb25zdCB2YWxpZGF0b3IgPSBhYnN0cmFjdENvbnRyb2wudmFsaWRhdG9yKHt9IGFzIEFic3RyYWN0Q29udHJvbCk7XG5cdFx0XHRpZiAodmFsaWRhdG9yICYmIHZhbGlkYXRvci5yZXF1aXJlZCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Y29uc3QgcmVxdWlyZWQgPSB0aGlzLmhhc1JlcXVpcmVkRmllbGQodGhpcy5uZ0NvbnRyb2wuY29udHJvbCk7XG5cdFx0aWYgKHJlcXVpcmVkKSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3JlcXVpcmVkJywgJycpO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgbmdDb250cm9sOiBOZ0NvbnRyb2wsIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLCBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuXHQpIHsgfVxufVxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbZmllbGRyZWFkb25seV0nXG59KVxuZXhwb3J0IGNsYXNzIFJlYWRPbmx5RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRoYXNSZXF1aXJlZEZpZWxkKGFic3RyYWN0Q29udHJvbDogQWJzdHJhY3RDb250cm9sKSB7XG5cdFx0aWYgKGFic3RyYWN0Q29udHJvbC5kaXNhYmxlZCkge1xuXHRcdFx0cmV0dXJuIGFic3RyYWN0Q29udHJvbC5kaXNhYmxlZDtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Y29uc3QgcmVxdWlyZWQgPSB0aGlzLmhhc1JlcXVpcmVkRmllbGQodGhpcy5uZ0NvbnRyb2wuY29udHJvbCk7XG5cdFx0aWYgKHJlcXVpcmVkKSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3JlYWRvbmx5JywgJycpO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgbmdDb250cm9sOiBOZ0NvbnRyb2wsIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLCBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuXHQpIHsgfVxufVxuXG5AUGlwZSh7IG5hbWU6ICdmaWx0ZXInIH0pXG5leHBvcnQgY2xhc3MgRmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXHR0cmFuc2Zvcm0oaXRlbXM6IGFueVtdLCBzZWFyY2hUZXh0OiBzdHJpbmcsIHZpc2libGU6IGJvb2xlYW4sIHBhcmFtcz86IHN0cmluZ1tdKTogYW55IHtcblx0XHRpZiAoIWl0ZW1zKSByZXR1cm4gW107XG5cdFx0aWYgKCFzZWFyY2hUZXh0IHx8ICF2aXNpYmxlKSByZXR1cm4gaXRlbXM7XG5cblx0XHRpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKHBhcmFtcykgJiYgcGFyYW1zLmxlbmd0aCA+IDApXG5cdFx0XHRyZXR1cm4gaXRlbXMuZmlsdGVyKChkYXRhKSA9PiBuZXcgUmVnRXhwKHNlYXJjaFRleHQsICdnaScpLnRlc3QoZGF0YVtcInNlYXJjaFwiXSkpO1xuXHR9XG5cblx0bWF0Y2hWYWx1ZShkYXRhOiBhbnlbXSwgdmFsdWU6IHN0cmluZykge1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5tYXAoKGtleSkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBSZWdFeHAodmFsdWUsICdnaScpLnRlc3QoZGF0YVtrZXldKTtcblx0XHR9KS5zb21lKHJlc3VsdCA9PiByZXN1bHQpO1xuXHR9XG5cblx0bWF0Y2hWYWx1ZVBhcmFtcyhkYXRhOiBhbnlbXSwgdmFsdWU6IHN0cmluZywgcGFyYW1zOiBzdHJpbmdbXSkge1xuXHRcdHJldHVybiBwYXJhbXMubWFwKChrZXkpID0+IHtcblx0XHRcdHJldHVybiBuZXcgUmVnRXhwKHZhbHVlLCAnZ2knKS50ZXN0KGRhdGFba2V5XSk7XG5cdFx0fSkuc29tZShyZXN1bHQgPT4gcmVzdWx0KTtcblx0fVxufVxuXG5cblxuZXhwb3J0IGNvbnN0IENVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG5cdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHR1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDcGx4QXV0b2NvbXBsZXRlQ29tcG9uZW50KSxcblx0bXVsdGk6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NwbHgtYXV0b2NvbXBsZXRlJyxcblx0dGVtcGxhdGVVcmw6ICcuL2NwbHgtYXV0b2NvbXBsZXRlLmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9jcGx4LWF1dG9jb21wbGV0ZS5jc3MnXSxcblx0cHJvdmlkZXJzOiBbQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXG59KVxuZXhwb3J0IGNsYXNzIENwbHhBdXRvY29tcGxldGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXHRjb25zdHJ1Y3RvcigpIHsgfVxuXG5cdHZpc2libGUgPSBmYWxzZTtcblx0aWRjb250YWluZXI6IHN0cmluZztcblxuXHRASW5wdXQoKSBwYXJhbXM6IHN0cmluZ1tdO1xuXHRASW5wdXQoKSBkYXRhOiBhbnlbXTtcblx0QElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcblx0QElucHV0KCkgZmlsdGVyOiBib29sZWFuID0gZmFsc2U7XG5cdEBPdXRwdXQoKSBzZWxlY3RlZE9iamVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55Pih0cnVlKTtcblx0QE91dHB1dCgpIHRleHRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFN0cmluZz4odHJ1ZSlcblx0QElucHV0KCkgdGltZW91dCA9IDUwMDtcblx0QElucHV0KCkgbWlubGVuZ3RoID0gMztcblx0QElucHV0KCkgbG9hZGluZyA9IGZhbHNlO1xuXHRASW5wdXQoKSBpc2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cdEBJbnB1dCgpIHJlZmxlY3RwYXJhbTogYW55O1xuXHRASW5wdXQoKSByZWZsZWN0dmFsdWU6IGFueTtcblx0QElucHV0KCkgaXNyZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHB1YmxpYyBzZWFyY2ggPSBcInNlYXJjaFwiO1xuXHRAVmlld0NoaWxkKCdpbnB1dFNlYXJjaCcsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0U2VhcmNoOiBFbGVtZW50UmVmO1xuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuaWRjb250YWluZXIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdO1xuXHRcdGZyb21FdmVudCh0aGlzLmlucHV0U2VhcmNoLm5hdGl2ZUVsZW1lbnQsICdrZXl1cCcpLnBpcGUoXG5cdFx0XHRtYXAoKGV2ZW50OiBhbnkpID0+IHtcblx0XHRcdFx0cmV0dXJuIGV2ZW50LnRhcmdldC52YWx1ZTtcblx0XHRcdH0pLFxuXHRcdFx0ZmlsdGVyKHJlcyA9PiAhdGhpcy5maWx0ZXIgPyByZXMubGVuZ3RoID49IHRoaXMubWlubGVuZ3RoIDogdHJ1ZSksXG5cdFx0XHRkZWJvdW5jZVRpbWUodGhpcy50aW1lb3V0KSxcblx0XHRcdGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcblx0XHQpLnN1YnNjcmliZSgodGV4dDogc3RyaW5nKSA9PiB7XG5cdFx0XHR0aGlzLnZhbHVlID0gdGV4dDtcblx0XHRcdHRoaXMudmlzaWJsZSA9IHRydWU7XG5cdFx0XHR0aGlzLnRleHRDaGFuZ2UuZW1pdCh0ZXh0KTtcblx0XHR9KTtcblx0fVxuXG5cdHNlbGVjdChvYmplY3Q6IGFueSkge1xuXHRcdHRoaXMuc2VsZWN0ZWRPYmplY3QuZW1pdChvYmplY3QpO1xuXHRcdHRoaXMud3JpdGVWYWx1ZShvYmplY3RbdGhpcy5zZWFyY2hdKTtcblx0XHR0aGlzLnZpc2libGUgPSBmYWxzZTtcblx0fVxuXG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXHRcdHRoaXMuY29tcGxldGFyKCk7XG5cdH1cblxuXHRjb21wbGV0YXIoKSB7XG5cdFx0aWYgKHRoaXMuZGF0YSkge1xuXHRcdFx0dGhpcy5kYXRhLmZvckVhY2goKGQpID0+IHtcblx0XHRcdFx0bGV0IGl0ZW1zID0gW107XG5cdFx0XHRcdHRoaXMucGFyYW1zLm1hcCgoa2V5KSA9PiB7XG5cdFx0XHRcdFx0aXRlbXMucHVzaChkW2tleV0pO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHRkW3RoaXMuc2VhcmNoXSA9IGl0ZW1zLmpvaW4oXCIgLSBcIik7XG5cdFx0XHR9KTtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRpZiAodGhpcy5kYXRhICYmIHRoaXMucmVmbGVjdHBhcmFtICYmIHRoaXMucmVmbGVjdHZhbHVlICYmIHRoaXMuZmlsdGVyKSB7XG5cdFx0XHRcdFx0bGV0IG9iamVjdCA9IHRoaXMuZGF0YS5maWx0ZXIoZCA9PiBkW3RoaXMucmVmbGVjdHBhcmFtXSA9PSB0aGlzLnJlZmxlY3R2YWx1ZSlbMF07XG5cdFx0XHRcdFx0aWYgKCFpc051bGxPclVuZGVmaW5lZChvYmplY3QpKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnZhbHVlID0gb2JqZWN0W3RoaXMuc2VhcmNoXTtcblx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRPYmplY3QuZW1pdChvYmplY3QpO1xuXHRcdFx0XHRcdFx0dGhpcy50ZXh0Q2hhbmdlLmVtaXQob2JqZWN0W3RoaXMucmVmbGVjdHBhcmFtXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LCAyMDApO1xuXHRcdH1cblx0fVxuXG5cdEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpjbGljaycsIFsnJGV2ZW50LnRhcmdldCddKVxuXHRvbkNsaWNrKHRhcmdldEVsZW1lbnQ6IGFueSkge1xuXHRcdGxldCBjbGFzZXM6IHN0cmluZ1tdID0gdGFyZ2V0RWxlbWVudC5jbGFzc05hbWUuc3BsaXQoXCIgXCIpO1xuXHRcdGxldCBjbGFzZWNvbnRyb2w6IGFueVtdID0gY2xhc2VzLmZpbHRlcihjbGFzZSA9PiBjbGFzZSA9PSAnaW5wdXQtc2VhcmNoJyk7XG5cdFx0bGV0IGNsYXNlY29udGFpbmVyOiBhbnlbXSA9IGNsYXNlcy5maWx0ZXIoY2xhc2UgPT4gY2xhc2UgPT0gdGhpcy5pZGNvbnRhaW5lcik7XG5cdFx0aWYgKGNsYXNlY29udHJvbC5sZW5ndGggPT0gMCAmJiBjbGFzZWNvbnRhaW5lci5sZW5ndGggPT0gMCkgdGhpcy52aXNpYmxlID0gZmFsc2U7XG5cdH1cblxuXHRwcml2YXRlIF92YWx1ZTogYW55ID0gJyc7XG5cdGdldCB2YWx1ZSgpOiBhbnkgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH07XG5cblx0c2V0IHZhbHVlKHY6IGFueSkge1xuXHRcdGlmICh2ICE9PSB0aGlzLl92YWx1ZSkge1xuXHRcdFx0dGhpcy5fdmFsdWUgPSB2O1xuXHRcdFx0dGhpcy5vbkNoYW5nZSh2KTtcblx0XHR9XG5cdH1cblxuXHR3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLl92YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMub25DaGFuZ2UodmFsdWUpO1xuXHR9XG5cblx0b25DaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XG5cdG9uVG91Y2hlZCA9ICgpID0+IHsgfTtcblx0cmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLm9uQ2hhbmdlID0gZm47IH1cblx0cmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxufVxuIl19