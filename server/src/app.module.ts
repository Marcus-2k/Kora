import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

// Controllers
import { AppController } from "./app.controller";
// Services
import { AppService } from "./app.service";

// Module
import { UserModule } from "./module/user/user.module";

@Module({
  imports: [
    // Allow connecting to mongoDB from any IP
    MongooseModule.forRoot(
      "mongodb+srv://KoraAdmin:KoraPassword@databasekora.xwwidbt.mongodb.net/nestjs-test"
    ),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
