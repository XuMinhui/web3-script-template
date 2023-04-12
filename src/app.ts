import inquirer from "inquirer";
import { runSimpleExample } from "./model/examples";
import { logger } from "web3-script-sdk/dist/utils";

const mainStart = async () => {
    enum RunModel {
        Examples
    }

    const { model } = await inquirer.prompt([{
        type: 'list',
        name: 'model',
        // default: Run_Model.LayerZero,
        message: `选择指定运行的项目？\n`,
        choices: [
            { name: `Examples`, value: RunModel.Examples }
        ]
    }])

    switch (model) {
        case RunModel.Examples:
            const { subModel } = await inquirer.prompt([{
                type: 'list',
                name: 'subModel',
                // default: Run_Model.LayerZero,
                message: `选择运行的模式？\n`,
                choices: [
                    { name: `Start Simple Example`, value: 'simple' }
                ]
            }])
            subModel === 'simple' && runSimpleExample()
            break;
        default:
            break;
    }

    // 挂载进程监听器，监听未捕获的进程错误
    process.on('uncaughtException', (error) => {
        logger.error(`Uncaught Exception: `, error)
        process.exit()
    })
}

mainStart()