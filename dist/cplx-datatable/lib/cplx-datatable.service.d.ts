import * as ɵngcc0 from '@angular/core';
export declare class Paginacion {
    desde: number;
    hasta: number;
    atras: number;
    actual: number;
    siguiente: number;
    totalitem: number;
    totalpaginas: number;
    porpagina: number;
    paginasmostrar: number;
    paginas: number[];
}
export declare class ConfigDataTable {
    pagination: boolean;
    search: boolean;
}
export declare class CplxDatatableService {
    constructor();
    crear_data_paginado(datalista: any[], totalpaginas: number, porpagina: number): {};
    crear_paginacion(totalitems: number, paginaactual: number, porpagina: number): Paginacion;
    getPages(totalitems: number, porpagina: number, paginactual: number, paginasmostrar: number): number[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CplxDatatableService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CplxDatatableService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1kYXRhdGFibGUuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJjcGx4LWRhdGF0YWJsZS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVjbGFyZSBjbGFzcyBQYWdpbmFjaW9uIHtcclxuICAgIGRlc2RlOiBudW1iZXI7XHJcbiAgICBoYXN0YTogbnVtYmVyO1xyXG4gICAgYXRyYXM6IG51bWJlcjtcclxuICAgIGFjdHVhbDogbnVtYmVyO1xyXG4gICAgc2lndWllbnRlOiBudW1iZXI7XHJcbiAgICB0b3RhbGl0ZW06IG51bWJlcjtcclxuICAgIHRvdGFscGFnaW5hczogbnVtYmVyO1xyXG4gICAgcG9ycGFnaW5hOiBudW1iZXI7XHJcbiAgICBwYWdpbmFzbW9zdHJhcjogbnVtYmVyO1xyXG4gICAgcGFnaW5hczogbnVtYmVyW107XHJcbn1cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ29uZmlnRGF0YVRhYmxlIHtcclxuICAgIHBhZ2luYXRpb246IGJvb2xlYW47XHJcbiAgICBzZWFyY2g6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ3BseERhdGF0YWJsZVNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKTtcclxuICAgIGNyZWFyX2RhdGFfcGFnaW5hZG8oZGF0YWxpc3RhOiBhbnlbXSwgdG90YWxwYWdpbmFzOiBudW1iZXIsIHBvcnBhZ2luYTogbnVtYmVyKToge307XHJcbiAgICBjcmVhcl9wYWdpbmFjaW9uKHRvdGFsaXRlbXM6IG51bWJlciwgcGFnaW5hYWN0dWFsOiBudW1iZXIsIHBvcnBhZ2luYTogbnVtYmVyKTogUGFnaW5hY2lvbjtcclxuICAgIGdldFBhZ2VzKHRvdGFsaXRlbXM6IG51bWJlciwgcG9ycGFnaW5hOiBudW1iZXIsIHBhZ2luYWN0dWFsOiBudW1iZXIsIHBhZ2luYXNtb3N0cmFyOiBudW1iZXIpOiBudW1iZXJbXTtcclxufVxyXG4iXX0=