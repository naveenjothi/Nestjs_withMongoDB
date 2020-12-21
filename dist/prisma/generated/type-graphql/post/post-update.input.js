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
exports.PostUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_update_one_without_posts_input_1 = require("../user/user-update-one-without-posts.input");
let PostUpdateInput = class PostUpdateInput {
};
__decorate([
    graphql_1.Field(() => String, {
        nullable: true,
    }),
    __metadata("design:type", String)
], PostUpdateInput.prototype, "title", void 0);
__decorate([
    graphql_1.Field(() => String, {
        nullable: true,
    }),
    __metadata("design:type", String)
], PostUpdateInput.prototype, "content", void 0);
__decorate([
    graphql_1.Field(() => Boolean, {
        nullable: true,
    }),
    __metadata("design:type", Boolean)
], PostUpdateInput.prototype, "published", void 0);
__decorate([
    graphql_1.Field(() => user_update_one_without_posts_input_1.UserUpdateOneWithoutPostsInput, {
        nullable: true,
    }),
    __metadata("design:type", user_update_one_without_posts_input_1.UserUpdateOneWithoutPostsInput)
], PostUpdateInput.prototype, "author", void 0);
PostUpdateInput = __decorate([
    graphql_1.InputType()
], PostUpdateInput);
exports.PostUpdateInput = PostUpdateInput;
//# sourceMappingURL=post-update.input.js.map