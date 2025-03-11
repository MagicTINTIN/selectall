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

// function updateIframes() {
//     // apply to same-origin iframes
//     const iframes = document.querySelectorAll('iframe');
//     iframes.forEach(iframe => {
//         try {
//             const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
//             if (iframeDoc) {
//                 applyToDocument(iframeDoc, "text");
//             }
//         } catch (e) {
//             console.error("Cannot access iframe due to cross-origin restrictions.", e);
//         }
//     });

// }

// function applyToDocument(doc, value) {
//     if (doc.body) {
//         applyRecursively(doc.body, value);
//         updateIframes();

//         // for dynamic changes
//         const observer = new MutationObserver(mutations => {
//             for (let mutation of mutations) {
//                 mutation.addedNodes.forEach(node => {
//                     // only process element nodes
//                     if (node.nodeType === 1) {
//                         applyRecursively(node, value);
//                     }
//                 });
//             }
//             updateIframes();
//         });
//         observer.observe(doc.body, { childList: true, subtree: true });
//     }
// }


(function () {
    const style = document.createElement('style');
    style.textContent = `
      * {
        user-select: text !important;
        -webkit-user-select: text !important;
        -moz-user-select: text !important;
        -ms-user-select: text !important;
      }
    `;
    // Append to the head if available; otherwise, to the document element.
    (document.head || document.documentElement).appendChild(style);
})();


// applyToDocument(document, "text"); // else "none"
