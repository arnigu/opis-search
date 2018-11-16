export class DocumentFilter {
   private _type: string = 'DocumentFilterType';
   public documentFormType: number = 1002;

   public subject: string;

   public startRow = 0;
   public rowsCount = 20;

   public sortColumn = '_creationDate';
   public sortDescending = true;

   public filterDocumentID: string[];
   public loadColumns: string[];

   public fullTextSearch: string;
   public dataLoadingOptions = 0;

   public customFilter: any;


   //
   // Create it
   constructor() {}
}

export class BinaryFilterExpression {
    private _type = 'BinaryFilterExpressionType';

    constructor(propertyName: string, operator: number, value: any) {
        this.propertyName = propertyName;
        this.operator = operator;

        if (value && value.constructor === Array) {
            this.inValues = value;
        } else{
            this.value = value;
        }
    }

    public propertyName: string;
    public operator: number;
    public inValues: any[];
    public value: any;
}