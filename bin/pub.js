const execSync = require('child_process').execSync;

function publish() {
  const beta = process.argv.indexOf('--beta') > -1;
  const official = 'https://registry.npmjs.org/';
  const registry = execSync('npm config get registry').toString().trim();
  if (registry !== official) {
    execSync(`npm config set registry ${official}`);
  }
  try {
    execSync(`npm publish${beta ? ' --tag=beta' : ''}`, { stdio: 'inherit' });
  } catch (e) {
    if (registry !== official) {
      execSync(`npm config set registry ${registry}`);
    }
    throw e;
  }
}

publish();
