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
var PostWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const boolean_filter_input_1 = require("../prisma/boolean-filter.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const user_where_input_1 = require("../user/user-where.input");
let PostWhereInput = PostWhereInput_1 = class PostWhereInput {
};
__decorate([
    graphql_1.Field(() => [PostWhereInput_1], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PostWhereInput.prototype, "AND", void 0);
__decorate([
    graphql_1.Field(() => [PostWhereInput_1], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PostWhereInput.prototype, "OR", void 0);
__decorate([
    graphql_1.Field(() => [PostWhereInput_1], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PostWhereInput.prototype, "NOT", void 0);
__decorate([
    graphql_1.Field(() => int_filter_input_1.IntFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PostWhereInput.prototype, "id", void 0);
__decorate([
    graphql_1.Field(() => string_filter_input_1.StringFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PostWhereInput.prototype, "title", void 0);
__decorate([
    graphql_1.Field(() => string_filter_input_1.StringFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PostWhereInput.prototype, "content", void 0);
__decorate([
    graphql_1.Field(() => boolean_filter_input_1.BooleanFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PostWhereInput.prototype, "published", void 0);
__decorate([
    graphql_1.Field(() => user_where_input_1.UserWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PostWhereInput.prototype, "author", void 0);
__decorate([
    graphql_1.Field(() => int_filter_input_1.IntFilter, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PostWhereInput.prototype, "authorId", void 0);
PostWhereInput = PostWhereInput_1 = __decorate([
    graphql_1.InputType()
], PostWhereInput);
exports.PostWhereInput = PostWhereInput;
//# sourceMappingURL=post-where.input.js.map