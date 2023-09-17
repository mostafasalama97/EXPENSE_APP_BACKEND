import {IsNumber ,
    IsPositive ,
    IsString ,
    IsNotEmpty,
    IsOptional} from "class-validator"
import { Expose , Exclude} from "class-transformer"
import e from "express";
import { ReportType } from "src/data";

export class createReportDto {
    @IsNumber()
    @IsPositive()
    amount : number;

    @IsString()
    @IsNotEmpty()
    source : string
}


export class updateReportDto{
    @IsOptional()
    @IsNumber()
    @IsPositive()
    amount : number;
    
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    source : string
}


export class ReportResponseDto{
        id : string;
        source : string;
        amount : number;

        
        @Expose({ name: "CreatedAt" })
        transformCreatedAt() {
            return this.created_at;
        }

        
        @Exclude()
        created_at : Date;

        

        @Exclude()
        updated_at : Date;
        type : ReportType

        
        constructor(partial : Partial<ReportResponseDto>){
        Object.assign(this , partial)
    }
}