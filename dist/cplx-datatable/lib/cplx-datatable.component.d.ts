import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Paginacion, CplxDatatableService, ConfigDataTable } from './cplx-datatable.service';
import * as ɵngcc0 from '@angular/core';
export declare class CplxDatatableComponent implements OnInit, OnChanges {
    private _cplxdatatableservice;
    itemlist: any[];
    header: string[];
    content: string[];
    loading: boolean;
    search: string;
    config: ConfigDataTable | null;
    pages: number[];
    constructor(_cplxdatatableservice: CplxDatatableService);
    paginacion: Paginacion;
    searchparam: any | {};
    itemlistpaginates: {};
    itemlistcurrentpage: any[];
    ls_paginas: number[];
    defaultpages: number[];
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    search_data(value: string): any;
    go_page(totalitem: number, pagina: number, porpagina: number): void;
    go_porpage(porpagina: number): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CplxDatatableComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CplxDatatableComponent, "cplx-datatable", never, { "search": "search"; "loading": "loading"; "config": "config"; "itemlist": "itemlist"; "header": "header"; "content": "content"; "pages": "pages"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1kYXRhdGFibGUuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNwbHgtZGF0YXRhYmxlLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhZ2luYWNpb24sIENwbHhEYXRhdGFibGVTZXJ2aWNlLCBDb25maWdEYXRhVGFibGUgfSBmcm9tICcuL2NwbHgtZGF0YXRhYmxlLnNlcnZpY2UnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDcGx4RGF0YXRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gICAgcHJpdmF0ZSBfY3BseGRhdGF0YWJsZXNlcnZpY2U7XHJcbiAgICBpdGVtbGlzdDogYW55W107XHJcbiAgICBoZWFkZXI6IHN0cmluZ1tdO1xyXG4gICAgY29udGVudDogc3RyaW5nW107XHJcbiAgICBsb2FkaW5nOiBib29sZWFuO1xyXG4gICAgc2VhcmNoOiBzdHJpbmc7XHJcbiAgICBjb25maWc6IENvbmZpZ0RhdGFUYWJsZSB8IG51bGw7XHJcbiAgICBwYWdlczogbnVtYmVyW107XHJcbiAgICBjb25zdHJ1Y3RvcihfY3BseGRhdGF0YWJsZXNlcnZpY2U6IENwbHhEYXRhdGFibGVTZXJ2aWNlKTtcclxuICAgIHBhZ2luYWNpb246IFBhZ2luYWNpb247XHJcbiAgICBzZWFyY2hwYXJhbTogYW55IHwge307XHJcbiAgICBpdGVtbGlzdHBhZ2luYXRlczoge307XHJcbiAgICBpdGVtbGlzdGN1cnJlbnRwYWdlOiBhbnlbXTtcclxuICAgIGxzX3BhZ2luYXM6IG51bWJlcltdO1xyXG4gICAgZGVmYXVsdHBhZ2VzOiBudW1iZXJbXTtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcclxuICAgIHNlYXJjaF9kYXRhKHZhbHVlOiBzdHJpbmcpOiBhbnk7XHJcbiAgICBnb19wYWdlKHRvdGFsaXRlbTogbnVtYmVyLCBwYWdpbmE6IG51bWJlciwgcG9ycGFnaW5hOiBudW1iZXIpOiB2b2lkO1xyXG4gICAgZ29fcG9ycGFnZShwb3JwYWdpbmE6IG51bWJlcik6IHZvaWQ7XHJcbn1cclxuIl19