
export class MainItem {
    originalIndex?: number;

    Type:string='';

    executionOrderMainCode: number=0;
    invoiceMainItemCode?: number;
    serviceNumberCode?: number;
    description?: string;

    unitOfMeasurementCode?:string;
    currencyCode?: string;
    materialGroupCode?:string;
    serviceTypeCode?:string;
    personnelNumberCode?: string;
    lineTypeCode?:string;

    
    totalQuantity?: number;
    amountPerUnit?: number;
    total: number=0;

    actualQuantity?: number;
    actualPercentage?: number;
    overFulfillmentPercentage?: number;
    unlimitedOverFulfillment?: boolean;
    manualPriceEntryAllowed?: boolean;
    externalServiceNumber?: string;
    serviceText?:string;
    lineText?: string;
    lineNumber?:string;
    biddersLine?:boolean;
    supplementaryLine?:boolean;
    lotCostOne?:boolean;
    doNotPrint?:boolean;

    selected?: boolean;
  
    totalHeader?:number;
    salesOrderItemText?:string;

    //executionOrdersubList?:SubItem[];
    
}