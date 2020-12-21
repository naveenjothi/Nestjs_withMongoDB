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
exports.AggregateUserArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_avg_aggregate_input_1 = require("./user-avg-aggregate.input");
const user_max_aggregate_input_1 = require("./user-max-aggregate.input");
const user_min_aggregate_input_1 = require("./user-min-aggregate.input");
const user_order_by_input_1 = require("./user-order-by.input");
const user_sum_aggregate_input_1 = require("./user-sum-aggregate.input");
const user_where_unique_input_1 = require("./user-where-unique.input");
const user_where_input_1 = require("./user-where.input");
let AggregateUserArgs = class AggregateUserArgs {
};
__decorate([
    graphql_1.Field(() => user_where_input_1.UserWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", user_where_input_1.UserWhereInput)
], AggregateUserArgs.prototype, "where", void 0);
__decorate([
    graphql_1.Field(() => [user_order_by_input_1.UserOrderByInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], AggregateUserArgs.prototype, "orderBy", void 0);
__decorate([
    graphql_1.Field(() => user_where_unique_input_1.UserWhereUniqueInput, {
        nullable: true,
    }),
    __metadata("design:type", user_where_unique_input_1.UserWhereUniqueInput)
], AggregateUserArgs.prototype, "cursor", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, {
        nullable: true,
    }),
    __metadata("design:type", Number)
], AggregateUserArgs.prototype, "take", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, {
        nullable: true,
    }),
    __metadata("design:type", Number)
], AggregateUserArgs.prototype, "skip", void 0);
__decorate([
    graphql_1.Field(() => Boolean, {
        nullable: true,
    }),
    __metadata("design:type", Boolean)
], AggregateUserArgs.prototype, "count", void 0);
__decorate([
    graphql_1.Field(() => user_avg_aggregate_input_1.UserAvgAggregateInput, {
        nullable: true,
    }),
    __metadata("design:type", user_avg_aggregate_input_1.UserAvgAggregateInput)
], AggregateUserArgs.prototype, "avg", void 0);
__decorate([
    graphql_1.Field(() => user_sum_aggregate_input_1.UserSumAggregateInput, {
        nullable: true,
    }),
    __metadata("design:type", user_sum_aggregate_input_1.UserSumAggregateInput)
], AggregateUserArgs.prototype, "sum", void 0);
__decorate([
    graphql_1.Field(() => user_min_aggregate_input_1.UserMinAggregateInput, {
        nullable: true,
    }),
    __metadata("design:type", user_min_aggregate_input_1.UserMinAggregateInput)
], AggregateUserArgs.prototype, "min", void 0);
__decorate([
    graphql_1.Field(() => user_max_aggregate_input_1.UserMaxAggregateInput, {
        nullable: true,
    }),
    __metadata("design:type", user_max_aggregate_input_1.UserMaxAggregateInput)
], AggregateUserArgs.prototype, "max", void 0);
AggregateUserArgs = __decorate([
    graphql_1.ArgsType()
], AggregateUserArgs);
exports.AggregateUserArgs = AggregateUserArgs;
//# sourceMappingURL=aggregate-user.args.js.map