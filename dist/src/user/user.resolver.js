"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_create_input_1 = require("../../prisma/generated/type-graphql/user/user-create.input");
const user_where_input_1 = require("../../prisma/generated/type-graphql/user/user-where.input");
const user_where_unique_input_1 = require("../../prisma/generated/type-graphql/user/user-where-unique.input");
const user_model_1 = require("../../prisma/generated/type-graphql/user/user.model");
const user_service_1 = require("./user.service");
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    async createUser(data, ctx) {
        return await this.userService.createUser(data, ctx);
    }
    async getMultipleUsers(data, ctx) {
        return await this.userService.getMultipleUsers(data, ctx);
    }
    async getSingleUser(data, ctx) {
        return await this.userService.getSingleUser(data, ctx);
    }
};
__decorate([
    graphql_1.Mutation(() => user_model_1.User, {
        name: "CreateUser",
        description: "Create Author Field",
    }),
    __param(0, graphql_1.Args("data")),
    __param(1, graphql_1.Context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_create_input_1.UserCreateInput, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
__decorate([
    graphql_1.Query(() => [user_model_1.User]),
    __param(0, graphql_1.Args("data")),
    __param(1, graphql_1.Context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_where_input_1.UserWhereInput, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getMultipleUsers", null);
__decorate([
    graphql_1.Query(() => user_model_1.User),
    __param(0, graphql_1.Args("data")),
    __param(1, graphql_1.Context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_where_unique_input_1.UserWhereUniqueInput, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getSingleUser", null);
UserResolver = __decorate([
    graphql_1.Resolver(() => user_model_1.User),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map