const path = require('path');
const s3 = require('s3');
const rc = require('rc');
const ProgressBar = require('progress');

const packageJson = require('../package.json');


const appConfig = rc('skeukit', {});


function upload(params, onProgress) {
  const client = s3.createClient({
    maxAsyncS3: 20,                       // default
    s3RetryCount: 3,                      // default
    s3RetryDelay: 1000,                   // default
    multipartUploadThreshold: 20971520,   // default (20 MB)
    multipartUploadSize: 15728640,        // default (15 MB)
    s3Options: {
      accessKeyId: appConfig.s3.accessKeyId,
      secretAccessKey: appConfig.s3.secretAccessKey,
      region: appConfig.s3.region,
    },
  });

  return new Promise((resolve, reject) => {
    const uploader = client.uploadDir(params);
    uploader.on('progress', () => {
      const percentage = (uploader.progressAmount / uploader.progressTotal) * 100;
      if ( ! isNaN(percentage)) {
        onProgress(percentage);
      }
    });
    uploader.on('end', () => resolve());
    uploader.on('error', (err) => reject(err));
  });
}


function main() {
  const isDev = process.argv.find((a) => a === '--dev' || a === '-d');
  const isTest = process.argv.find((a) => a === '--test' || a === '-t');

  const version = isTest ? 'test' : (isDev ? 'dev' : packageJson.version);

  const params = {
    localDir: path.resolve(__dirname, '../dist'),
    deleteRemoved: true,  // whether to remove s3 objects that have no corresponding local file.
    s3Params: {
      Bucket: 'nicmosc-dev',
      Prefix: `skeukit/${version}`
    },
  };

  const progressBar = new ProgressBar(':percent [:bar] eta :etas', {
    complete: '=',
    incomplete: ' ',
    width: 30,
    total: 100,
  });

  console.log('Syncing to s3:\n');
  progressBar.update(0);
  return upload(params, (percentage) => progressBar.update(percentage / 100))
    .then(() => console.log('Upload successful'))
    .catch((err) => console.log(`Upload failed: ${err.stack}`));
}


main();
