/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ApiKeyWhereInput } from "./ApiKeyWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ApiKeyOrderByInput } from "./ApiKeyOrderByInput";

@ArgsType()
class ApiKeyFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ApiKeyWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ApiKeyWhereInput, { nullable: true })
  @Type(() => ApiKeyWhereInput)
  where?: ApiKeyWhereInput;

  @ApiProperty({
    required: false,
    type: [ApiKeyOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ApiKeyOrderByInput], { nullable: true })
  @Type(() => ApiKeyOrderByInput)
  orderBy?: Array<ApiKeyOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ApiKeyFindManyArgs as ApiKeyFindManyArgs };
