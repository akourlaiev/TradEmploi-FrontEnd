/* tslint:disable */
// @ts-nocheck
const { writeFile, existsSync, mkdirSync } = require('fs');

require('dotenv').config();


function writeFileUsingFS(targetPath, environmentFileContent) {
  writeFile(targetPath, environmentFileContent, function (err) {
    if (err) {
      console.log(err);
    }
    if (environmentFileContent !== '') {
      console.log(`wrote variables to ${targetPath}`);
    }
  });
}

const envDirectory = './src/environments';

if (!existsSync(envDirectory)) {
  mkdirSync(envDirectory);
}

writeFileUsingFS('./src/environments/environment.ts', '');
writeFileUsingFS('./src/environments/authflow.ts', '');


const environmentFileContent = `

export const environment = ${process.env.ENVIRONMENT_FILE_CONTENT};
`;

const authflowFileContent = `
import { AuthConfig } from 'angular-oauth2-oidc';
const url = 'https://authentification-agent-tis.pe.intra/connexion/oauth2/agent/authorize';
export const authCodeFlowConfig: AuthConfig = ${process.env.AUTHFLOW_FILE_CONTENT};
`;



writeFileUsingFS('./src/environments/environment.ts', environmentFileContent);
writeFileUsingFS('./src/environments/authflow.ts', authflowFileContent);