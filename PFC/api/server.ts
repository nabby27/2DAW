import app from './src/app';

const port = process.env.API_PORT;

async function run() {
    await app.listen(port);
    console.log('server run on port: ' + port);
}

run();
