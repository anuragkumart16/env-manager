import { readFileSync,existsSync } from 'node:fs';
import path from 'node:path';

function readEnvFromCurrentDir(args,properties){
    const currentDir = process.cwd();
    const envFile = path.join(currentDir, '.env');
    if (existsSync(envFile)){
        let envFileContent = readFileSync(envFile, 'utf8');
        console.log(envFileContent);
    }else{
        console.log("no .env file found in the current directory!")
    }
}

export default readEnvFromCurrentDir;