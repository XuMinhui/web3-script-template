import { SupportChainType } from "web3-script-sdk/dist/web3"

export type IEnv = 'NODE_DEV' | 'NODE_PROD'

export interface IUniversalAccount {
    address: string,
    privateKey: string
}

export interface IUniversalConfig {
    Environment: {
        proxy_default?: string,
        proxy_pools?: string,
    },
    CustomRpc: Record<SupportChainType, string>
}

export interface ICustomConfig extends IUniversalConfig {

}