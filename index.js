#!/usr/bin/env node
import { openSync, readSync, closeSync } from 'node:fs';
import initEnvManager from './methods/initEnvManager.js';
import readEnvFromCurrentDir from './methods/readEnvFromCurrentDir.js';

const args = process.argv.slice(2)

if (args[0] == '--init' && args.length == 1){
    initEnvManager(args)
}else if (args[0] == "--init" && args[1] == "."){
   readEnvFromCurrentDir(args)
}else{
    console.log("invalid Command")
}

// const fd = openSync('.env', 'r'); 
// const buffer = Buffer.alloc(1024); 
// const bytesRead = readSync(fd, buffer, 0, buffer.length, 0); 

// closeSync(fd); 

// const content = buffer.toString('utf8', 0, bytesRead);
// console.log(content);
