import { existsSync, readFileSync } from "fs";
import parsedArgs from 'minimist'
import path from "path";
import ini from 'ini'
import { ICustomConfig, IEnv } from "./config.type";

// 命令执行函数
const PROCESS_ARGV = parsedArgs(process.argv)

// 环境路径
const DIR_ROOT = process.cwd()
const ENV: IEnv = existsSync(path.join(DIR_ROOT, 'package.json')) ? 'NODE_DEV' : 'NODE_PROD'
const DIR_CONFIG = existsSync(path.join(DIR_ROOT, '/config')) ? path.join(DIR_ROOT, '/config') : DIR_ROOT
const DIR_DATABASE = ENV === 'NODE_DEV' ? path.join(DIR_ROOT, '/db') : path.join(DIR_ROOT, '/.db')
const DIR_CACHE = ENV === 'NODE_DEV' ? path.join(DIR_ROOT, '/cache') : path.join(DIR_ROOT, '/.cache')

export default {
    env: ENV,
    dirRootPath: {
        root: DIR_ROOT,
        config: DIR_CONFIG,
        database: DIR_DATABASE,
        cache: DIR_CACHE
    },
    iniFile: ini.parse(readFileSync(path.join(DIR_CONFIG, 'config.ini'), 'utf-8')) as ICustomConfig,
    processArgv: {
        entryFile: (PROCESS_ARGV['f'] || PROCESS_ARGV['file']) as (string | undefined)
    }
}