function run_py_file(pathpy) {
    /**
     * A function for running python files.
     * @param {string} pathpy The path to the python file.
     */
    const spawn = require("child_process").spawn;
    const pythonProcess = spawn('python3',[pathpy]);
    pythonProcess.stdout.on('data', (data) => {
        process.stdout.write(data.toString());
    });
};
function run_py(python) {
    /**
     * A function for running python on the spot.
     * @param {string} python The python code to execute.
     */
    const fptr = require('fs');
    fptr.writeFile("main.py", python, function(err){});
    run_py_file('./main.py');
}
module.exports.run_py_file = run_py_file;
module.exports.run_py = run_py;
