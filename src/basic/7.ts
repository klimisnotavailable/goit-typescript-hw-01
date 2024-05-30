interface Page{
    title:string;
    likes:number;
    accounts:string[];
    status:'open' | 'close';
    details?:object;
}