function setUserSelect(element, value) {
    element.style.userSelect = value;
    element.style.webkitUserSelect = value; // WebKit-based browsers (Chrome, Safari)
    element.style.MozUserSelect = value; // Firefox
    element.style.msUserSelect = value; // Internet Explorer (lol)
}

function applyRecursively(element, value) {
    setUserSelect(element, value);
    for (let child of element.children) {
        applyRecursively(child, value);
    }
}

applyRecursively(document.body, "text"); // use "none" to disable selection
