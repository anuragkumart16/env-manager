import { mkdirSync, existsSync, rmSync } from 'node:fs';
import path from 'node:path';

function createDir(args,properties){
    const folderName = args[1]
    const envManagerDir = properties.envManagerDir
    const projectDir = path.join(envManagerDir,folderName)
    if(!existsSync(projectDir)){
        mkdirSync(projectDir, { recursive: true })
        console.log("Project Created Successfully!")
    }else{
        console.log("Project Already Exists!")
    }
}

function deleteDir(args,properties){
    const projectName = args[1]
    const envManagerDir = properties.envManagerDir
    const projectDir = path.join(envManagerDir,projectName)
    if(!existsSync(projectDir)){
        console.log("Project Not Found!")
    }else{
        rmSync(projectDir,{ recursive: true, force: true })
        console.log("Project Deleted Successfully!")
    }
}

export { createDir , deleteDir }