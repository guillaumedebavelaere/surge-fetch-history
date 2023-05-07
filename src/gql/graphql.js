"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenQueryDocument = exports._SubgraphErrorPolicy_ = exports.User_OrderBy = exports.Transfer_OrderBy = exports.Token_OrderBy = exports.TokenDayData_OrderBy = exports.Surgeswap_OrderBy = exports.SurgeswapDayData_OrderBy = exports.Sold_OrderBy = exports.OrderDirection = exports.Bought_OrderBy = void 0;
var Bought_OrderBy;
(function (Bought_OrderBy) {
    Bought_OrderBy["Beans"] = "beans";
    Bought_OrderBy["BlockNumber"] = "blockNumber";
    Bought_OrderBy["BlockTimestamp"] = "blockTimestamp";
    Bought_OrderBy["DollarBuy"] = "dollarBuy";
    Bought_OrderBy["From"] = "from";
    Bought_OrderBy["Id"] = "id";
    Bought_OrderBy["To"] = "to";
    Bought_OrderBy["Tokens"] = "tokens";
    Bought_OrderBy["TransactionHash"] = "transactionHash";
})(Bought_OrderBy = exports.Bought_OrderBy || (exports.Bought_OrderBy = {}));
/** Defines the order direction, either ascending or descending */
var OrderDirection;
(function (OrderDirection) {
    OrderDirection["Asc"] = "asc";
    OrderDirection["Desc"] = "desc";
})(OrderDirection = exports.OrderDirection || (exports.OrderDirection = {}));
var Sold_OrderBy;
(function (Sold_OrderBy) {
    Sold_OrderBy["Beans"] = "beans";
    Sold_OrderBy["BlockNumber"] = "blockNumber";
    Sold_OrderBy["BlockTimestamp"] = "blockTimestamp";
    Sold_OrderBy["DollarSell"] = "dollarSell";
    Sold_OrderBy["From"] = "from";
    Sold_OrderBy["Id"] = "id";
    Sold_OrderBy["To"] = "to";
    Sold_OrderBy["Tokens"] = "tokens";
    Sold_OrderBy["TransactionHash"] = "transactionHash";
})(Sold_OrderBy = exports.Sold_OrderBy || (exports.Sold_OrderBy = {}));
var SurgeswapDayData_OrderBy;
(function (SurgeswapDayData_OrderBy) {
    SurgeswapDayData_OrderBy["DailyVolumeUsd"] = "dailyVolumeUSD";
    SurgeswapDayData_OrderBy["Date"] = "date";
    SurgeswapDayData_OrderBy["Id"] = "id";
    SurgeswapDayData_OrderBy["TotalLiquidityUsd"] = "totalLiquidityUSD";
    SurgeswapDayData_OrderBy["TxCount"] = "txCount";
})(SurgeswapDayData_OrderBy = exports.SurgeswapDayData_OrderBy || (exports.SurgeswapDayData_OrderBy = {}));
var Surgeswap_OrderBy;
(function (Surgeswap_OrderBy) {
    Surgeswap_OrderBy["Id"] = "id";
    Surgeswap_OrderBy["PairCount"] = "pairCount";
    Surgeswap_OrderBy["TotalLiquidityEth"] = "totalLiquidityETH";
    Surgeswap_OrderBy["TotalLiquiditySrg"] = "totalLiquiditySRG";
    Surgeswap_OrderBy["TotalLiquidityUsd"] = "totalLiquidityUSD";
    Surgeswap_OrderBy["TotalVolumeUsd"] = "totalVolumeUSD";
    Surgeswap_OrderBy["TxCount"] = "txCount";
})(Surgeswap_OrderBy = exports.Surgeswap_OrderBy || (exports.Surgeswap_OrderBy = {}));
var TokenDayData_OrderBy;
(function (TokenDayData_OrderBy) {
    TokenDayData_OrderBy["DailyTxns"] = "dailyTxns";
    TokenDayData_OrderBy["DailyVolumeUsd"] = "dailyVolumeUSD";
    TokenDayData_OrderBy["Date"] = "date";
    TokenDayData_OrderBy["Id"] = "id";
    TokenDayData_OrderBy["PriceUsd"] = "priceUSD";
    TokenDayData_OrderBy["Token"] = "token";
    TokenDayData_OrderBy["TokenDecimals"] = "token__decimals";
    TokenDayData_OrderBy["TokenId"] = "token__id";
    TokenDayData_OrderBy["TokenLiquidityUsd"] = "token__liquidityUSD";
    TokenDayData_OrderBy["TokenName"] = "token__name";
    TokenDayData_OrderBy["TokenSymbol"] = "token__symbol";
    TokenDayData_OrderBy["TokenTheoreticalLiquidity"] = "token__theoreticalLiquidity";
    TokenDayData_OrderBy["TokenTotalLiquidityEth"] = "token__totalLiquidityETH";
    TokenDayData_OrderBy["TokenTotalLiquiditySrg"] = "token__totalLiquiditySRG";
    TokenDayData_OrderBy["TokenTotalSupply"] = "token__totalSupply";
    TokenDayData_OrderBy["TokenTradeVolumeUsd"] = "token__tradeVolumeUSD";
    TokenDayData_OrderBy["TokenTxCount"] = "token__txCount";
    TokenDayData_OrderBy["TotalLiquidityUsd"] = "totalLiquidityUSD";
})(TokenDayData_OrderBy = exports.TokenDayData_OrderBy || (exports.TokenDayData_OrderBy = {}));
var Token_OrderBy;
(function (Token_OrderBy) {
    Token_OrderBy["Decimals"] = "decimals";
    Token_OrderBy["Id"] = "id";
    Token_OrderBy["LiquidityUsd"] = "liquidityUSD";
    Token_OrderBy["Name"] = "name";
    Token_OrderBy["Symbol"] = "symbol";
    Token_OrderBy["TheoreticalLiquidity"] = "theoreticalLiquidity";
    Token_OrderBy["TokenDayData"] = "tokenDayData";
    Token_OrderBy["TotalLiquidityEth"] = "totalLiquidityETH";
    Token_OrderBy["TotalLiquiditySrg"] = "totalLiquiditySRG";
    Token_OrderBy["TotalSupply"] = "totalSupply";
    Token_OrderBy["TradeVolumeUsd"] = "tradeVolumeUSD";
    Token_OrderBy["TxCount"] = "txCount";
})(Token_OrderBy = exports.Token_OrderBy || (exports.Token_OrderBy = {}));
var Transfer_OrderBy;
(function (Transfer_OrderBy) {
    Transfer_OrderBy["BlockNumber"] = "blockNumber";
    Transfer_OrderBy["BlockTimestamp"] = "blockTimestamp";
    Transfer_OrderBy["From"] = "from";
    Transfer_OrderBy["Id"] = "id";
    Transfer_OrderBy["To"] = "to";
    Transfer_OrderBy["TransactionHash"] = "transactionHash";
    Transfer_OrderBy["Value"] = "value";
})(Transfer_OrderBy = exports.Transfer_OrderBy || (exports.Transfer_OrderBy = {}));
var User_OrderBy;
(function (User_OrderBy) {
    User_OrderBy["Id"] = "id";
    User_OrderBy["UsdSwapped"] = "usdSwapped";
})(User_OrderBy = exports.User_OrderBy || (exports.User_OrderBy = {}));
var _SubgraphErrorPolicy_;
(function (_SubgraphErrorPolicy_) {
    /** Data will be returned even if the subgraph has indexing errors */
    _SubgraphErrorPolicy_["Allow"] = "allow";
    /** If the subgraph has indexing errors, data will be omitted. The default. */
    _SubgraphErrorPolicy_["Deny"] = "deny";
})(_SubgraphErrorPolicy_ = exports._SubgraphErrorPolicy_ || (exports._SubgraphErrorPolicy_ = {}));
exports.TokenQueryDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "TokenQuery" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "token" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "tokenDayData" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "date" } }, { "kind": "Field", "name": { "kind": "Name", "value": "dailyVolumeUSD" } }, { "kind": "Field", "name": { "kind": "Name", "value": "priceUSD" } }, { "kind": "Field", "name": { "kind": "Name", "value": "totalLiquidityUSD" } }] } }] } }] } }] };
