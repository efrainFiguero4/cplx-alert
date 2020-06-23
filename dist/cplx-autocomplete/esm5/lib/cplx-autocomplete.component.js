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
var noop = function () {
};
var ɵ0 = noop;
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
        this.minlength = 2;
        this.loading = false;
        this.disabled = false;
        this.required = false;
        this.formulario = new FormGroup({
            value: new FormControl(null)
        });
        this.search = "search";
        this._value = '';
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    CplxAutocompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.idcontainer = Math.random().toString().split(".")[1];
        if (!this.filter) {
            fromEvent(this.inputSearch.nativeElement, 'keyup').pipe(map(function (event) {
                return event.target.value;
            }), filter(function (res) { return res.length >= _this.minlength; }), debounceTime(this.timeout), distinctUntilChanged()).subscribe(function (text) {
                _this.value = text;
                _this.visible = true;
                _this.textChange.emit(text);
                //this.loading = true;
            });
        }
        if (this.required) {
            this.set_validator(this.formulario, "value", this.required);
        }
        this.formulario.controls.value.updateValueAndValidity();
    };
    CplxAutocompleteComponent.prototype.set_validator = function (formgroup, control, required) {
        if (required)
            formgroup.controls[control].setValidators([Validators.required]);
        else
            formgroup.controls[control].clearValidators();
        formgroup.controls[control].updateValueAndValidity();
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
        this.formulario.controls.value.updateValueAndValidity();
    };
    CplxAutocompleteComponent.prototype.onClick = function (targetElement) {
        var _this = this;
        var clases = targetElement.className.split(" ");
        var clasecontrol = clases.filter(function (clase) { return clase == 'form-control-search'; });
        var clasecontainer = clases.filter(function (clase) { return clase == _this.idcontainer; });
        this.visible = (clasecontrol.length == 0 || clasecontainer.length == 0) ? false : true;
        this.formulario.controls.value.updateValueAndValidity();
    };
    Object.defineProperty(CplxAutocompleteComponent.prototype, "value", {
        get: function () { return this._value; },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.formulario.controls.value.setValue(v);
                this.formulario.controls.value.updateValueAndValidity();
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    CplxAutocompleteComponent.prototype.writeValue = function (value) {
        this._value = value;
        this.formulario.controls.value.setValue(value);
        this.formulario.controls.value.updateValueAndValidity();
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
    return CplxAutocompleteComponent;
}());
export { CplxAutocompleteComponent };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hdXRvY29tcGxldGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY3BseC1hdXRvY29tcGxldGUvIiwic291cmNlcyI6WyJsaWIvY3BseC1hdXRvY29tcGxldGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBaUIsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBNEIsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9LLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWpDLE9BQU8sRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pGLE9BQU8sRUFBVyxpQkFBaUIsRUFBd0IsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd0SDtJQUFBO0lBb0JBLENBQUM7SUFuQkEsOEJBQVMsR0FBVCxVQUFVLEtBQVksRUFBRSxVQUFrQixFQUFFLE9BQWdCLEVBQUUsTUFBaUI7UUFDOUUsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBRTFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDbEQsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENB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QUU7OytEQUFrQjtJQUVrQjtRQUEzQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO2tDQUFjLFVBQVU7a0VBQUM7SUF3RXBFO1FBREMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDOzs7OzREQU8vQztJQWxHVyx5QkFBeUI7UUFOckMsU0FBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixzbkRBQXVDO1lBRXZDLFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDOztTQUNoRCxDQUFDOztPQUNXLHlCQUF5QixDQTJIckM7SUFBRCxnQ0FBQztDQUFBLEFBM0hELElBMkhDO1NBM0hZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSG9zdExpc3RlbmVyLCBQaXBlVHJhbnNmb3JtLCBQaXBlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzTnVsbE9yVW5kZWZpbmVkIH0gZnJvbSAndXRpbCc7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgbWFwLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBOZ01vZGVsLCBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBQaXBlKHsgbmFtZTogJ2ZpbHRlcicgfSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cdHRyYW5zZm9ybShpdGVtczogYW55W10sIHNlYXJjaFRleHQ6IHN0cmluZywgdmlzaWJsZTogYm9vbGVhbiwgcGFyYW1zPzogc3RyaW5nW10pOiBhbnkge1xuXHRcdGlmICghaXRlbXMpIHJldHVybiBbXTtcblx0XHRpZiAoIXNlYXJjaFRleHQgfHwgIXZpc2libGUpIHJldHVybiBpdGVtcztcblxuXHRcdGlmICghaXNOdWxsT3JVbmRlZmluZWQocGFyYW1zKSAmJiBwYXJhbXMubGVuZ3RoID4gMClcblx0XHRcdHJldHVybiBpdGVtcy5maWx0ZXIoKGRhdGEpID0+IG5ldyBSZWdFeHAoc2VhcmNoVGV4dCwgJ2dpJykudGVzdChkYXRhW1wic2VhcmNoXCJdKSk7XG5cdH1cblxuXHRtYXRjaFZhbHVlKGRhdGE6IGFueVtdLCB2YWx1ZTogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcCgoa2V5KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cCh2YWx1ZSwgJ2dpJykudGVzdChkYXRhW2tleV0pO1xuXHRcdH0pLnNvbWUocmVzdWx0ID0+IHJlc3VsdCk7XG5cdH1cblxuXHRtYXRjaFZhbHVlUGFyYW1zKGRhdGE6IGFueVtdLCB2YWx1ZTogc3RyaW5nLCBwYXJhbXM6IHN0cmluZ1tdKSB7XG5cdFx0cmV0dXJuIHBhcmFtcy5tYXAoKGtleSkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBSZWdFeHAodmFsdWUsICdnaScpLnRlc3QoZGF0YVtrZXldKTtcblx0XHR9KS5zb21lKHJlc3VsdCA9PiByZXN1bHQpO1xuXHR9XG59XG5cblxuY29uc3Qgbm9vcCA9ICgpID0+IHtcbn07XG5cbmV4cG9ydCBjb25zdCBDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuXHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0dXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ3BseEF1dG9jb21wbGV0ZUNvbXBvbmVudCksXG5cdG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjcGx4LWF1dG9jb21wbGV0ZScsXG5cdHRlbXBsYXRlVXJsOiAnLi9jcGx4LWF1dG9jb21wbGV0ZS5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vY3BseC1hdXRvY29tcGxldGUuY3NzJ10sXG5cdHByb3ZpZGVyczogW0NVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBDcGx4QXV0b2NvbXBsZXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHR2aXNpYmxlID0gZmFsc2U7XG5cdGlkY29udGFpbmVyOiBzdHJpbmc7XG5cblx0QElucHV0KCkgcGFyYW1zOiBzdHJpbmdbXTtcblx0QElucHV0KCkgZGF0YTogYW55W107XG5cdEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cdEBJbnB1dCgpIGZpbHRlcjogYm9vbGVhbiA9IGZhbHNlO1xuXHRAT3V0cHV0KCkgc2VsZWN0ZWRPYmplY3QgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4odHJ1ZSk7XG5cdEBPdXRwdXQoKSB0ZXh0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTdHJpbmc+KHRydWUpXG5cdEBJbnB1dCgpIHRpbWVvdXQgPSA1MDA7XG5cdEBJbnB1dCgpIG1pbmxlbmd0aCA9IDI7XG5cdEBJbnB1dCgpIGxvYWRpbmcgPSBmYWxzZTtcblx0QElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblx0QElucHV0KCkgcmVmbGVjdHBhcmFtOiBhbnk7XG5cdEBJbnB1dCgpIHJlZmxlY3R2YWx1ZTogYW55O1xuXHRASW5wdXQoKSByZXF1aXJlZCA9IGZhbHNlO1xuXG5cdEBWaWV3Q2hpbGQoJ2lucHV0U2VhcmNoJywgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXRTZWFyY2g6IEVsZW1lbnRSZWY7XG5cblx0Zm9ybXVsYXJpbyA9IG5ldyBGb3JtR3JvdXAoe1xuXHRcdHZhbHVlOiBuZXcgRm9ybUNvbnRyb2wobnVsbClcblx0fSk7XG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5pZGNvbnRhaW5lciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV07XG5cdFx0aWYgKCF0aGlzLmZpbHRlcikge1xuXHRcdFx0ZnJvbUV2ZW50KHRoaXMuaW5wdXRTZWFyY2gubmF0aXZlRWxlbWVudCwgJ2tleXVwJykucGlwZShcblx0XHRcdFx0bWFwKChldmVudDogYW55KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGV2ZW50LnRhcmdldC52YWx1ZTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdGZpbHRlcihyZXMgPT4gcmVzLmxlbmd0aCA+PSB0aGlzLm1pbmxlbmd0aCksXG5cdFx0XHRcdGRlYm91bmNlVGltZSh0aGlzLnRpbWVvdXQpLFxuXHRcdFx0XHRkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG5cdFx0XHQpLnN1YnNjcmliZSgodGV4dDogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMudmFsdWUgPSB0ZXh0O1xuXHRcdFx0XHR0aGlzLnZpc2libGUgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLnRleHRDaGFuZ2UuZW1pdCh0ZXh0KTtcblx0XHRcdFx0Ly90aGlzLmxvYWRpbmcgPSB0cnVlO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucmVxdWlyZWQpIHtcblx0XHRcdHRoaXMuc2V0X3ZhbGlkYXRvcih0aGlzLmZvcm11bGFyaW8sIFwidmFsdWVcIiwgdGhpcy5yZXF1aXJlZCk7XG5cdFx0fVxuXHRcdHRoaXMuZm9ybXVsYXJpby5jb250cm9scy52YWx1ZS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG5cdH1cblxuXHRzZXRfdmFsaWRhdG9yKGZvcm1ncm91cDogRm9ybUdyb3VwLCBjb250cm9sOiBzdHJpbmcsIHJlcXVpcmVkPzogYm9vbGVhbikge1xuXHRcdGlmIChyZXF1aXJlZCkgZm9ybWdyb3VwLmNvbnRyb2xzW2NvbnRyb2xdLnNldFZhbGlkYXRvcnMoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKTtcblx0XHRlbHNlIGZvcm1ncm91cC5jb250cm9sc1tjb250cm9sXS5jbGVhclZhbGlkYXRvcnMoKTtcblx0XHRmb3JtZ3JvdXAuY29udHJvbHNbY29udHJvbF0udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuXHR9XG5cblx0c2VsZWN0KG9iamVjdDogYW55KSB7XG5cdFx0dGhpcy5zZWxlY3RlZE9iamVjdC5lbWl0KG9iamVjdCk7XG5cdFx0dGhpcy53cml0ZVZhbHVlKG9iamVjdFt0aGlzLnNlYXJjaF0pO1xuXHRcdHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuXHR9XG5cblx0cHVibGljIHNlYXJjaCA9IFwic2VhcmNoXCI7XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXHRcdHRoaXMuY29tcGxldGFyKCk7XG5cdH1cblxuXHRjb21wbGV0YXIoKSB7XG5cdFx0aWYgKHRoaXMuZGF0YSkge1xuXHRcdFx0dGhpcy5kYXRhLmZvckVhY2goKGQpID0+IHtcblx0XHRcdFx0bGV0IGl0ZW1zID0gW107XG5cdFx0XHRcdHRoaXMucGFyYW1zLm1hcCgoa2V5KSA9PiB7XG5cdFx0XHRcdFx0aXRlbXMucHVzaChkW2tleV0pO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHRkW3RoaXMuc2VhcmNoXSA9IGl0ZW1zLmpvaW4oXCIgLSBcIik7XG5cdFx0XHR9KTtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRpZiAodGhpcy5kYXRhICYmIHRoaXMucmVmbGVjdHBhcmFtICYmIHRoaXMucmVmbGVjdHZhbHVlICYmIHRoaXMuZmlsdGVyKSB7XG5cdFx0XHRcdFx0bGV0IG9iamVjdCA9IHRoaXMuZGF0YS5maWx0ZXIoZCA9PiBkW3RoaXMucmVmbGVjdHBhcmFtXSA9PSB0aGlzLnJlZmxlY3R2YWx1ZSlbMF07XG5cdFx0XHRcdFx0aWYgKCFpc051bGxPclVuZGVmaW5lZChvYmplY3QpKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnZhbHVlID0gb2JqZWN0W3RoaXMuc2VhcmNoXTtcblx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRPYmplY3QuZW1pdChvYmplY3QpO1xuXHRcdFx0XHRcdFx0dGhpcy50ZXh0Q2hhbmdlLmVtaXQob2JqZWN0W3RoaXMucmVmbGVjdHBhcmFtXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LCAyMDApO1xuXHRcdH1cblx0XHR0aGlzLmZvcm11bGFyaW8uY29udHJvbHMudmFsdWUudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuXHR9XG5cblx0QEhvc3RMaXN0ZW5lcignd2luZG93OmNsaWNrJywgWyckZXZlbnQudGFyZ2V0J10pXG5cdG9uQ2xpY2sodGFyZ2V0RWxlbWVudDogYW55KSB7XG5cdFx0bGV0IGNsYXNlczogc3RyaW5nW10gPSB0YXJnZXRFbGVtZW50LmNsYXNzTmFtZS5zcGxpdChcIiBcIik7XG5cdFx0bGV0IGNsYXNlY29udHJvbDogYW55W10gPSBjbGFzZXMuZmlsdGVyKGNsYXNlID0+IGNsYXNlID09ICdmb3JtLWNvbnRyb2wtc2VhcmNoJyk7XG5cdFx0bGV0IGNsYXNlY29udGFpbmVyOiBhbnlbXSA9IGNsYXNlcy5maWx0ZXIoY2xhc2UgPT4gY2xhc2UgPT0gdGhpcy5pZGNvbnRhaW5lcik7XG5cdFx0dGhpcy52aXNpYmxlID0gKGNsYXNlY29udHJvbC5sZW5ndGggPT0gMCB8fCBjbGFzZWNvbnRhaW5lci5sZW5ndGggPT0gMCkgPyBmYWxzZSA6IHRydWU7XG5cdFx0dGhpcy5mb3JtdWxhcmlvLmNvbnRyb2xzLnZhbHVlLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKVxuXHR9XG5cblx0cHJpdmF0ZSBfdmFsdWU6IGFueSA9ICcnO1xuXHRnZXQgdmFsdWUoKTogYW55IHsgcmV0dXJuIHRoaXMuX3ZhbHVlOyB9O1xuXG5cdHNldCB2YWx1ZSh2OiBhbnkpIHtcblx0XHRpZiAodiAhPT0gdGhpcy5fdmFsdWUpIHtcblx0XHRcdHRoaXMuX3ZhbHVlID0gdjtcblx0XHRcdHRoaXMuZm9ybXVsYXJpby5jb250cm9scy52YWx1ZS5zZXRWYWx1ZSh2KTtcblx0XHRcdHRoaXMuZm9ybXVsYXJpby5jb250cm9scy52YWx1ZS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG5cdFx0XHR0aGlzLm9uQ2hhbmdlKHYpO1xuXHRcdH1cblx0fVxuXG5cdHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMuX3ZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5mb3JtdWxhcmlvLmNvbnRyb2xzLnZhbHVlLnNldFZhbHVlKHZhbHVlKTtcblx0XHR0aGlzLmZvcm11bGFyaW8uY29udHJvbHMudmFsdWUudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuXHRcdHRoaXMub25DaGFuZ2UodmFsdWUpO1xuXHR9XG5cblx0b25DaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XG5cdG9uVG91Y2hlZCA9ICgpID0+IHsgfTtcblx0cmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLm9uQ2hhbmdlID0gZm47IH1cblx0cmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxufVxuIl19