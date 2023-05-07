import {Chain, getTokenDailyHistoryData} from "./api";
import {TokenDayData} from "./gql/graphql";

const surgeToken: string = process.argv[2]
const chain: string = process.argv[3]

if (surgeToken == undefined) {
    throw new Error("A surge token must be provided as argument!")
}

if (chain == undefined) {
    throw new Error("A chain must be provided as argument!")
}

getTokenDailyHistoryData(surgeToken, Chain[chain as keyof typeof Chain])
    .then((data: TokenDayData[]) => console.log(data))