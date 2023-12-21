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
import { WebhookWhereUniqueInput } from "./WebhookWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { WebhookUpdateInput } from "./WebhookUpdateInput";

@ArgsType()
class UpdateWebhookArgs {
  @ApiProperty({
    required: true,
    type: () => WebhookWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WebhookWhereUniqueInput)
  @Field(() => WebhookWhereUniqueInput, { nullable: false })
  where!: WebhookWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => WebhookUpdateInput,
  })
  @ValidateNested()
  @Type(() => WebhookUpdateInput)
  @Field(() => WebhookUpdateInput, { nullable: false })
  data!: WebhookUpdateInput;
}

export { UpdateWebhookArgs as UpdateWebhookArgs };