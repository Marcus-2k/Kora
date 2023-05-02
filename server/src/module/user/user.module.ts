import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { UserController } from "./user.controller";

import { UserSchema } from "src/models/user.model";

@Module({
  imports: [MongooseModule.forFeature([{ name: "user", schema: UserSchema }])],
  controllers: [UserController],
  providers: [],
})
export class UserModule {}
