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
                region: secretsJSON['region'],
                uiUrl: secretsJSON['uiUrl'],
                jwtSecret: secretsJSON['jwtSecret'],
            });
        }
    });
}


async function retrieveSecrets() {
    console.log('retireve')
    const region = "us-east-1";
    const client = new aws.SecretsManager({ region });
    const SecretId = "23DiscsAPISecrets";

    console.log(client)
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
