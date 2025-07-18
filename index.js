#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .name('p2p-filetransfer-cli')
  .description('A CLI tool for peer-to-peer file transfer')
  .version('1.0.0');


  program.command('send')
    .description('Send a file to a peer')
    .argument('<file>', 'File to send')
    .option('-p, --port <ip:port>', 'Port to use for sending', '127.0.0.1:3001')
    .action((file, options) => {
         console.log(`Sending file: ${file} to port: ${options.port}`);
    }); 

program.parse(process.argv)
