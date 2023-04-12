import configConstants from "../constants/config.constants"
import { IChainConfig, SupportChain } from "./type"

export const isSupportChainKey = (key: string): key is keyof typeof SupportChain => {
    return key in SupportChain;
}

const initChainState: Record<SupportChain, IChainConfig> = {
    [SupportChain.Mainnet]: {
        name: 'Ethereum Mainnet',
        chainId: 1,
        rpcUrls: ["https://rpc.ankr.com/eth"],
        nativeCurrency: {
            name: 'Ethereum ETH',
            symbol: 'ETH',
            decimals: 18
        },
        blockExplorerUrls: 'https://etherscan.io/'
    },
    [SupportChain.Binance]: {
        name: 'Binance Smart Chain',
        chainId: 56,
        rpcUrls: ["https://bsc-dataseed3.defibit.io"],
        nativeCurrency: {
            name: 'Binance BNB',
            symbol: 'BNB',
            decimals: 18
        },
        blockExplorerUrls: 'https://bscscan.com/'
    },
    [SupportChain.Arbitrum]: {
        name: 'Arbitrum One',
        chainId: 42161,
        rpcUrls: [
            "https://arbitrum.blockpi.network/v1/rpc/c33f30291d985470360a76531bbfafb7159bd48e",
            "https://arb1.arbitrum.io/rpc",
            "https://arbitrum.blockpi.network/v1/rpc/public",
            "https://arbitrum-one.public.blastapi.io",
            "https://endpoints.omniatech.io/v1/arbitrum/one/public",
            "https://rpc.ankr.com/arbitrum",
            "https://arb-mainnet.g.alchemy.com/v2/68A7IFV9I_6jDdZONl5pRzz0MES2t3LK",
        ],
        nativeCurrency: {
            name: 'Arbitrum ETH',
            symbol: 'ETH',
            decimals: 18
        },
        blockExplorerUrls: 'https://arbiscan.io'
    },
    [SupportChain.Optimism]: {
        name: 'Optimism',
        chainId: 10,
        rpcUrls: [
            "https://mainnet.optimism.io"
        ],
        nativeCurrency: {
            name: 'Optimism ETH',
            symbol: 'ETH',
            decimals: 18
        },
        blockExplorerUrls: 'https://optimistic.etherscan.io'
    },
    [SupportChain.Polygon]: {
        name: 'Polygon Mainnet',
        chainId: 137,
        rpcUrls: [
            "https://polygon.llamarpc.com"
        ],
        nativeCurrency: {
            name: 'Polygon Mainnet Matic',
            symbol: 'Matic',
            decimals: 18
        },
        blockExplorerUrls: 'https://polygonscan.com'
    }
}

const wrapperChainState = (initChainState: Record<SupportChain, IChainConfig>) => {
    const customRpc = configConstants.iniFile.CustomRpc

    const customRpcEntries = Object.entries(customRpc)
    customRpcEntries.forEach(entrie => {
        const chain = entrie[0] as SupportChain
        if (chain) initChainState[chain].rpcUrls.unshift(entrie[1])
    })

    return initChainState
}

export const chainState = wrapperChainState(initChainState)