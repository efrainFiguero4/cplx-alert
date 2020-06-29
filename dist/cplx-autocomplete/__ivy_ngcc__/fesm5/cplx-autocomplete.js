import { ɵɵdefineInjectable, Injectable, Renderer2, ElementRef, Directive, Pipe, forwardRef, EventEmitter, Input, Output, ViewChild, HostListener, Component, NgModule } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { NgControl, NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/forms';
import * as ɵngcc2 from '@angular/common';

var _c0 = ["inputSearch"];
function CplxAutocompleteComponent_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 5);
    ɵngcc0.ɵɵtext(2, "Buscando ...");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} }
function CplxAutocompleteComponent_div_3_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵlistener("click", function CplxAutocompleteComponent_div_3_ng_template_2_div_0_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r8); var li_r6 = ctx.$implicit; var ctx_r7 = ɵngcc0.ɵɵnextContext(3); return ctx_r7.select(li_r6); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var li_r6 = ctx.$implicit;
    var ctx_r5 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", li_r6[ctx_r5.search], " ");
} }
function CplxAutocompleteComponent_div_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, CplxAutocompleteComponent_div_3_ng_template_2_div_0_Template, 2, 1, "div", 6);
    ɵngcc0.ɵɵpipe(1, "filter");
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    var _r0 = ɵngcc0.ɵɵreference(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r4.filter ? ɵngcc0.ɵɵpipeBind4(1, 1, ctx_r4.data, _r0.value, ctx_r4.visible, ctx_r4.params) : ctx_r4.data);
} }
function CplxAutocompleteComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, CplxAutocompleteComponent_div_3_ng_container_1_Template, 3, 0, "ng-container", 3);
    ɵngcc0.ɵɵtemplate(2, CplxAutocompleteComponent_div_3_ng_template_2_Template, 2, 6, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var _r3 = ɵngcc0.ɵɵreference(3);
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("menu transition ", ctx_r1.visible ? "visible" : "hidden", "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.loading && !ctx_r1.filter)("ngIfElse", _r3);
} }
var _c1 = function (a0) { return { "disabled": a0 }; };
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
    CplxAutocompleteService = __decorate([ __metadata("design:paramtypes", [])
    ], CplxAutocompleteService);
CplxAutocompleteService.ɵfac = function CplxAutocompleteService_Factory(t) { return new (t || CplxAutocompleteService)(); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CplxAutocompleteService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
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
    RequiredDirective = __decorate$1([ __metadata$1("design:paramtypes", [NgControl, Renderer2, ElementRef])
    ], RequiredDirective);
RequiredDirective.ɵfac = function RequiredDirective_Factory(t) { return new (t || RequiredDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NgControl), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
RequiredDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: RequiredDirective, selectors: [["", "fieldrequired", ""]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RequiredDirective, [{
        type: Directive,
        args: [{
                selector: '[fieldrequired]'
            }]
    }], function () { return [{ type: ɵngcc1.NgControl }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }]; }, null); })();
    return RequiredDirective;
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
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "filter", type: FilterPipe, pure: true });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FilterPipe, [{
        type: Pipe,
        args: [{ name: 'filter' }]
    }], function () { return []; }, null); })();
    return FilterPipe;
}());
var noop = function () {
};
var ɵ0 = noop;
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
    ], CplxAutocompleteComponent.prototype, "disabled", void 0);
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
        __metadata$1("design:type", Object)
    ], CplxAutocompleteComponent.prototype, "required", void 0);
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
    CplxAutocompleteComponent = __decorate$1([ __metadata$1("design:paramtypes", [])
    ], CplxAutocompleteComponent);
CplxAutocompleteComponent.ɵfac = function CplxAutocompleteComponent_Factory(t) { return new (t || CplxAutocompleteComponent)(); };
CplxAutocompleteComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CplxAutocompleteComponent, selectors: [["cplx-autocomplete"]], viewQuery: function CplxAutocompleteComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputSearch = _t.first);
    } }, hostBindings: function CplxAutocompleteComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function CplxAutocompleteComponent_click_HostBindingHandler($event) { return ctx.onClick($event.target); }, false, ɵngcc0.ɵɵresolveWindow);
    } }, inputs: { filter: "filter", timeout: "timeout", minlength: "minlength", loading: "loading", disabled: "disabled", required: "required", params: "params", data: "data", placeholder: "placeholder", reflectparam: "reflectparam", reflectvalue: "reflectvalue" }, outputs: { selectedObject: "selectedObject", textChange: "textChange" }, features: [ɵngcc0.ɵɵProvidersFeature([CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 4, vars: 16, consts: [["autocomplete", "off", 3, "ngModel", "placeholder", "ngClass", "required", "change", "ngModelChange"], ["inputSearch", ""], [3, "class", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["templateName", ""], [1, "item"], ["class", "item", 3, "click", 4, "ngFor", "ngForOf"], [1, "item", 3, "click"]], template: function CplxAutocompleteComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "input", 0, 1);
        ɵngcc0.ɵɵlistener("change", function CplxAutocompleteComponent_Template_input_change_1_listener() { return ctx.selectedObject.emit(null); })("ngModelChange", function CplxAutocompleteComponent_Template_input_ngModelChange_1_listener($event) { return ctx.value = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, CplxAutocompleteComponent_div_3_Template, 4, 5, "div", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("search selection dropdown ", ctx.visible ? "active" : "", " box-search");
        ɵngcc0.ɵɵstyleProp("cursor", ctx.disabled ? "not-allowed" : "default");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("form-control form-control-sm form-control-search search ", ctx.idcontainer, "");
        ɵngcc0.ɵɵproperty("ngModel", ctx.value)("placeholder", ctx.placeholder)("ngClass", ɵngcc0.ɵɵpureFunction1(14, _c1, ctx.disabled))("required", ctx.required)("ngClass", !ctx.required ? ctx.value == "" ? "novalido" : "valido" : "");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.disabled);
    } }, directives: [ɵngcc1.DefaultValueAccessor, ɵngcc1.NgControlStatus, ɵngcc1.NgModel, ɵngcc2.NgClass, ɵngcc1.RequiredValidator, ɵngcc2.NgIf, ɵngcc2.NgForOf], pipes: [FilterPipe], styles: [".disabled[_ngcontent-%COMP%]{pointer-events:none!important;cursor:not-allowed!important;background-color:#e9ecef!important;opacity:1!important}.search.dropdown[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{overflow-x:hidden;overflow-y:auto;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-overflow-scrolling:touch;max-height:14rem}.selection.dropdown[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{overflow-x:hidden;overflow-y:auto;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-overflow-scrolling:touch;border-top-width:0!important;width:auto;outline:0;margin:0 -1px;min-width:calc(100% + 2px);width:calc(100% + 2px);border-radius:0 0 .28571429rem .28571429rem;box-shadow:0 2px 3px 0 rgba(34,36,38,.15);transition:opacity .1s}.dropdown[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] > .item[_ngcontent-%COMP%]:hover{background:rgba(0,0,0,.05);color:rgba(0,0,0,.95);z-index:13}.selection.dropdown[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] > .item[_ngcontent-%COMP%]{border-top:1px solid #fafafa;padding:.58571429rem 1.14285714rem!important;white-space:normal;word-wrap:normal}.dropdown[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] > .item[_ngcontent-%COMP%]{position:relative;cursor:pointer;display:block;border:none;height:auto;text-align:left;border-top:none;line-height:1em;color:rgba(0,0,0,.87);padding:.78571429rem 1.14285714rem!important;font-size:1rem;text-transform:none;font-weight:400;box-shadow:none;-webkit-touch-callout:none}.active.selection.dropdown[_ngcontent-%COMP%]{border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}.selection.active.dropdown[_ngcontent-%COMP%]{border-color:#96c8da;box-shadow:0 2px 3px 0 rgba(34,36,38,.15)}.search.dropdown[_ngcontent-%COMP%] > input.search[_ngcontent-%COMP%]{box-shadow:none;cursor:text;top:0;left:1px;width:100%;outline:0;-webkit-tap-highlight-color:rgba(255,255,255,0)}.menu[_ngcontent-%COMP%]{border-color:#96c8da;box-shadow:0 2px 3px 0 rgba(34,36,38,.15)}.dropdown[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{left:0;cursor:auto;position:absolute;display:none;outline:0;top:100%;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;margin:0;padding:0;background:#fff;font-size:1em;text-shadow:none;text-align:left;box-shadow:0 2px 3px 0 rgba(34,36,38,.15);border:1px solid rgba(34,36,38,.15);border-radius:.28571429rem;transition:opacity .1s;z-index:11;will-change:transform,opacity}.visible.transition[_ngcontent-%COMP%]{display:block!important;visibility:visible!important;transition:.7s}.transition[_ngcontent-%COMP%]{-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-fill-mode:both;animation-fill-mode:both;transition:.7s}.form-control-search[_ngcontent-%COMP%]{height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.menu[_ngcontent-%COMP%]::-webkit-scrollbar{-webkit-appearance:none;width:10px;height:10px}.menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{cursor:pointer;border-radius:5px;background:rgba(0,0,0,.25);-webkit-transition:color .2s;transition:color .2s}.menu[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:rgba(0,0,0,.1);border-radius:0}[_ngcontent-%COMP%]::-moz-selection{background-color:#cce2ff;color:rgba(0,0,0,.87)}[_ngcontent-%COMP%]::selection{background-color:#cce2ff;color:rgba(0,0,0,.87)}.box-search[_ngcontent-%COMP%]{border-radius:.28571429rem}.form-control.ng-invalid.ng-touched[_ngcontent-%COMP%]:required{border-color:#dc3545}.form-control.ng-invalid.ng-touched[_ngcontent-%COMP%]:required:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-control.ng-valid[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]:valid{border-color:#28a745;padding-right:0;background-image:none!important;background-repeat:no-repeat;background-position:0;background-size:0}.form-control.valido[_ngcontent-%COMP%]{border-color:#28a745!important;padding-right:0;background-image:none!important;background-repeat:no-repeat;background-position:0;background-size:0}.form-control.novalido[_ngcontent-%COMP%]{border:1px solid #ced4da!important;padding-right:0;background-image:none!important;background-repeat:no-repeat;background-position:0;background-size:0}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CplxAutocompleteComponent, [{
        type: Component,
        args: [{
                selector: 'cplx-autocomplete',
                template: "<div class=\"search selection dropdown {{visible ? 'active': ''}} box-search\"\r\n\t[style.cursor]=\"disabled ? 'not-allowed' : 'default'\">\r\n\t<input #inputSearch class=\"form-control form-control-sm form-control-search search {{idcontainer}}\"\r\n\t\t(change)=\"selectedObject.emit(null)\" autocomplete=\"off\" [(ngModel)]=\"value\" [placeholder]=\"placeholder\"\r\n\t\t[ngClass]=\"{'disabled': disabled}\" [required]=\"required\"\r\n\t\t[ngClass]=\"!required ? ( value == '' ? 'novalido': 'valido'): ''\">\r\n\t<div class=\"menu transition {{visible ? 'visible': 'hidden'}}\" *ngIf=\"!disabled\">\r\n\t\t<ng-container *ngIf=\"loading && !filter; else templateName\">\r\n\t\t\t<div class=\"item\">Buscando ...</div>\r\n\t\t</ng-container>\r\n\t\t<ng-template #templateName>\r\n\t\t\t<div *ngFor=\"let li of filter ? (data | filter : inputSearch.value : visible : params) : data\" class=\"item\"\r\n\t\t\t\t(click)=\"select(li)\"> {{li[search]}}\r\n\t\t\t</div>\r\n\t\t</ng-template>\r\n\t</div>\r\n</div>\r\n",
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                styles: [".disabled{pointer-events:none!important;cursor:not-allowed!important;background-color:#e9ecef!important;opacity:1!important}.search.dropdown .menu{overflow-x:hidden;overflow-y:auto;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-overflow-scrolling:touch;max-height:14rem}.selection.dropdown .menu{overflow-x:hidden;overflow-y:auto;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-overflow-scrolling:touch;border-top-width:0!important;width:auto;outline:0;margin:0 -1px;min-width:calc(100% + 2px);width:calc(100% + 2px);border-radius:0 0 .28571429rem .28571429rem;box-shadow:0 2px 3px 0 rgba(34,36,38,.15);transition:opacity .1s}.dropdown .menu>.item:hover{background:rgba(0,0,0,.05);color:rgba(0,0,0,.95);z-index:13}.selection.dropdown .menu>.item{border-top:1px solid #fafafa;padding:.58571429rem 1.14285714rem!important;white-space:normal;word-wrap:normal}.dropdown .menu>.item{position:relative;cursor:pointer;display:block;border:none;height:auto;text-align:left;border-top:none;line-height:1em;color:rgba(0,0,0,.87);padding:.78571429rem 1.14285714rem!important;font-size:1rem;text-transform:none;font-weight:400;box-shadow:none;-webkit-touch-callout:none}.active.selection.dropdown{border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}.selection.active.dropdown{border-color:#96c8da;box-shadow:0 2px 3px 0 rgba(34,36,38,.15)}.search.dropdown>input.search{box-shadow:none;cursor:text;top:0;left:1px;width:100%;outline:0;-webkit-tap-highlight-color:rgba(255,255,255,0)}.menu{border-color:#96c8da;box-shadow:0 2px 3px 0 rgba(34,36,38,.15)}.dropdown .menu{left:0;cursor:auto;position:absolute;display:none;outline:0;top:100%;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;margin:0;padding:0;background:#fff;font-size:1em;text-shadow:none;text-align:left;box-shadow:0 2px 3px 0 rgba(34,36,38,.15);border:1px solid rgba(34,36,38,.15);border-radius:.28571429rem;transition:opacity .1s;z-index:11;will-change:transform,opacity}.visible.transition{display:block!important;visibility:visible!important;transition:.7s}.transition{-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-fill-mode:both;animation-fill-mode:both;transition:.7s}.form-control-search{height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.menu::-webkit-scrollbar{-webkit-appearance:none;width:10px;height:10px}.menu::-webkit-scrollbar-thumb{cursor:pointer;border-radius:5px;background:rgba(0,0,0,.25);-webkit-transition:color .2s;transition:color .2s}.menu::-webkit-scrollbar-track{background:rgba(0,0,0,.1);border-radius:0}::-moz-selection{background-color:#cce2ff;color:rgba(0,0,0,.87)}::selection{background-color:#cce2ff;color:rgba(0,0,0,.87)}.box-search{border-radius:.28571429rem}.form-control.ng-invalid.ng-touched:required{border-color:#dc3545}.form-control.ng-invalid.ng-touched:required:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-control.ng-valid,.form-control:valid{border-color:#28a745;padding-right:0;background-image:none!important;background-repeat:no-repeat;background-position:0;background-size:0}.form-control.valido{border-color:#28a745!important;padding-right:0;background-image:none!important;background-repeat:no-repeat;background-position:0;background-size:0}.form-control.novalido{border:1px solid #ced4da!important;padding-right:0;background-image:none!important;background-repeat:no-repeat;background-position:0;background-size:0}"]
            }]
    }], function () { return []; }, { filter: [{
            type: Input
        }], selectedObject: [{
            type: Output
        }], textChange: [{
            type: Output
        }], timeout: [{
            type: Input
        }], minlength: [{
            type: Input
        }], loading: [{
            type: Input
        }], disabled: [{
            type: Input
        }], required: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['window:click', ['$event.target']]
        }], params: [{
            type: Input
        }], data: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], reflectparam: [{
            type: Input
        }], reflectvalue: [{
            type: Input
        }], inputSearch: [{
            type: ViewChild,
            args: ['inputSearch', { static: true }]
        }] }); })();
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
CplxAutocompleteModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CplxAutocompleteModule });
CplxAutocompleteModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CplxAutocompleteModule_Factory(t) { return new (t || CplxAutocompleteModule)(); }, imports: [[CommonModule, FormsModule, ReactiveFormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CplxAutocompleteModule, { declarations: function () { return [CplxAutocompleteComponent,
        FilterPipe,
        RequiredDirective]; }, imports: function () { return [CommonModule, FormsModule, ReactiveFormsModule]; }, exports: function () { return [CplxAutocompleteComponent,
        FilterPipe,
        RequiredDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CplxAutocompleteModule, [{
        type: NgModule,
        args: [{
                declarations: [CplxAutocompleteComponent, FilterPipe, RequiredDirective],
                imports: [CommonModule, FormsModule, ReactiveFormsModule],
                exports: [CplxAutocompleteComponent, FilterPipe, RequiredDirective]
            }]
    }], function () { return []; }, null); })();
    return CplxAutocompleteModule;
}());

/*
 * Public API Surface of cplx-autocomplete
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, CplxAutocompleteComponent, CplxAutocompleteModule, CplxAutocompleteService, FilterPipe, RequiredDirective, ɵ0 };

//# sourceMappingURL=cplx-autocomplete.js.map