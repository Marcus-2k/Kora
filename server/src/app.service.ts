import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World GET!";
  }
  getHelloPost(): string {
    return "Hello World POST!";
  }
}
