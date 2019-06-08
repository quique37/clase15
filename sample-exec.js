/*
const { exec } = require('child_process')
exec('git',['branch'] (err, stdout, stderr))
	console.log(stdout)
*/
    var  exec = require('child_process').exec,
gitbranch = exec('git', ['branch'])

gitbranch.stdout.on('data', function (data) {
  console.log('gitbranch stdout: ' + data)
})
