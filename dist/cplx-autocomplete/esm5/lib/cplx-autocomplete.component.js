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
        var clasecontrol = clases.filter(function (clase) { return clase == 'form-control-search'; });
        var clasecontainer = clases.filter(function (clase) { return clase == _this.idcontainer; });
        this.visible = (clasecontrol.length == 0 || clasecontainer.length == 0) ? false : true;
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
    return CplxAutocompleteComponent;
}());
export { CplxAutocompleteComponent };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hdXRvY29tcGxldGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY3BseC1hdXRvY29tcGxldGUvIiwic291cmNlcyI6WyJsaWIvY3BseC1hdXRvY29tcGxldGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyTSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS3pJO0lBbUJDLDJCQUNTLFNBQW9CLEVBQVMsUUFBbUIsRUFBUyxVQUFzQjtRQUEvRSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7SUFDcEYsQ0FBQztJQW5CTCw0Q0FBZ0IsR0FBaEIsVUFBaUIsZUFBZ0M7UUFDaEQsSUFBSSxlQUFlLENBQUMsU0FBUyxFQUFFO1lBQzlCLElBQU0sU0FBUyxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUMsRUFBcUIsQ0FBQyxDQUFDO1lBQ25FLElBQUksU0FBUyxJQUFJLFNBQVMsQ0FB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QWMsVUFBVTtrRUFBQztJQTBEcEU7UUFEQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUM7Ozs7NERBTS9DO0lBbkZXLHlCQUF5QjtRQU5yQyxTQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLGdnQ0FBdUM7WUFFdkMsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7O1NBQ2hELENBQUM7O09BQ1cseUJBQXlCLENBd0dyQztJQUFELGdDQUFDO0NBQUEsQUF4R0QsSUF3R0M7U0F4R1kseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBIb3N0TGlzdGVuZXIsIFBpcGVUcmFuc2Zvcm0sIFBpcGUsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgZm9yd2FyZFJlZiwgUmVuZGVyZXIyLCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzTnVsbE9yVW5kZWZpbmVkIH0gZnJvbSAndXRpbCc7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgbWFwLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEFic3RyYWN0Q29udHJvbCwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbZmllbGRyZXF1aXJlZF0nXG59KVxuZXhwb3J0IGNsYXNzIFJlcXVpcmVkRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRoYXNSZXF1aXJlZEZpZWxkKGFic3RyYWN0Q29udHJvbDogQWJzdHJhY3RDb250cm9sKSB7XG5cdFx0aWYgKGFic3RyYWN0Q29udHJvbC52YWxpZGF0b3IpIHtcblx0XHRcdGNvbnN0IHZhbGlkYXRvciA9IGFic3RyYWN0Q29udHJvbC52YWxpZGF0b3Ioe30gYXMgQWJzdHJhY3RDb250cm9sKTtcblx0XHRcdGlmICh2YWxpZGF0b3IgJiYgdmFsaWRhdG9yLnJlcXVpcmVkKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRjb25zdCByZXF1aXJlZCA9IHRoaXMuaGFzUmVxdWlyZWRGaWVsZCh0aGlzLm5nQ29udHJvbC5jb250cm9sKTtcblx0XHRpZiAocmVxdWlyZWQpIHtcblx0XHRcdHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAncmVxdWlyZWQnLCAnJyk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBuZ0NvbnRyb2w6IE5nQ29udHJvbCwgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG5cdCkgeyB9XG5cbn1cblxuQFBpcGUoeyBuYW1lOiAnZmlsdGVyJyB9KVxuZXhwb3J0IGNsYXNzIEZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblx0dHJhbnNmb3JtKGl0ZW1zOiBhbnlbXSwgc2VhcmNoVGV4dDogc3RyaW5nLCB2aXNpYmxlOiBib29sZWFuLCBwYXJhbXM/OiBzdHJpbmdbXSk6IGFueSB7XG5cdFx0aWYgKCFpdGVtcykgcmV0dXJuIFtdO1xuXHRcdGlmICghc2VhcmNoVGV4dCB8fCAhdmlzaWJsZSkgcmV0dXJuIGl0ZW1zO1xuXG5cdFx0aWYgKCFpc051bGxPclVuZGVmaW5lZChwYXJhbXMpICYmIHBhcmFtcy5sZW5ndGggPiAwKVxuXHRcdFx0cmV0dXJuIGl0ZW1zLmZpbHRlcigoZGF0YSkgPT4gbmV3IFJlZ0V4cChzZWFyY2hUZXh0LCAnZ2knKS50ZXN0KGRhdGFbXCJzZWFyY2hcIl0pKTtcblx0fVxuXG5cdG1hdGNoVmFsdWUoZGF0YTogYW55W10sIHZhbHVlOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXMoZGF0YSkubWFwKChrZXkpID0+IHtcblx0XHRcdHJldHVybiBuZXcgUmVnRXhwKHZhbHVlLCAnZ2knKS50ZXN0KGRhdGFba2V5XSk7XG5cdFx0fSkuc29tZShyZXN1bHQgPT4gcmVzdWx0KTtcblx0fVxuXG5cdG1hdGNoVmFsdWVQYXJhbXMoZGF0YTogYW55W10sIHZhbHVlOiBzdHJpbmcsIHBhcmFtczogc3RyaW5nW10pIHtcblx0XHRyZXR1cm4gcGFyYW1zLm1hcCgoa2V5KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cCh2YWx1ZSwgJ2dpJykudGVzdChkYXRhW2tleV0pO1xuXHRcdH0pLnNvbWUocmVzdWx0ID0+IHJlc3VsdCk7XG5cdH1cbn1cblxuXG5jb25zdCBub29wID0gKCkgPT4ge1xufTtcblxuZXhwb3J0IGNvbnN0IENVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG5cdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHR1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDcGx4QXV0b2NvbXBsZXRlQ29tcG9uZW50KSxcblx0bXVsdGk6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NwbHgtYXV0b2NvbXBsZXRlJyxcblx0dGVtcGxhdGVVcmw6ICcuL2NwbHgtYXV0b2NvbXBsZXRlLmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9jcGx4LWF1dG9jb21wbGV0ZS5jc3MnXSxcblx0cHJvdmlkZXJzOiBbQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXG59KVxuZXhwb3J0IGNsYXNzIENwbHhBdXRvY29tcGxldGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXHRjb25zdHJ1Y3RvcigpIHsgfVxuXG5cdHZpc2libGUgPSBmYWxzZTtcblx0aWRjb250YWluZXI6IHN0cmluZztcblxuXHRASW5wdXQoKSBwYXJhbXM6IHN0cmluZ1tdO1xuXHRASW5wdXQoKSBkYXRhOiBhbnlbXTtcblx0QElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcblx0QElucHV0KCkgZmlsdGVyOiBib29sZWFuID0gZmFsc2U7XG5cdEBPdXRwdXQoKSBzZWxlY3RlZE9iamVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55Pih0cnVlKTtcblx0QE91dHB1dCgpIHRleHRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFN0cmluZz4odHJ1ZSlcblx0QElucHV0KCkgdGltZW91dCA9IDUwMDtcblx0QElucHV0KCkgbWlubGVuZ3RoID0gMjtcblx0QElucHV0KCkgbG9hZGluZyA9IGZhbHNlO1xuXHRASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXHRASW5wdXQoKSByZWZsZWN0cGFyYW06IGFueTtcblx0QElucHV0KCkgcmVmbGVjdHZhbHVlOiBhbnk7XG5cdEBJbnB1dCgpIHJlcXVpcmVkID0gZmFsc2U7XG5cblx0QFZpZXdDaGlsZCgnaW5wdXRTZWFyY2gnLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dFNlYXJjaDogRWxlbWVudFJlZjtcblxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuaWRjb250YWluZXIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdO1xuXHRcdGlmICghdGhpcy5maWx0ZXIpIHtcblx0XHRcdGZyb21FdmVudCh0aGlzLmlucHV0U2VhcmNoLm5hdGl2ZUVsZW1lbnQsICdrZXl1cCcpLnBpcGUoXG5cdFx0XHRcdG1hcCgoZXZlbnQ6IGFueSkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBldmVudC50YXJnZXQudmFsdWU7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRmaWx0ZXIocmVzID0+IHJlcy5sZW5ndGggPj0gdGhpcy5taW5sZW5ndGgpLFxuXHRcdFx0XHRkZWJvdW5jZVRpbWUodGhpcy50aW1lb3V0KSxcblx0XHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0KS5zdWJzY3JpYmUoKHRleHQ6IHN0cmluZykgPT4ge1xuXHRcdFx0XHR0aGlzLnZhbHVlID0gdGV4dDtcblx0XHRcdFx0dGhpcy52aXNpYmxlID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy50ZXh0Q2hhbmdlLmVtaXQodGV4dCk7XG5cdFx0XHRcdC8vdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHR9XG5cblx0c2VsZWN0KG9iamVjdDogYW55KSB7XG5cdFx0dGhpcy5zZWxlY3RlZE9iamVjdC5lbWl0KG9iamVjdCk7XG5cdFx0dGhpcy53cml0ZVZhbHVlKG9iamVjdFt0aGlzLnNlYXJjaF0pO1xuXHRcdHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuXHR9XG5cblx0cHVibGljIHNlYXJjaCA9IFwic2VhcmNoXCI7XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXHRcdHRoaXMuY29tcGxldGFyKCk7XG5cdH1cblxuXHRjb21wbGV0YXIoKSB7XG5cdFx0aWYgKHRoaXMuZGF0YSkge1xuXHRcdFx0dGhpcy5kYXRhLmZvckVhY2goKGQpID0+IHtcblx0XHRcdFx0bGV0IGl0ZW1zID0gW107XG5cdFx0XHRcdHRoaXMucGFyYW1zLm1hcCgoa2V5KSA9PiB7XG5cdFx0XHRcdFx0aXRlbXMucHVzaChkW2tleV0pO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHRkW3RoaXMuc2VhcmNoXSA9IGl0ZW1zLmpvaW4oXCIgLSBcIik7XG5cdFx0XHR9KTtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRpZiAodGhpcy5kYXRhICYmIHRoaXMucmVmbGVjdHBhcmFtICYmIHRoaXMucmVmbGVjdHZhbHVlICYmIHRoaXMuZmlsdGVyKSB7XG5cdFx0XHRcdFx0bGV0IG9iamVjdCA9IHRoaXMuZGF0YS5maWx0ZXIoZCA9PiBkW3RoaXMucmVmbGVjdHBhcmFtXSA9PSB0aGlzLnJlZmxlY3R2YWx1ZSlbMF07XG5cdFx0XHRcdFx0aWYgKCFpc051bGxPclVuZGVmaW5lZChvYmplY3QpKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnZhbHVlID0gb2JqZWN0W3RoaXMuc2VhcmNoXTtcblx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRPYmplY3QuZW1pdChvYmplY3QpO1xuXHRcdFx0XHRcdFx0dGhpcy50ZXh0Q2hhbmdlLmVtaXQob2JqZWN0W3RoaXMucmVmbGVjdHBhcmFtXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LCAyMDApO1xuXHRcdH1cblx0fVxuXG5cdEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpjbGljaycsIFsnJGV2ZW50LnRhcmdldCddKVxuXHRvbkNsaWNrKHRhcmdldEVsZW1lbnQ6IGFueSkge1xuXHRcdGxldCBjbGFzZXM6IHN0cmluZ1tdID0gdGFyZ2V0RWxlbWVudC5jbGFzc05hbWUuc3BsaXQoXCIgXCIpO1xuXHRcdGxldCBjbGFzZWNvbnRyb2w6IGFueVtdID0gY2xhc2VzLmZpbHRlcihjbGFzZSA9PiBjbGFzZSA9PSAnZm9ybS1jb250cm9sLXNlYXJjaCcpO1xuXHRcdGxldCBjbGFzZWNvbnRhaW5lcjogYW55W10gPSBjbGFzZXMuZmlsdGVyKGNsYXNlID0+IGNsYXNlID09IHRoaXMuaWRjb250YWluZXIpO1xuXHRcdHRoaXMudmlzaWJsZSA9IChjbGFzZWNvbnRyb2wubGVuZ3RoID09IDAgfHwgY2xhc2Vjb250YWluZXIubGVuZ3RoID09IDApID8gZmFsc2UgOiB0cnVlO1xuXHR9XG5cblx0cHJpdmF0ZSBfdmFsdWU6IGFueSA9ICcnO1xuXHRnZXQgdmFsdWUoKTogYW55IHsgcmV0dXJuIHRoaXMuX3ZhbHVlOyB9O1xuXG5cdHNldCB2YWx1ZSh2OiBhbnkpIHtcblx0XHRpZiAodiAhPT0gdGhpcy5fdmFsdWUpIHtcblx0XHRcdHRoaXMuX3ZhbHVlID0gdjtcblx0XHRcdHRoaXMub25DaGFuZ2Uodik7XG5cdFx0fVxuXHR9XG5cblx0d3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5fdmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcblx0fVxuXG5cdG9uQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xuXHRvblRvdWNoZWQgPSAoKSA9PiB7IH07XG5cdHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5vbkNoYW5nZSA9IGZuOyB9XG5cdHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMub25Ub3VjaGVkID0gZm47IH1cbn1cbiJdfQ==