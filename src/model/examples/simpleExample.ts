import Joi from "joi"
import { printer } from "web3-script-sdk/dist/utils"
import { ProjectChecker } from "web3-script-sdk"
import { MainnetChain } from "web3-script-sdk/dist/web3"

export const runSimpleExample = async () => {
    // 参数校验器
    const checker = new ProjectChecker(`Example Params`)
    await checker.checkRpcLatency(MainnetChain.Ethereum)
    checker.checkValidate({ name: 'homie_xu', age: 24 }, Joi.object({
        name: Joi.string().required(),
        age: Joi.number().required()
    })).sayResult()

    printer.info(`this is create-web3-script`)
}