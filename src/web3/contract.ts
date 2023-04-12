import { SupportChain } from "./type"

export const Universal_Erc20 = {
    ETH: {
        [SupportChain.Binance]: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
    },
    USDT: {
        [SupportChain.Mainnet]: "0xdac17f958d2ee523a2206206994597c13d831ec7",
        [SupportChain.Binance]: "0x55d398326f99059ff775485246999027b3197955",
        [SupportChain.Polygon]: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
        [SupportChain.Arbitrum]: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
        [SupportChain.Optimism]: "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58"
    },
    USDC: {
        [SupportChain.Mainnet]: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        [SupportChain.Binance]: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
        [SupportChain.Polygon]: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
        [SupportChain.Arbitrum]: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
        [SupportChain.Optimism]: "0x7f5c764cbc14f9669b88837ca1490cca17c31607"
    }
}

export const Universal_Abi = {
    Universal_Erc20: require('./abi/UniversalErc20.json'),
    Universal_SwapRoute: require('./abi/UniversalSwapRoute.json')
}

const Logic_Address = {
    [SupportChain.Binance]: {
        Pancake_Route: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
        Pancake_SmartRoute: "0x64d74e1eaae3176744b5767b93b7bee39cf7898f"
    }
}

const Logic_Abi = {
    Pancake_Route: require('./abi/Pancake_Route.json'),
    Pancake_SwapSmartRouter: require('./abi/PancakeSwapSmartRouter.json')
}

export const CT_ABI = { ...Universal_Abi, ...Logic_Abi }
export const CT_ADDRESS = { ...Universal_Erc20, ...Logic_Address }