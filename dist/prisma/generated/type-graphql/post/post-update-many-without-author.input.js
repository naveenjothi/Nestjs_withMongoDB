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
exports.PostUpdateManyWithoutAuthorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const post_create_or_connect_withoutauthor_input_1 = require("./post-create-or-connect-withoutauthor.input");
const post_create_without_author_input_1 = require("./post-create-without-author.input");
const post_scalar_where_input_1 = require("./post-scalar-where.input");
const post_update_many_with_where_without_author_input_1 = require("./post-update-many-with-where-without-author.input");
const post_update_with_where_unique_without_author_input_1 = require("./post-update-with-where-unique-without-author.input");
const post_upsert_with_where_unique_without_author_input_1 = require("./post-upsert-with-where-unique-without-author.input");
const post_where_unique_input_1 = require("./post-where-unique.input");
let PostUpdateManyWithoutAuthorInput = class PostUpdateManyWithoutAuthorInput {
};
__decorate([
    graphql_1.Field(() => [post_create_without_author_input_1.PostCreateWithoutAuthorInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PostUpdateManyWithoutAuthorInput.prototype, "create", void 0);
__decorate([
    graphql_1.Field(() => [post_where_unique_input_1.PostWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PostUpdateManyWithoutAuthorInput.prototype, "connect", void 0);
__decorate([
    graphql_1.Field(() => [post_where_unique_input_1.PostWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PostUpdateManyWithoutAuthorInput.prototype, "set", void 0);
__decorate([
    graphql_1.Field(() => [post_where_unique_input_1.PostWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PostUpdateManyWithoutAuthorInput.prototype, "disconnect", void 0);
__decorate([
    graphql_1.Field(() => [post_where_unique_input_1.PostWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PostUpdateManyWithoutAuthorInput.prototype, "delete", void 0);
__decorate([
    graphql_1.Field(() => [post_update_with_where_unique_without_author_input_1.PostUpdateWithWhereUniqueWithoutAuthorInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PostUpdateManyWithoutAuthorInput.prototype, "update", void 0);
__decorate([
    graphql_1.Field(() => [post_update_many_with_where_without_author_input_1.PostUpdateManyWithWhereWithoutAuthorInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PostUpdateManyWithoutAuthorInput.prototype, "updateMany", void 0);
__decorate([
    graphql_1.Field(() => [post_scalar_where_input_1.PostScalarWhereInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PostUpdateManyWithoutAuthorInput.prototype, "deleteMany", void 0);
__decorate([
    graphql_1.Field(() => [post_upsert_with_where_unique_without_author_input_1.PostUpsertWithWhereUniqueWithoutAuthorInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PostUpdateManyWithoutAuthorInput.prototype, "upsert", void 0);
__decorate([
    graphql_1.Field(() => [post_create_or_connect_withoutauthor_input_1.PostCreateOrConnectWithoutauthorInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PostUpdateManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
PostUpdateManyWithoutAuthorInput = __decorate([
    graphql_1.InputType()
], PostUpdateManyWithoutAuthorInput);
exports.PostUpdateManyWithoutAuthorInput = PostUpdateManyWithoutAuthorInput;
//# sourceMappingURL=post-update-many-without-author.input.js.map