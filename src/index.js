#!/usr/bin/env -S ts-node
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenHistoryData = void 0;
var graphql_request_1 = require("graphql-request");
var gql_1 = require("./gql");
console.log("before");
console.log("after");
var surgeToken = process.argv[2];
if (surgeToken == undefined) {
    throw new Error("A surge token must be provided as argument!");
}
var variables = { "id": surgeToken };
var requestMiddleware = function (request) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log("request: ");
        console.log(request);
        return [2 /*return*/, __assign({}, request)];
    });
}); };
var client = new graphql_request_1.GraphQLClient("https://api.thegraph.com/subgraphs/name/somemoecoding/surgeswap-v2");
var GET_TOKEN_DATA_HISTORY = (0, gql_1.graphql)(/* GraphQL */ "\n  query TokenQuery($id: ID!) {\n  token(id: $id) {\n    tokenDayData {\n      date\n      dailyVolumeUSD\n      priceUSD\n      totalLiquidityUSD\n    }\n  }\n}\n");
var getTokenHistoryData = function (surgeToken) { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("before");
                return [4 /*yield*/, client.request(GET_TOKEN_DATA_HISTORY, variables)
                    // await client.request(GET_TOKEN_DATA_HISTORY.toString(), variables);
                ];
            case 1:
                res = _a.sent();
                // await client.request(GET_TOKEN_DATA_HISTORY.toString(), variables);
                console.log(res);
                return [2 /*return*/, res === null || res === void 0 ? void 0 : res.tokenDayData];
        }
    });
}); };
exports.getTokenHistoryData = getTokenHistoryData;
(0, exports.getTokenHistoryData)(surgeToken)
    .then(function (value) { return console.log(value); });
// En une phrase : Développez un script qui récupère les indicateurs de marché historiques pour les jetons SGR20
//
//     À propos de Surge :
//     https://surgeprotocol.io/
//         https://docs.surgeprotocol.io/introduction/foreword
//
//             Indicateurs de marché historiques requis :
//     Historique des prix : [timestamp, prix][] (obligatoire)
// Historique du volume : [timestamp, volume 24h][] (fortement souhaitable)
// Historique de liquidité : [timestamp, liquidité][] (bonus)
// Historique nécessaire depuis le genesis du token (premier jour de trading) jusqu'à maintenant.
//
// Caractéristiques préférées :
//     Écrit en TypeScript
// Compatible avec un nœud complet (pas besoin de nœud historique)
//
// Défis :
//     Documentation limitée pour Surge (probablement pas couvert par ChatGPT)
// Limites de débit potentielles lors de l'utilisation de nœuds publics
//
// Bonus :
//     Arriver à avoir la data hourly et pas seulement daily.
