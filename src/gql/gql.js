"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphql = void 0;
/* eslint-disable */
var types = require("./graphql");
/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
var documents = {
    "\n  query TokenQuery($id: ID!) {\n  token(id: $id) {\n    tokenDayData {\n      date\n      dailyVolumeUSD\n      priceUSD\n      totalLiquidityUSD\n    }\n  }\n}\n": types.TokenQueryDocument,
};
function graphql(source) {
    var _a;
    return (_a = documents[source]) !== null && _a !== void 0 ? _a : {};
}
exports.graphql = graphql;
