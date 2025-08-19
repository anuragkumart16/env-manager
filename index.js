#!/usr/bin/env node
import { openSync, readSync, closeSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import initEnvManager from './methods/initEnvManager.js';
import readEnvFromCurrentDir from './methods/readEnvFromCurrentDir.js';
import { createDir, deleteDir } from './methods/navigationCommands.js';

const args = process.argv.slice(2)
const homeDir = os.homedir()
const envManagerDir = path.join(homeDir, '.envManager')

const properties = {
    homeDir: homeDir,
    envManagerDir: envManagerDir
}

if (args[0] == '--init' && args.length == 1) {
    initEnvManager(args, properties)
} else if (args[0] == "--init" && args[1] == ".") {
    readEnvFromCurrentDir(args, properties)
} else if (args[0] === "create-project") {
    createDir(args, properties)
} else if (args[0] === "delete-project") {
    deleteDir(args, properties)
} else {
    console.log("invalid Command")
}


