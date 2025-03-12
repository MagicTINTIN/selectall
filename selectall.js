function setUserSelect(element, value) {
    element.style.userSelect = value;
    element.style.webkitUserSelect = value; // WebKit-based browsers (Chrome, Safari)
    element.style.MozUserSelect = value; // Firefox
    element.style.msUserSelect = value; // Internet Explorer (lol)
}

function applyRecursively(element, value) {
    setUserSelect(element, value);
    element.style.background = "red";
    for (let child of element.children) {
        applyRecursively(child);
    }
}

// function applyRecursively1(element) {
//   // setUserSelect(element, value);
//   element.style.background = "red";
//   for (let child of element.children) {
//       applyRecursively(child);
//   }
// }

function updateIframes() {
    // apply to same-origin iframes
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            if (iframeDoc) {
                // applyToDocument(iframeDoc, "text");
                applyRecursively(iframeDoc, "text");
            }
        } catch (e) {
            console.error("Cannot access iframe due to cross-origin restrictions.", e);
        }
    });

}

setInterval(() => {
  updateIframes();


document.addEventListener('mousemove', (event) => {
  // console.log('Currently hovered:', event.target);
  // event.target.style.background = "red";
  event.target.style.filter = "invert(1)";
});

}, 2000);

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

// document.addEventListener('mousemove', () => {
//   // let hoveredElement = document.querySelector(':hover');
//   // // console.log(hoveredElement);
//   // hoveredElement.style.background = "red";
//   document.activeElement.style.background = "red";
// });

document.addEventListener('mousemove', (event) => {
  // console.log('Currently hovered:', event.target);
  // event.target.style.background = "red";
  event.target.style.filter = "invert(1)";
});


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

// browser.browserAction.onClicked.addListener(tab => {
//   console.log("CLICKED");
  
// })

// const browserAPI = typeof browser !== "undefined" ? browser : chrome;
// browserAPI.action.onClicked.addListener((tab) => {
//     console.log("Extension icon clicked!");
//     browserAPI.scripting.executeScript({
//         target: { tabId: tab.id },
//         func: () => alert("Hello from the extension!")
//     });
// });

// chrome.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       func: myInjectedScript
//   });
// });

// function myInjectedScript() {
//   alert("Hello from the extension toolbar!");
// }