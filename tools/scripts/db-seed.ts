import { createConnection } from 'typeorm';
const args = require('minimist')(process.argv.slice(2));

const VERBOSE = args['V'] || false;
const FILE = args['f'] || './infrastructure/migrations/seed-data.sql';

function getSeedCommands(): Promise<string[]> {
	const fs = require('fs');
	const readline = require('readline');

	console.log('generating seed commands...');

	const is = fs.createReadStream(FILE);
	const outstream = new (require('stream'))();
	const rl = readline.createInterface(is, outstream);
	const seedCommands: string[] = [];

	return new Promise(function(resolve, reject) {
		rl.on('line', function(line) {
			if (line !== '') {
				seedCommands.push(line);
			}
		});

		rl.on('close', function(line) {
			resolve(seedCommands);
		});
	});
}

function logError(error) {
	console.log('Error: ', error.message);
}

createConnection()
	.then(async connection => {
		try {
			const commands = await getSeedCommands();
			let insertionCount = 0;
			let insertionErrorsCount = 0;

			if (VERBOSE) {
				console.log(`processing (${commands.length}) seed commands.`);
			}

			const commandQueue = commands.map(async command => {
				try {
					return await connection
						.createQueryRunner()
						.query(command)
						.then(() => insertionCount++);
				} catch (error) {
					insertionErrorsCount++;
					if (VERBOSE) {
						logError(error);
					}
				}
			});
			const result = await Promise.all(commandQueue);
			console.log(`Inserted (${insertionCount}) records.`);
			console.log(`(${insertionErrorsCount}) errors.`);
		} catch (error) {
			logError(error);
			connection.close();
			process.exit(1);
		}
		connection.close();
		process.exit(0);
	})
	.catch(logError);
