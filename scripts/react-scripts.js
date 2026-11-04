// react-scripts 3 / webpack 4 uses a hash algorithm disabled by newer Node
// OpenSSL defaults. Keep this compatibility flag scoped to this app's CLI.
const { spawnSync } = require('child_process');

const command = process.argv[2];
const allowedCommands = new Set(['start', 'build']);

if (!allowedCommands.has(command)) {
  throw new Error(`Unsupported react-scripts command: ${command || '(missing)'}`);
}

const flag = '--openssl-legacy-provider';
const env = { ...process.env };
const nodeOptions = env.NODE_OPTIONS || '';
if (!nodeOptions.includes(flag)) env.NODE_OPTIONS = `${nodeOptions} ${flag}`.trim();

const scriptPath = require.resolve(`react-scripts/scripts/${command}`);
const result = spawnSync(process.execPath, [scriptPath], { stdio: 'inherit', env });
process.exit(result.status === null ? 1 : result.status);
