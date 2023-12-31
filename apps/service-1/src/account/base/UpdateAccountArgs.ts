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
import { AccountWhereUniqueInput } from "./AccountWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AccountUpdateInput } from "./AccountUpdateInput";

@ArgsType()
class UpdateAccountArgs {
  @ApiProperty({
    required: true,
    type: () => AccountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AccountWhereUniqueInput)
  @Field(() => AccountWhereUniqueInput, { nullable: false })
  where!: AccountWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AccountUpdateInput,
  })
  @ValidateNested()
  @Type(() => AccountUpdateInput)
  @Field(() => AccountUpdateInput, { nullable: false })
  data!: AccountUpdateInput;
}

export { UpdateAccountArgs as UpdateAccountArgs };
