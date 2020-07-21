import { ɵɵdefineInjectable, Injectable, Renderer2, ElementRef, Directive, Pipe, forwardRef, EventEmitter, Input, Output, ViewChild, HostListener, Component, NgModule } from '@angular/core';
import { NgControl, NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { fromEvent } from 'rxjs';
import { CommonModule } from '@angular/common';

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CplxAutocompleteService = /** @class */ (function () {
    function CplxAutocompleteService() {
    }
    CplxAutocompleteService.ɵprov = ɵɵdefineInjectable({ factory: function CplxAutocompleteService_Factory() { return new CplxAutocompleteService(); }, token: CplxAutocompleteService, providedIn: "root" });
    CplxAutocompleteService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CplxAutocompleteService);
    return CplxAutocompleteService;
}());

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    RequiredDirective = __decorate$1([
        Directive({
            selector: '[fieldrequired]'
        }),
        __metadata$1("design:paramtypes", [NgControl, Renderer2, ElementRef])
    ], RequiredDirective);
    return RequiredDirective;
}());
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
    ReadOnlyDirective = __decorate$1([
        Directive({
            selector: '[fieldreadonly]'
        }),
        __metadata$1("design:paramtypes", [NgControl, Renderer2, ElementRef])
    ], ReadOnlyDirective);
    return ReadOnlyDirective;
}());
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
    FilterPipe = __decorate$1([
        Pipe({ name: 'filter' })
    ], FilterPipe);
    return FilterPipe;
}());
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
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
    __decorate$1([
        Input(),
        __metadata$1("design:type", Array)
    ], CplxAutocompleteComponent.prototype, "params", void 0);
    __decorate$1([
        Input(),
        __metadata$1("design:type", Array)
    ], CplxAutocompleteComponent.prototype, "data", void 0);
    __decorate$1([
        Input(),
        __metadata$1("design:type", String)
    ], CplxAutocompleteComponent.prototype, "placeholder", void 0);
    __decorate$1([
        Input(),
        __metadata$1("design:type", Boolean)
    ], CplxAutocompleteComponent.prototype, "filter", void 0);
    __decorate$1([
        Output(),
        __metadata$1("design:type", Object)
    ], CplxAutocompleteComponent.prototype, "selectedObject", void 0);
    __decorate$1([
        Output(),
        __metadata$1("design:type", Object)
    ], CplxAutocompleteComponent.prototype, "textChange", void 0);
    __decorate$1([
        Input(),
        __metadata$1("design:type", Object)
    ], CplxAutocompleteComponent.prototype, "timeout", void 0);
    __decorate$1([
        Input(),
        __metadata$1("design:type", Object)
    ], CplxAutocompleteComponent.prototype, "minlength", void 0);
    __decorate$1([
        Input(),
        __metadata$1("design:type", Object)
    ], CplxAutocompleteComponent.prototype, "loading", void 0);
    __decorate$1([
        Input(),
        __metadata$1("design:type", Boolean)
    ], CplxAutocompleteComponent.prototype, "isdisabled", void 0);
    __decorate$1([
        Input(),
        __metadata$1("design:type", Object)
    ], CplxAutocompleteComponent.prototype, "reflectparam", void 0);
    __decorate$1([
        Input(),
        __metadata$1("design:type", Object)
    ], CplxAutocompleteComponent.prototype, "reflectvalue", void 0);
    __decorate$1([
        Input(),
        __metadata$1("design:type", Boolean)
    ], CplxAutocompleteComponent.prototype, "isrequired", void 0);
    __decorate$1([
        ViewChild('inputSearch', { static: true }),
        __metadata$1("design:type", ElementRef)
    ], CplxAutocompleteComponent.prototype, "inputSearch", void 0);
    __decorate$1([
        HostListener('window:click', ['$event.target']),
        __metadata$1("design:type", Function),
        __metadata$1("design:paramtypes", [Object]),
        __metadata$1("design:returntype", void 0)
    ], CplxAutocompleteComponent.prototype, "onClick", null);
    CplxAutocompleteComponent = __decorate$1([
        Component({
            selector: 'cplx-autocomplete',
            template: "<div class=\"search dropdown {{visible ? 'active': ''}}\" [ngClass]=\"{'disabled': isdisabled}\">\r\n\t<input #inputSearch class=\"form-control form-control-sm search {{idcontainer}} input-search\"\r\n\t\t(change)=\"selectedObject.emit(null)\" autocomplete=\"off\" [(ngModel)]=\"value\" [placeholder]=\"placeholder\"\r\n\t\t[required]=\"isrequired\" [ngClass]=\"!isrequired ? ( value == '' ? 'novalido': ''): ''\"\r\n\t\t(click)=\"visible = !filter ? value?.length >= minlength : true\">\r\n\t<div class=\"menu transition {{visible ? 'visible': 'hidden'}}\" *ngIf=\"!isdisabled\">\r\n\t\t<ng-container *ngIf=\"loading && !filter; else templateName\">\r\n\t\t\t<div class=\"item\">Buscando ...</div>\r\n\t\t</ng-container>\r\n\t\t<ng-template #templateName>\r\n\t\t\t<div *ngFor=\"let li of filter ? (data | filter : value : visible : params) : data\" class=\"item\"\r\n\t\t\t\t(click)=\"select(li)\"> {{li[search]}}\r\n\t\t\t</div>\r\n\t\t</ng-template>\r\n\t</div>\r\n</div>\r\n",
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            styles: [".disabled input{pointer-events:none!important;cursor:not-allowed!important;background-color:#e9ecef!important;opacity:1!important}.search.dropdown.active input{border-bottom-left-radius:0!important;border-bottom-right-radius:0!important;border-bottom:0!important}.search.dropdown .menu{overflow-x:hidden;overflow-y:auto;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-overflow-scrolling:touch;max-height:14rem}.dropdown .menu>.item:hover{background:rgba(0,0,0,.05);color:rgba(0,0,0,.95);z-index:13}.dropdown .menu>.item{border-top:1px solid #fafafa;white-space:normal;word-wrap:normal;position:relative;cursor:pointer;display:block;border:none;height:auto;text-align:left;border-top:none;line-height:1em;color:rgba(0,0,0,.87);padding:.78571429rem 1.14285714rem!important;font-size:1rem;text-transform:none;font-weight:400;box-shadow:none;-webkit-touch-callout:none}.active.dropdown{border-bottom-left-radius:0!important;border-bottom-right-radius:0!important;border-color:#96c8da;box-shadow:0 2px 3px 0 rgba(34,36,38,.15)}.search.dropdown>input.search{box-shadow:none;cursor:text;top:0;left:1px;width:100%;outline:0;-webkit-tap-highlight-color:rgba(255,255,255,0)}.menu{border-color:#96c8da;box-shadow:0 2px 3px 0 rgba(34,36,38,.15)}.dropdown .menu{cursor:auto;position:absolute;display:block;outline:0;top:100%;margin:0;padding:0;background:#fff;font-size:1em;text-shadow:none;text-align:left;box-shadow:0 2px 3px 0 rgba(34,36,38,.15);border:1px solid rgba(34,36,38,.15);border-radius:.28571429rem;z-index:11}.transition{-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-fill-mode:both;animation-fill-mode:both;transition:.5s}.transition.visible{min-width:calc(100% + 2px);width:calc(100% + 2px);max-height:14rem;opacity:1!important;border-top-left-radius:0!important;border-top-right-radius:0!important}.transition.hidden{height:0;opacity:0!important}.menu::-webkit-scrollbar{-webkit-appearance:none;width:10px;height:10px}.menu::-webkit-scrollbar-thumb{cursor:pointer;border-radius:5px;background:rgba(0,0,0,.25);-webkit-transition:color .2s;transition:color .2s}.menu::-webkit-scrollbar-track{background:rgba(0,0,0,.1);border-radius:0}::-moz-selection{background-color:#cce2ff;color:rgba(0,0,0,.87)}::selection{background-color:#cce2ff;color:rgba(0,0,0,.87)}.form-control.ng-invalid.ng-touched[required]{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.ng-invalid.ng-touched[required]:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25);padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.ng-valid[required=true],.form-control.ng-valid[required],.form-control[required]:valid{border-color:#28a745;padding-right:0;background-image:none!important;background-repeat:no-repeat;background-position:0;background-size:0}.form-control:valid{border-color:#ced4da;padding-right:0;background-image:none!important;background-repeat:no-repeat;background-position:0;background-size:0}.form-control:valid:focus{border-color:#ced4da;padding-right:0;background-image:none!important;background-repeat:no-repeat;background-position:0;background-size:0}.form-control.novalido{border:1px solid #ced4da!important;padding-right:0;background-image:none!important;background-repeat:no-repeat;background-position:0;background-size:0}"]
        }),
        __metadata$1("design:paramtypes", [])
    ], CplxAutocompleteComponent);
    return CplxAutocompleteComponent;
}());

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CplxAutocompleteModule = /** @class */ (function () {
    function CplxAutocompleteModule() {
    }
    CplxAutocompleteModule = __decorate$2([
        NgModule({
            declarations: [CplxAutocompleteComponent, FilterPipe, RequiredDirective],
            imports: [CommonModule, FormsModule, ReactiveFormsModule],
            exports: [CplxAutocompleteComponent, FilterPipe, RequiredDirective]
        })
    ], CplxAutocompleteModule);
    return CplxAutocompleteModule;
}());

/*
 * Public API Surface of cplx-autocomplete
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, CplxAutocompleteComponent, CplxAutocompleteModule, CplxAutocompleteService, FilterPipe, ReadOnlyDirective, RequiredDirective };
//# sourceMappingURL=cplx-autocomplete.js.map
