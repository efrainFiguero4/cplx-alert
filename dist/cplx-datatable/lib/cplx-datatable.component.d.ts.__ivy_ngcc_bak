import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Paginacion, CplxDatatableService, ConfigDataTable } from './cplx-datatable.service';
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
}
