import { OnInit, PipeTransform, EventEmitter, ElementRef, OnChanges, SimpleChanges, Renderer2 } from '@angular/core';
import { ControlValueAccessor, AbstractControl, NgControl } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class RequiredDirective implements OnInit {
    private ngControl;
    renderer: Renderer2;
    elementRef: ElementRef;
    hasRequiredField(abstractControl: AbstractControl): boolean;
    ngOnInit(): void;
    constructor(ngControl: NgControl, renderer: Renderer2, elementRef: ElementRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RequiredDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<RequiredDirective, "[fieldrequired]", never, {}, {}, never>;
}
export declare class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string, visible: boolean, params?: string[]): any;
    matchValue(data: any[], value: string): boolean;
    matchValueParams(data: any[], value: string, params: string[]): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FilterPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<FilterPipe, "filter">;
}
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class CplxAutocompleteComponent implements OnInit, OnChanges, ControlValueAccessor {
    constructor();
    visible: boolean;
    idcontainer: string;
    params: string[];
    data: any[];
    placeholder: string;
    filter: boolean;
    selectedObject: EventEmitter<any>;
    textChange: EventEmitter<String>;
    timeout: number;
    minlength: number;
    loading: boolean;
    disabled: boolean;
    reflectparam: any;
    reflectvalue: any;
    required: boolean;
    inputSearch: ElementRef;
    ngOnInit(): void;
    select(object: any): void;
    search: string;
    ngOnChanges(changes: SimpleChanges): void;
    completar(): void;
    onClick(targetElement: any): void;
    private _value;
    get value(): any;
    set value(v: any);
    writeValue(value: any): void;
    onChange: (_: any) => void;
    onTouched: () => void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CplxAutocompleteComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CplxAutocompleteComponent, "cplx-autocomplete", never, { "filter": "filter"; "timeout": "timeout"; "minlength": "minlength"; "loading": "loading"; "disabled": "disabled"; "required": "required"; "params": "params"; "data": "data"; "placeholder": "placeholder"; "reflectparam": "reflectparam"; "reflectvalue": "reflectvalue"; }, { "selectedObject": "selectedObject"; "textChange": "textChange"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hdXRvY29tcGxldGUuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNwbHgtYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCwgUGlwZVRyYW5zZm9ybSwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWJzdHJhY3RDb250cm9sLCBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJlcXVpcmVkRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByaXZhdGUgbmdDb250cm9sO1xyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMjtcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XHJcbiAgICBoYXNSZXF1aXJlZEZpZWxkKGFic3RyYWN0Q29udHJvbDogQWJzdHJhY3RDb250cm9sKTogYm9vbGVhbjtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBjb25zdHJ1Y3RvcihuZ0NvbnRyb2w6IE5nQ29udHJvbCwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgZWxlbWVudFJlZjogRWxlbWVudFJlZik7XHJcbn1cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKGl0ZW1zOiBhbnlbXSwgc2VhcmNoVGV4dDogc3RyaW5nLCB2aXNpYmxlOiBib29sZWFuLCBwYXJhbXM/OiBzdHJpbmdbXSk6IGFueTtcclxuICAgIG1hdGNoVmFsdWUoZGF0YTogYW55W10sIHZhbHVlOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgbWF0Y2hWYWx1ZVBhcmFtcyhkYXRhOiBhbnlbXSwgdmFsdWU6IHN0cmluZywgcGFyYW1zOiBzdHJpbmdbXSk6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueTtcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ3BseEF1dG9jb21wbGV0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpO1xyXG4gICAgdmlzaWJsZTogYm9vbGVhbjtcclxuICAgIGlkY29udGFpbmVyOiBzdHJpbmc7XHJcbiAgICBwYXJhbXM6IHN0cmluZ1tdO1xyXG4gICAgZGF0YTogYW55W107XHJcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gICAgZmlsdGVyOiBib29sZWFuO1xyXG4gICAgc2VsZWN0ZWRPYmplY3Q6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG4gICAgdGV4dENoYW5nZTogRXZlbnRFbWl0dGVyPFN0cmluZz47XHJcbiAgICB0aW1lb3V0OiBudW1iZXI7XHJcbiAgICBtaW5sZW5ndGg6IG51bWJlcjtcclxuICAgIGxvYWRpbmc6IGJvb2xlYW47XHJcbiAgICBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIHJlZmxlY3RwYXJhbTogYW55O1xyXG4gICAgcmVmbGVjdHZhbHVlOiBhbnk7XHJcbiAgICByZXF1aXJlZDogYm9vbGVhbjtcclxuICAgIGlucHV0U2VhcmNoOiBFbGVtZW50UmVmO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIHNlbGVjdChvYmplY3Q6IGFueSk6IHZvaWQ7XHJcbiAgICBzZWFyY2g6IHN0cmluZztcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgY29tcGxldGFyKCk6IHZvaWQ7XHJcbiAgICBvbkNsaWNrKHRhcmdldEVsZW1lbnQ6IGFueSk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIF92YWx1ZTtcclxuICAgIGdldCB2YWx1ZSgpOiBhbnk7XHJcbiAgICBzZXQgdmFsdWUodjogYW55KTtcclxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQ7XHJcbiAgICBvbkNoYW5nZTogKF86IGFueSkgPT4gdm9pZDtcclxuICAgIG9uVG91Y2hlZDogKCkgPT4gdm9pZDtcclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkO1xyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkO1xyXG59XHJcbiJdfQ==