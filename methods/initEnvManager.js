import { mkdirSync, existsSync } from 'node:fs';
import path from 'node:path';
import os from 'node:os';

function initEnvManager(args,properties){
    const homeDir = properties.homeDir
    const envManagerDir = properties.envManagerDir
    
    if (existsSync(envManagerDir)){
        console.log("Env Manager is already initialized...")
    }else{
        mkdirSync(envManagerDir, { recursive: true })
        console.log("Env Manager is initialized...")
    }
}

export default initEnvManager;