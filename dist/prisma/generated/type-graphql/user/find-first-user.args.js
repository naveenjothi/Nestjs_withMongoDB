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
exports.FindFirstUserArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_order_by_input_1 = require("./user-order-by.input");
const user_scalar_field_enum_1 = require("./user-scalar-field.enum");
const user_where_unique_input_1 = require("./user-where-unique.input");
const user_where_input_1 = require("./user-where.input");
let FindFirstUserArgs = class FindFirstUserArgs {
};
__decorate([
    graphql_1.Field(() => user_where_input_1.UserWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", user_where_input_1.UserWhereInput)
], FindFirstUserArgs.prototype, "where", void 0);
__decorate([
    graphql_1.Field(() => [user_order_by_input_1.UserOrderByInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], FindFirstUserArgs.prototype, "orderBy", void 0);
__decorate([
    graphql_1.Field(() => user_where_unique_input_1.UserWhereUniqueInput, {
        nullable: true,
    }),
    __metadata("design:type", user_where_unique_input_1.UserWhereUniqueInput)
], FindFirstUserArgs.prototype, "cursor", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, {
        nullable: true,
    }),
    __metadata("design:type", Number)
], FindFirstUserArgs.prototype, "take", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, {
        nullable: true,
    }),
    __metadata("design:type", Number)
], FindFirstUserArgs.prototype, "skip", void 0);
__decorate([
    graphql_1.Field(() => [user_scalar_field_enum_1.UserScalarFieldEnum], {
        nullable: true,
    }),
    __metadata("design:type", Array)
], FindFirstUserArgs.prototype, "distinct", void 0);
FindFirstUserArgs = __decorate([
    graphql_1.ArgsType()
], FindFirstUserArgs);
exports.FindFirstUserArgs = FindFirstUserArgs;
//# sourceMappingURL=find-first-user.args.js.map