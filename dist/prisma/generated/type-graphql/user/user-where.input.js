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
var UserWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const post_list_relation_filter_input_1 = require("../post/post-list-relation-filter.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
let UserWhereInput = UserWhereInput_1 = class UserWhereInput {
};
__decorate([
    graphql_1.Field(() => [UserWhereInput_1], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "AND", void 0);
__decorate([
    graphql_1.Field(() => [UserWhereInput_1], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "OR", void 0);
__decorate([
    graphql_1.Field(() => [UserWhereInput_1], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "NOT", void 0);
__decorate([
    graphql_1.Field(() => int_filter_input_1.IntFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "id", void 0);
__decorate([
    graphql_1.Field(() => string_filter_input_1.StringFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "email", void 0);
__decorate([
    graphql_1.Field(() => string_filter_input_1.StringFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => post_list_relation_filter_input_1.PostListRelationFilter, {
        nullable: true,
    }),
    __metadata("design:type", post_list_relation_filter_input_1.PostListRelationFilter)
], UserWhereInput.prototype, "posts", void 0);
UserWhereInput = UserWhereInput_1 = __decorate([
    graphql_1.InputType()
], UserWhereInput);
exports.UserWhereInput = UserWhereInput;
//# sourceMappingURL=user-where.input.js.map