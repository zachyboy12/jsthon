let startTime = performance.now();
console.log('Initializing features...')
console.log('Loading "jsthon-" tag...')


class Jsthon extends HTMLDivElement {
    constructor () {
        super();
    }
}


customElements.define('jsthon-', Jsthon, {extends: 'div'})


console.log('Loaded jsthon tag...')


class new_$$ {
    node (id) {
        return document.getElementById(id)
    }
    create_node (element_name, text) {
        const newElem = document.createElement(element_name);
        const comment = document.createComment('Created by JSthon');
        newElem.appendChild(comment);
        if (text != undefined) {
            if (text === false) {
                
            }
            if (text != false) {
                const textNode = document.createTextNode(text);
                newElem.appendChild(textNode);
            }
        }
        return newElem;
    }
    insert_node (created_element) {
        const current = document.getElementById(created_element.tagname);
        document.body.insertBefore(created_element, current)
    }
    get_value(element_id) {
        return document.getElementById(element_id).value
    }
    remove_node (element_id) {
        try {
            document.body.removeChild(document.getElementById(element_id))
        }
        catch {

        }
    }
    set_node_attribute (node, attribute_name, attribute_value) {
        node.setAttribute(attribute_name, attribute_value)
    }
}


console.log('Loading main functions and variables...')


function printnode (message) {
    const newPyOut = document.createElement("jsthon-");
    const newContent = document.createTextNode(message);
    const comment = document.createComment('Created by JSthon')
    newPyOut.appendChild(comment);
    newPyOut.appendChild(newContent);
    const currentOut = document.getElementById("jsthon-");
    document.body.insertBefore(newPyOut, currentOut);
}


function input (prompt, type, id, size) {
    const newPyOut = document.createElement("input");
    const comment = document.createComment('Created by JSthon');
    newPyOut.appendChild(comment);
    if (prompt != undefined) {
        newPyOut.setAttribute('placeholder', prompt);
    }
    if (size != undefined) {
        newPyOut.setAttribute('style', 'width: ' + size);
    }
    if (type != undefined) {
        newPyOut.setAttribute('type', type);
    }
    if (id != undefined) {
        newPyOut.setAttribute('id', id)
    }
    const currentOut = document.getElementById("input");
    document.body.insertBefore(newPyOut, currentOut);
}


function button (text, onclick, id, size) {
    const pyButton = document.createElement("button");
    const pyOut = document.createElement("jsthon-")
    const comment = document.createComment('Created by JSthon');
    pyOut.appendChild(comment);
    if (text != undefined) {
        pyButton.innerHTML = text;
    }
    if (onclick != undefined) {
        pyButton.onclick = onclick;
    }
    if (size != undefined) {
        pyButton.setAttribute('width', size)
    }
    if (id != undefined) {
        pyButton.setAttribute('id', id)
    }
    pyOut.append(pyButton);
    const currentButton = document.getElementById("button");
    document.body.insertBefore(pyOut, currentButton);
}


function pyprint (message) {
    console.log(message)
}


function pyinput (prompt_text) {
    return prompt(prompt_text)
}


function end () {
    const newPyOut = document.createElement("br");
    const currentOut = document.getElementById("br");
    document.body.insertBefore(newPyOut, currentOut);
}


function onkeylower (keyname, ifclicked) {
    document.body.addEventListener("keydown", (event) => {
        if (event.key === keyname) {
            ifclicked()
        }
    })
}


function onkeylift (keyname, ifclicked) {
    document.body.addEventListener("keyup", (event) => {
        if (event.key === keyname) {
            ifclicked()
        }
    })
}


let $$ = new new_$$();


console.log('Loaded all features.')
let endTime = performance.now();
let loadingTime = endTime - startTime;
console.log(`Time taken: ${loadingTime} milliseconds`)
