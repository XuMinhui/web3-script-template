export enum SupportChain {
    Mainnet = 'Mainnet',
    Binance = 'Binance',
    Arbitrum = 'Arbitrum',
    Optimism = 'Optimism',
    Polygon = 'Polygon'
}

export interface IChainConfig {
    name: string,
    chainId: number,
    rpcUrls: string[],
    nativeCurrency: {
        name: string,
        symbol: string,
        decimals: number,
    },
    blockExplorerUrls: string
}

export type AssetCurrencyType = 'NATIVE' | 'ERC20'
export type AssetNftType = 'ERC721' | 'ERC1155'
export type AssetType = AssetCurrencyType | AssetNftType