/*
const { spawn } = require('child_process')
const result = spawn('command');

result.stdout.on('data', callback);


const spawn = require('child_process').spawn;
const fs = require('fs');

    const branch = spawn('git branch');
    streamIn.pipe(branch.stdin);
    proc.stdout.pipe(resp);
    */
var  spawn = require('child_process').spawn,
gitbranch = spawn('git', ['branch'])

gitbranch.stdout.on('data', function (data) {
  console.log('gitbranch stdout: ' + data)
})
