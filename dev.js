const spawn = require('child_process').execFile;

const server = spawn('nodemon', ['./server/server.js'], function(err, stdout, stderr){
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});

const transform = spawn('./node_modules/.bin/jsx', ['src/components/', 'lib/components/', '--no-cache-dir', '-w'], function(err, stdout, stderr){
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});

const bundle = spawn('./node_modules/.bin/watchify', ['-t', 'reactify', 'src/browser', '-o', 'public/js/bundle.js'], function(err, stdout, stderr){
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});
