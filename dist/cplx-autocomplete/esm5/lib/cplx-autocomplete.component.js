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
var RequiredDirective = /** @class */ (function () {
    function RequiredDirective(ngControl, renderer, elementRef) {
        this.ngControl = ngControl;
        this.renderer = renderer;
        this.elementRef = elementRef;
    }
    RequiredDirective.prototype.hasRequiredField = function (abstractControl) {
        if (abstractControl.validator) {
            var validator = abstractControl.validator({});
            if (validator && validator.required) {
                return true;
            }
        }
        return false;
    };
    RequiredDirective.prototype.ngOnInit = function () {
        var required = this.hasRequiredField(this.ngControl.control);
        if (required) {
            this.renderer.setAttribute(this.elementRef.nativeElement, 'required', '');
        }
    };
    RequiredDirective.ctorParameters = function () { return [
        { type: NgControl },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    RequiredDirective = __decorate([
        Directive({
            selector: '[fieldrequired]'
        }),
        __metadata("design:paramtypes", [NgControl, Renderer2, ElementRef])
    ], RequiredDirective);
    return RequiredDirective;
}());
export { RequiredDirective };
var ReadOnlyDirective = /** @class */ (function () {
    function ReadOnlyDirective(ngControl, renderer, elementRef) {
        this.ngControl = ngControl;
        this.renderer = renderer;
        this.elementRef = elementRef;
    }
    ReadOnlyDirective.prototype.hasRequiredField = function (abstractControl) {
        if (abstractControl.disabled) {
            return abstractControl.disabled;
        }
        return false;
    };
    ReadOnlyDirective.prototype.ngOnInit = function () {
        var required = this.hasRequiredField(this.ngControl.control);
        if (required) {
            this.renderer.setAttribute(this.elementRef.nativeElement, 'readonly', '');
        }
    };
    ReadOnlyDirective.ctorParameters = function () { return [
        { type: NgControl },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    ReadOnlyDirective = __decorate([
        Directive({
            selector: '[fieldreadonly]'
        }),
        __metadata("design:paramtypes", [NgControl, Renderer2, ElementRef])
    ], ReadOnlyDirective);
    return ReadOnlyDirective;
}());
export { ReadOnlyDirective };
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText, visible, params) {
        if (!items)
            return [];
        if (!searchText || !visible)
            return items;
        if (!isNullOrUndefined(params) && params.length > 0)
            return items.filter(function (data) { return new RegExp(searchText, 'gi').test(data["search"]); });
    };
    FilterPipe.prototype.matchValue = function (data, value) {
        return Object.keys(data).map(function (key) {
            return new RegExp(value, 'gi').test(data[key]);
        }).some(function (result) { return result; });
    };
    FilterPipe.prototype.matchValueParams = function (data, value, params) {
        return params.map(function (key) {
            return new RegExp(value, 'gi').test(data[key]);
        }).some(function (result) { return result; });
    };
    FilterPipe = __decorate([
        Pipe({ name: 'filter' })
    ], FilterPipe);
    return FilterPipe;
}());
export { FilterPipe };
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return CplxAutocompleteComponent; }),
    multi: true
};
var CplxAutocompleteComponent = /** @class */ (function () {
    function CplxAutocompleteComponent() {
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
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    CplxAutocompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.idcontainer = Math.random().toString().split(".")[1];
        fromEvent(this.inputSearch.nativeElement, 'keyup').pipe(map(function (event) {
            return event.target.value;
        }), filter(function (res) { return !_this.filter ? res.length >= _this.minlength : true; }), debounceTime(this.timeout), distinctUntilChanged()).subscribe(function (text) {
            _this.value = text;
            _this.visible = true;
            _this.textChange.emit(text);
        });
    };
    CplxAutocompleteComponent.prototype.select = function (object) {
        this.selectedObject.emit(object);
        this.writeValue(object[this.search]);
        this.visible = false;
    };
    CplxAutocompleteComponent.prototype.ngOnChanges = function (changes) {
        this.completar();
    };
    CplxAutocompleteComponent.prototype.completar = function () {
        var _this = this;
        if (this.data) {
            this.data.forEach(function (d) {
                var items = [];
                _this.params.map(function (key) {
                    items.push(d[key]);
                });
                d[_this.search] = items.join(" - ");
            });
            setTimeout(function () {
                if (_this.data && _this.reflectparam && _this.reflectvalue && _this.filter) {
                    var object = _this.data.filter(function (d) { return d[_this.reflectparam] == _this.reflectvalue; })[0];
                    if (!isNullOrUndefined(object)) {
                        _this.value = object[_this.search];
                        _this.selectedObject.emit(object);
                        _this.textChange.emit(object[_this.reflectparam]);
                    }
                }
            }, 200);
        }
    };
    CplxAutocompleteComponent.prototype.onClick = function (targetElement) {
        var _this = this;
        var clases = targetElement.className.split(" ");
        var clasecontrol = clases.filter(function (clase) { return clase == 'input-search'; });
        var clasecontainer = clases.filter(function (clase) { return clase == _this.idcontainer; });
        if (clasecontrol.length == 0 && clasecontainer.length == 0)
            this.visible = false;
    };
    Object.defineProperty(CplxAutocompleteComponent.prototype, "value", {
        get: function () { return this._value; },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    CplxAutocompleteComponent.prototype.writeValue = function (value) {
        this._value = value;
        this.onChange(value);
    };
    CplxAutocompleteComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    CplxAutocompleteComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
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
    return CplxAutocompleteComponent;
}());
export { CplxAutocompleteComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hdXRvY29tcGxldGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY3BseC1hdXRvY29tcGxldGUvIiwic291cmNlcyI6WyJsaWIvY3BseC1hdXRvY29tcGxldGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyTSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pJLE9BQU8sRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBS2pDO0lBbUJDLDJCQUNTLFNBQW9CLEVBQVMsUUFBbUIsRUFBUyxVQUFzQjtRQUEvRSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7SUFDcEYsQ0FBQztJQW5CTCw0Q0FBZ0IsR0FBaEIsVUFBaUIsZUFBZ0M7UUFDaEQsSUFBSSxlQUFlLENBQUMsU0FBUyxFQUFFO1lBQzlCLElBQU0sU0FBUyxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUMsRUFBcUIsQ0FBQyxDQUFDO1lBQ25FLElBQUksU0FBUyxJQUFJLFNBQVMsQ0FB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LCBIb3N0TGlzdGVuZXIsIFBpcGVUcmFuc2Zvcm0sIFBpcGUsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgZm9yd2FyZFJlZiwgUmVuZGVyZXIyLCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWJzdHJhY3RDb250cm9sLCBOZ0NvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIG1hcCwgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgaXNOdWxsT3JVbmRlZmluZWQgfSBmcm9tICd1dGlsJztcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbZmllbGRyZXF1aXJlZF0nXG59KVxuZXhwb3J0IGNsYXNzIFJlcXVpcmVkRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRoYXNSZXF1aXJlZEZpZWxkKGFic3RyYWN0Q29udHJvbDogQWJzdHJhY3RDb250cm9sKSB7XG5cdFx0aWYgKGFic3RyYWN0Q29udHJvbC52YWxpZGF0b3IpIHtcblx0XHRcdGNvbnN0IHZhbGlkYXRvciA9IGFic3RyYWN0Q29udHJvbC52YWxpZGF0b3Ioe30gYXMgQWJzdHJhY3RDb250cm9sKTtcblx0XHRcdGlmICh2YWxpZGF0b3IgJiYgdmFsaWRhdG9yLnJlcXVpcmVkKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRjb25zdCByZXF1aXJlZCA9IHRoaXMuaGFzUmVxdWlyZWRGaWVsZCh0aGlzLm5nQ29udHJvbC5jb250cm9sKTtcblx0XHRpZiAocmVxdWlyZWQpIHtcblx0XHRcdHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAncmVxdWlyZWQnLCAnJyk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBuZ0NvbnRyb2w6IE5nQ29udHJvbCwgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG5cdCkgeyB9XG59XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tmaWVsZHJlYWRvbmx5XSdcbn0pXG5leHBvcnQgY2xhc3MgUmVhZE9ubHlEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGhhc1JlcXVpcmVkRmllbGQoYWJzdHJhY3RDb250cm9sOiBBYnN0cmFjdENvbnRyb2wpIHtcblx0XHRpZiAoYWJzdHJhY3RDb250cm9sLmRpc2FibGVkKSB7XG5cdFx0XHRyZXR1cm4gYWJzdHJhY3RDb250cm9sLmRpc2FibGVkO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRjb25zdCByZXF1aXJlZCA9IHRoaXMuaGFzUmVxdWlyZWRGaWVsZCh0aGlzLm5nQ29udHJvbC5jb250cm9sKTtcblx0XHRpZiAocmVxdWlyZWQpIHtcblx0XHRcdHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAncmVhZG9ubHknLCAnJyk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBuZ0NvbnRyb2w6IE5nQ29udHJvbCwgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG5cdCkgeyB9XG59XG5cbkBQaXBlKHsgbmFtZTogJ2ZpbHRlcicgfSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cdHRyYW5zZm9ybShpdGVtczogYW55W10sIHNlYXJjaFRleHQ6IHN0cmluZywgdmlzaWJsZTogYm9vbGVhbiwgcGFyYW1zPzogc3RyaW5nW10pOiBhbnkge1xuXHRcdGlmICghaXRlbXMpIHJldHVybiBbXTtcblx0XHRpZiAoIXNlYXJjaFRleHQgfHwgIXZpc2libGUpIHJldHVybiBpdGVtcztcblxuXHRcdGlmICghaXNOdWxsT3JVbmRlZmluZWQocGFyYW1zKSAmJiBwYXJhbXMubGVuZ3RoID4gMClcblx0XHRcdHJldHVybiBpdGVtcy5maWx0ZXIoKGRhdGEpID0+IG5ldyBSZWdFeHAoc2VhcmNoVGV4dCwgJ2dpJykudGVzdChkYXRhW1wic2VhcmNoXCJdKSk7XG5cdH1cblxuXHRtYXRjaFZhbHVlKGRhdGE6IGFueVtdLCB2YWx1ZTogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcCgoa2V5KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cCh2YWx1ZSwgJ2dpJykudGVzdChkYXRhW2tleV0pO1xuXHRcdH0pLnNvbWUocmVzdWx0ID0+IHJlc3VsdCk7XG5cdH1cblxuXHRtYXRjaFZhbHVlUGFyYW1zKGRhdGE6IGFueVtdLCB2YWx1ZTogc3RyaW5nLCBwYXJhbXM6IHN0cmluZ1tdKSB7XG5cdFx0cmV0dXJuIHBhcmFtcy5tYXAoKGtleSkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBSZWdFeHAodmFsdWUsICdnaScpLnRlc3QoZGF0YVtrZXldKTtcblx0XHR9KS5zb21lKHJlc3VsdCA9PiByZXN1bHQpO1xuXHR9XG59XG5cblxuXG5leHBvcnQgY29uc3QgQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcblx0cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG5cdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENwbHhBdXRvY29tcGxldGVDb21wb25lbnQpLFxuXHRtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY3BseC1hdXRvY29tcGxldGUnLFxuXHR0ZW1wbGF0ZVVybDogJy4vY3BseC1hdXRvY29tcGxldGUuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2NwbHgtYXV0b2NvbXBsZXRlLmNzcyddLFxuXHRwcm92aWRlcnM6IFtDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgQ3BseEF1dG9jb21wbGV0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cblx0dmlzaWJsZSA9IGZhbHNlO1xuXHRpZGNvbnRhaW5lcjogc3RyaW5nO1xuXG5cdEBJbnB1dCgpIHBhcmFtczogc3RyaW5nW107XG5cdEBJbnB1dCgpIGRhdGE6IGFueVtdO1xuXHRASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXHRASW5wdXQoKSBmaWx0ZXI6IGJvb2xlYW4gPSBmYWxzZTtcblx0QE91dHB1dCgpIHNlbGVjdGVkT2JqZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KHRydWUpO1xuXHRAT3V0cHV0KCkgdGV4dENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U3RyaW5nPih0cnVlKVxuXHRASW5wdXQoKSB0aW1lb3V0ID0gNTAwO1xuXHRASW5wdXQoKSBtaW5sZW5ndGggPSAzO1xuXHRASW5wdXQoKSBsb2FkaW5nID0gZmFsc2U7XG5cdEBJbnB1dCgpIGlzZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblx0QElucHV0KCkgcmVmbGVjdHBhcmFtOiBhbnk7XG5cdEBJbnB1dCgpIHJlZmxlY3R2YWx1ZTogYW55O1xuXHRASW5wdXQoKSBpc3JlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHVibGljIHNlYXJjaCA9IFwic2VhcmNoXCI7XG5cdEBWaWV3Q2hpbGQoJ2lucHV0U2VhcmNoJywgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXRTZWFyY2g6IEVsZW1lbnRSZWY7XG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5pZGNvbnRhaW5lciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV07XG5cdFx0ZnJvbUV2ZW50KHRoaXMuaW5wdXRTZWFyY2gubmF0aXZlRWxlbWVudCwgJ2tleXVwJykucGlwZShcblx0XHRcdG1hcCgoZXZlbnQ6IGFueSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHRcdFx0fSksXG5cdFx0XHRmaWx0ZXIocmVzID0+ICF0aGlzLmZpbHRlciA/IHJlcy5sZW5ndGggPj0gdGhpcy5taW5sZW5ndGggOiB0cnVlKSxcblx0XHRcdGRlYm91bmNlVGltZSh0aGlzLnRpbWVvdXQpLFxuXHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdCkuc3Vic2NyaWJlKCh0ZXh0OiBzdHJpbmcpID0+IHtcblx0XHRcdHRoaXMudmFsdWUgPSB0ZXh0O1xuXHRcdFx0dGhpcy52aXNpYmxlID0gdHJ1ZTtcblx0XHRcdHRoaXMudGV4dENoYW5nZS5lbWl0KHRleHQpO1xuXHRcdH0pO1xuXHR9XG5cblx0c2VsZWN0KG9iamVjdDogYW55KSB7XG5cdFx0dGhpcy5zZWxlY3RlZE9iamVjdC5lbWl0KG9iamVjdCk7XG5cdFx0dGhpcy53cml0ZVZhbHVlKG9iamVjdFt0aGlzLnNlYXJjaF0pO1xuXHRcdHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuXHR9XG5cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wbGV0YXIoKTtcblx0fVxuXG5cdGNvbXBsZXRhcigpIHtcblx0XHRpZiAodGhpcy5kYXRhKSB7XG5cdFx0XHR0aGlzLmRhdGEuZm9yRWFjaCgoZCkgPT4ge1xuXHRcdFx0XHRsZXQgaXRlbXMgPSBbXTtcblx0XHRcdFx0dGhpcy5wYXJhbXMubWFwKChrZXkpID0+IHtcblx0XHRcdFx0XHRpdGVtcy5wdXNoKGRba2V5XSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdGRbdGhpcy5zZWFyY2hdID0gaXRlbXMuam9pbihcIiAtIFwiKTtcblx0XHRcdH0pO1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLmRhdGEgJiYgdGhpcy5yZWZsZWN0cGFyYW0gJiYgdGhpcy5yZWZsZWN0dmFsdWUgJiYgdGhpcy5maWx0ZXIpIHtcblx0XHRcdFx0XHRsZXQgb2JqZWN0ID0gdGhpcy5kYXRhLmZpbHRlcihkID0+IGRbdGhpcy5yZWZsZWN0cGFyYW1dID09IHRoaXMucmVmbGVjdHZhbHVlKVswXTtcblx0XHRcdFx0XHRpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKG9iamVjdCkpIHtcblx0XHRcdFx0XHRcdHRoaXMudmFsdWUgPSBvYmplY3RbdGhpcy5zZWFyY2hdO1xuXHRcdFx0XHRcdFx0dGhpcy5zZWxlY3RlZE9iamVjdC5lbWl0KG9iamVjdCk7XG5cdFx0XHRcdFx0XHR0aGlzLnRleHRDaGFuZ2UuZW1pdChvYmplY3RbdGhpcy5yZWZsZWN0cGFyYW1dKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sIDIwMCk7XG5cdFx0fVxuXHR9XG5cblx0QEhvc3RMaXN0ZW5lcignd2luZG93OmNsaWNrJywgWyckZXZlbnQudGFyZ2V0J10pXG5cdG9uQ2xpY2sodGFyZ2V0RWxlbWVudDogYW55KSB7XG5cdFx0bGV0IGNsYXNlczogc3RyaW5nW10gPSB0YXJnZXRFbGVtZW50LmNsYXNzTmFtZS5zcGxpdChcIiBcIik7XG5cdFx0bGV0IGNsYXNlY29udHJvbDogYW55W10gPSBjbGFzZXMuZmlsdGVyKGNsYXNlID0+IGNsYXNlID09ICdpbnB1dC1zZWFyY2gnKTtcblx0XHRsZXQgY2xhc2Vjb250YWluZXI6IGFueVtdID0gY2xhc2VzLmZpbHRlcihjbGFzZSA9PiBjbGFzZSA9PSB0aGlzLmlkY29udGFpbmVyKTtcblx0XHRpZiAoY2xhc2Vjb250cm9sLmxlbmd0aCA9PSAwICYmIGNsYXNlY29udGFpbmVyLmxlbmd0aCA9PSAwKSB0aGlzLnZpc2libGUgPSBmYWxzZTtcblx0fVxuXG5cdHByaXZhdGUgX3ZhbHVlOiBhbnkgPSAnJztcblx0Z2V0IHZhbHVlKCk6IGFueSB7IHJldHVybiB0aGlzLl92YWx1ZTsgfTtcblxuXHRzZXQgdmFsdWUodjogYW55KSB7XG5cdFx0aWYgKHYgIT09IHRoaXMuX3ZhbHVlKSB7XG5cdFx0XHR0aGlzLl92YWx1ZSA9IHY7XG5cdFx0XHR0aGlzLm9uQ2hhbmdlKHYpO1xuXHRcdH1cblx0fVxuXG5cdHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMuX3ZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG5cdH1cblxuXHRvbkNoYW5nZSA9IChfOiBhbnkpID0+IHsgfTtcblx0b25Ub3VjaGVkID0gKCkgPT4geyB9O1xuXHRyZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7IHRoaXMub25DaGFuZ2UgPSBmbjsgfVxuXHRyZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9XG59XG4iXX0=