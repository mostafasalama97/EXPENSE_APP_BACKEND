export enum ReportType {
    INCOME = 'income',
    EXPENSE = 'expense'
}


interface Data {
    report: {
        id : string,
        source : string,
        amount : number,
        created_at : Date,
        updated_at : Date,
        type : ReportType
    }[];
}

export const data:Data = {
    report:[{
        id : 'uuid1',
        source : 'salary',
        amount : 7500,
        created_at : new Date(),
        updated_at : new Date(),
        type : ReportType.INCOME
    },
    {
        id : 'uuid2',
        source : 'teaching',
        amount : 7500,
        created_at : new Date(),
        updated_at : new Date(),
        type : ReportType.INCOME
    },
    {
        id : '8',
        source : 'teaching',
        amount : 7500,
        created_at : new Date(),
        updated_at : new Date(),
        type : ReportType.INCOME
    },
    {
        id : 'uuid3',
        source : 'udemy',
        amount : 7500,
        created_at : new Date(),
        updated_at : new Date(),
        type : ReportType.EXPENSE
    }]
}


export interface reportData {
    amount : number ,
     source : string
};


export interface updateReportData {
    amount? : number ,
    source? : string
};