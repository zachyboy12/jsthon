def runJsFile(pathjs):
    import os
    os.system('node ' + pathjs)
def runJs(js):
    open('run_js.js', 'w').write(js)
    runJsFile('./run_js.js')
