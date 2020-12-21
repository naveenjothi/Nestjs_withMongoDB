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
exports.UserUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const post_update_many_without_author_input_1 = require("../post/post-update-many-without-author.input");
let UserUpdateInput = class UserUpdateInput {
};
__decorate([
    graphql_1.Field(() => String, {
        nullable: true,
    }),
    __metadata("design:type", String)
], UserUpdateInput.prototype, "email", void 0);
__decorate([
    graphql_1.Field(() => String, {
        nullable: true,
    }),
    __metadata("design:type", String)
], UserUpdateInput.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => post_update_many_without_author_input_1.PostUpdateManyWithoutAuthorInput, {
        nullable: true,
    }),
    __metadata("design:type", post_update_many_without_author_input_1.PostUpdateManyWithoutAuthorInput)
], UserUpdateInput.prototype, "posts", void 0);
UserUpdateInput = __decorate([
    graphql_1.InputType()
], UserUpdateInput);
exports.UserUpdateInput = UserUpdateInput;
//# sourceMappingURL=user-update.input.js.map