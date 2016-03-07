var spawn = require('child_process').execFile;

var server = spawn('nodemon', ['./server/server.js'], function(err, stdout, stderr){
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});

var transform = spawn('./node_modules/.bin/jsx', ['src/components/', 'lib/components/', '--no-cache-dir', '-w'], function(err, stdout, stderr){
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});

var bundle = spawn('./node_modules/.bin/watchify', ['-t', 'reactify', 'src/browser', '-o', 'public/js/bundle.js'], function(err, stdout, stderr){
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});
