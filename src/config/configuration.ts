import * as aws from "@aws-sdk/client-secrets-manager";

export async function loadExternalConfigs(): Promise<any> {
    return new Promise(async (resolve, reject) => {
        if (process.env.LOCAL_ENV === 'true') {
            resolve({});
        } else {
            let secretsJSON = await retrieveSecrets();
            resolve({
                dbHost: secretsJSON['dbHost'],
                dbPort: secretsJSON['dbPort'],
                dbUsername: secretsJSON['dbUsername'],
                dbPassword: secretsJSON['dbPassword'],
                dbName: secretsJSON['dbName'],
                accessKeyId: secretsJSON['accessKeyId'],
                secretAccessKey: secretsJSON['secretAccessKey'],
                region: secretsJSON['region'],
                uiUrl: secretsJSON['uiUrl']
            });
        }
    });
}


async function retrieveSecrets() {
    const region = "us-east-1";
    const client = new aws.SecretsManager({ region });
    const SecretId = "23DiscsAPISecrets";

    return new Promise<string>((resolve, reject) => {
        client.getSecretValue({ SecretId }, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(data.SecretString));
            }
        });
    });
}
