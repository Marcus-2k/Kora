import { Body, Controller, Get, Post } from "@nestjs/common";
import { Delete, Param } from "@nestjs/common/decorators";
import { InjectModel } from "@nestjs/mongoose";

import { CreateUser, UpdateUser } from "src/shared/interfaces/interfaces";

import { Model } from "mongoose";
import { User } from "src/models/user.model";

@Controller("user")
export class UserController {
  constructor(@InjectModel("user") private readonly UserModel: Model<User>) {}

  @Get("list") getUserList() {
    const users = this.UserModel.find(undefined, {
      first_name: 1,
      last_name: 1,
      email: 1,
      date_of_birth: 1,
      date_of_create: 1,
    });

    return users;
  }

  @Get("new/:id") getUserInfo(@Param() param: { [key: string]: any }) {
    const userById = this.UserModel.findById(param.id, {
      first_name: 1,
      last_name: 1,
      email: 1,
      date_of_birth: 1,
    });

    return userById;
  }

  @Post("new") createUser(@Body() body: CreateUser) {
    const user = new this.UserModel({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      date_of_birth: body.date_of_birth,
      date_of_create: new Date(),
    });

    user.save();

    return { message: "Користувача успішно створено" };
  }

  @Post("new/:id") async updateUserById(
    @Body() body: UpdateUser,
    @Param() params: { [key: string]: any }
  ) {
    console.log("Start updateUser");
    console.log(body);
    console.log(params);

    await this.UserModel.findByIdAndUpdate(
      params.id,
      { $set: body },
      { new: true }
    );

    return { message: "Користувача успішно оновлено" };
  }

  @Delete("list/:id") async deleteUserById(
    @Param() params: { [key: string]: any }
  ) {
    console.log("Start deleteUserById");
    console.log(params);

    await this.UserModel.findByIdAndDelete(params.id);

    return { message: "Користувача успішно видалено" };
  }
}
