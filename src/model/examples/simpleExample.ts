import Joi from "joi"
import { SupportChain } from "../../web3/type"
import { printer } from "web3-script-sdk/dist/utils"
import { ProjectChecker } from "web3-script-sdk"

export const runSimpleExample = async () => {
    // 参数校验器
    const checker = new ProjectChecker(`Example Params`)
    await checker.checkRpcLatency(SupportChain.Mainnet)
    checker.checkValidate({ name: 'homie_xu', age: 24 }, Joi.object({
        name: Joi.string().required(),
        age: Joi.number().required()
    })).sayResult()

    printer.info(`this is create-web3-script`)
}