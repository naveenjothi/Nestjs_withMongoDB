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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutPostsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_create_or_connect_withoutposts_input_1 = require("./user-create-or-connect-withoutposts.input");
const user_create_without_posts_input_1 = require("./user-create-without-posts.input");
const user_update_without_posts_input_1 = require("./user-update-without-posts.input");
const user_upsert_without_posts_input_1 = require("./user-upsert-without-posts.input");
const user_where_unique_input_1 = require("./user-where-unique.input");
let UserUpdateOneWithoutPostsInput = class UserUpdateOneWithoutPostsInput {
};
__decorate([
    graphql_1.Field(() => user_create_without_posts_input_1.UserCreateWithoutPostsInput, {
        nullable: true,
    }),
    __metadata("design:type", user_create_without_posts_input_1.UserCreateWithoutPostsInput)
], UserUpdateOneWithoutPostsInput.prototype, "create", void 0);
__decorate([
    graphql_1.Field(() => user_where_unique_input_1.UserWhereUniqueInput, {
        nullable: true,
    }),
    __metadata("design:type", user_where_unique_input_1.UserWhereUniqueInput)
], UserUpdateOneWithoutPostsInput.prototype, "connect", void 0);
__decorate([
    graphql_1.Field(() => Boolean, {
        nullable: true,
    }),
    __metadata("design:type", Boolean)
], UserUpdateOneWithoutPostsInput.prototype, "disconnect", void 0);
__decorate([
    graphql_1.Field(() => Boolean, {
        nullable: true,
    }),
    __metadata("design:type", Boolean)
], UserUpdateOneWithoutPostsInput.prototype, "delete", void 0);
__decorate([
    graphql_1.Field(() => user_update_without_posts_input_1.UserUpdateWithoutPostsInput, {
        nullable: true,
    }),
    __metadata("design:type", user_update_without_posts_input_1.UserUpdateWithoutPostsInput)
], UserUpdateOneWithoutPostsInput.prototype, "update", void 0);
__decorate([
    graphql_1.Field(() => user_upsert_without_posts_input_1.UserUpsertWithoutPostsInput, {
        nullable: true,
    }),
    __metadata("design:type", user_upsert_without_posts_input_1.UserUpsertWithoutPostsInput)
], UserUpdateOneWithoutPostsInput.prototype, "upsert", void 0);
__decorate([
    graphql_1.Field(() => user_create_or_connect_withoutposts_input_1.UserCreateOrConnectWithoutpostsInput, {
        nullable: true,
    }),
    __metadata("design:type", user_create_or_connect_withoutposts_input_1.UserCreateOrConnectWithoutpostsInput)
], UserUpdateOneWithoutPostsInput.prototype, "connectOrCreate", void 0);
UserUpdateOneWithoutPostsInput = __decorate([
    graphql_1.InputType()
], UserUpdateOneWithoutPostsInput);
exports.UserUpdateOneWithoutPostsInput = UserUpdateOneWithoutPostsInput;
//# sourceMappingURL=user-update-one-without-posts.input.js.map