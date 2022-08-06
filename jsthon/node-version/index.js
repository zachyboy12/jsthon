function run_py_file(pythonFilePath) {
    /**
     * A function for running python files.
     * @param {string} pythonFilePath The path to the python file.
     */
    const spawn = require("child_process").spawn;
    const pythonProcess = spawn('python3',[pythonFilePath]);
    pythonProcess.stdout.on('data', (data) => {
        process.stdout.write(data.toString());
    });
    pythonProcess.stderr.on('data', (data) => {
        process.stdout.write(data.toString());
    });
};
function run_py(python_code) {
    /**
     * A function for running python on the spot.
     * @param {string} python_code The python code to execute.
     */
    const fptr = require('fs');
    fptr.writeFile("./node-version/run_python.py", python_code, function(err){});
    return run_py_file('./node-version/run_python.py');
}
module.exports.run_py_file = run_py_file;
module.exports.run_py = run_py;
