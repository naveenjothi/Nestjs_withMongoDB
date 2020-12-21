"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var PostScalarFieldEnum;
(function (PostScalarFieldEnum) {
    PostScalarFieldEnum["id"] = "id";
    PostScalarFieldEnum["title"] = "title";
    PostScalarFieldEnum["content"] = "content";
    PostScalarFieldEnum["published"] = "published";
    PostScalarFieldEnum["authorId"] = "authorId";
})(PostScalarFieldEnum = exports.PostScalarFieldEnum || (exports.PostScalarFieldEnum = {}));
graphql_1.registerEnumType(PostScalarFieldEnum, { name: 'PostScalarFieldEnum' });
//# sourceMappingURL=post-scalar-field.enum.js.map