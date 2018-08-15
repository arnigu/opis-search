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
