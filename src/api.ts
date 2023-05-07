import {GraphQLClient} from "graphql-request";
import {graphql} from "./gql";
import {Token, TokenDayData} from "./gql/graphql";


export enum Chain {
    BSC = "https://api.thegraph.com/subgraphs/name/somemoecoding/surgeswap-v2",
    ETH = "https://api.thegraph.com/subgraphs/name/somemoecoding/surgeswap-v1-eth",
    ARBITRUM = "https://api.thegraph.com/subgraphs/name/somemoecoding/surgeswap-v1-arbi"
}

const GET_TOKEN_DATA_HISTORY = graphql(/* GraphQL */`
  query TokenQuery($id: ID!) {
  token(id: $id) {
    tokenDayData {
      date
      dailyVolumeUSD
      priceUSD
      totalLiquidityUSD
    }
  }
}
`);

interface Data {
    token: Token
}
export const getTokenDailyHistoryData = async (surgeToken: string, chain: Chain): Promise<Array<TokenDayData>> => {
    const client = new GraphQLClient(chain);
    const res = await client.request<Data>(GET_TOKEN_DATA_HISTORY, {id: surgeToken})
    return res?.token?.tokenDayData || [];
};