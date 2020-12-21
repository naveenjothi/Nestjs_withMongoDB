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
exports.AggregatePostArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const post_avg_aggregate_input_1 = require("./post-avg-aggregate.input");
const post_max_aggregate_input_1 = require("./post-max-aggregate.input");
const post_min_aggregate_input_1 = require("./post-min-aggregate.input");
const post_order_by_input_1 = require("./post-order-by.input");
const post_sum_aggregate_input_1 = require("./post-sum-aggregate.input");
const post_where_unique_input_1 = require("./post-where-unique.input");
const post_where_input_1 = require("./post-where.input");
let AggregatePostArgs = class AggregatePostArgs {
};
__decorate([
    graphql_1.Field(() => post_where_input_1.PostWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", post_where_input_1.PostWhereInput)
], AggregatePostArgs.prototype, "where", void 0);
__decorate([
    graphql_1.Field(() => [post_order_by_input_1.PostOrderByInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], AggregatePostArgs.prototype, "orderBy", void 0);
__decorate([
    graphql_1.Field(() => post_where_unique_input_1.PostWhereUniqueInput, {
        nullable: true,
    }),
    __metadata("design:type", post_where_unique_input_1.PostWhereUniqueInput)
], AggregatePostArgs.prototype, "cursor", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, {
        nullable: true,
    }),
    __metadata("design:type", Number)
], AggregatePostArgs.prototype, "take", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, {
        nullable: true,
    }),
    __metadata("design:type", Number)
], AggregatePostArgs.prototype, "skip", void 0);
__decorate([
    graphql_1.Field(() => Boolean, {
        nullable: true,
    }),
    __metadata("design:type", Boolean)
], AggregatePostArgs.prototype, "count", void 0);
__decorate([
    graphql_1.Field(() => post_avg_aggregate_input_1.PostAvgAggregateInput, {
        nullable: true,
    }),
    __metadata("design:type", post_avg_aggregate_input_1.PostAvgAggregateInput)
], AggregatePostArgs.prototype, "avg", void 0);
__decorate([
    graphql_1.Field(() => post_sum_aggregate_input_1.PostSumAggregateInput, {
        nullable: true,
    }),
    __metadata("design:type", post_sum_aggregate_input_1.PostSumAggregateInput)
], AggregatePostArgs.prototype, "sum", void 0);
__decorate([
    graphql_1.Field(() => post_min_aggregate_input_1.PostMinAggregateInput, {
        nullable: true,
    }),
    __metadata("design:type", post_min_aggregate_input_1.PostMinAggregateInput)
], AggregatePostArgs.prototype, "min", void 0);
__decorate([
    graphql_1.Field(() => post_max_aggregate_input_1.PostMaxAggregateInput, {
        nullable: true,
    }),
    __metadata("design:type", post_max_aggregate_input_1.PostMaxAggregateInput)
], AggregatePostArgs.prototype, "max", void 0);
AggregatePostArgs = __decorate([
    graphql_1.ArgsType()
], AggregatePostArgs);
exports.AggregatePostArgs = AggregatePostArgs;
//# sourceMappingURL=aggregate-post.args.js.map