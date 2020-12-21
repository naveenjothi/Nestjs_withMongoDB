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
exports.PostCreateManyWithoutAuthorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const post_create_or_connect_withoutauthor_input_1 = require("./post-create-or-connect-withoutauthor.input");
const post_create_without_author_input_1 = require("./post-create-without-author.input");
const post_where_unique_input_1 = require("./post-where-unique.input");
let PostCreateManyWithoutAuthorInput = class PostCreateManyWithoutAuthorInput {
};
__decorate([
    graphql_1.Field(() => [post_create_without_author_input_1.PostCreateWithoutAuthorInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PostCreateManyWithoutAuthorInput.prototype, "create", void 0);
__decorate([
    graphql_1.Field(() => [post_where_unique_input_1.PostWhereUniqueInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PostCreateManyWithoutAuthorInput.prototype, "connect", void 0);
__decorate([
    graphql_1.Field(() => [post_create_or_connect_withoutauthor_input_1.PostCreateOrConnectWithoutauthorInput], {
        nullable: true,
    }),
    __metadata("design:type", Object)
], PostCreateManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
PostCreateManyWithoutAuthorInput = __decorate([
    graphql_1.InputType()
], PostCreateManyWithoutAuthorInput);
exports.PostCreateManyWithoutAuthorInput = PostCreateManyWithoutAuthorInput;
//# sourceMappingURL=post-create-many-without-author.input.js.map