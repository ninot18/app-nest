import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCarDto {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsOptional()
    @IsString()
    readonly brand?: string;

    @IsString()
    @IsOptional()
    // @MinLength(3)
    readonly model?: string;
}