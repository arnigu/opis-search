export class DocumentFilter {
   private _type = 'DocumentFilterType';
   public documentFormType = 1002;

   public subject: string;

   public startRow = 0;
   public rowsCount = 20;

   public sortColumn = '_creationDate';
   public sortDescending = true;

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
        this.value = value;
        this.inValues = value;
    }

    public propertyName: string;
    public operator: number;
    public inValues: any[];
    public value: any;
}