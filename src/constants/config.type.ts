import { SupportChain } from "../web3/type"

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
    CustomRpc: Record<SupportChain, string>
}

export interface ICustomConfig extends IUniversalConfig {

}