export const globaljs = (() => {
    // Cache Dom
    const cacheDom = (() => {
        let body = document.getElementsByTagName('body')
        return { body: body};
    })();


    // Function List
    const newElement = (item) => {
        let element = document.createElement(item.tag);
        if (item.htmlString) { element.innerHTML = item.htmlString; }
        if (item.classId) { element.setAttribute('class', item.classId)}
        if (item.id) { element.setAttribute('id', item.id)}
        if (item.for) { element.setAttribute('for', item.for)}
        if (item.type) { element.setAttribute('type', item.type)}
        if (item.name) { element.setAttribute('name', item.name)}
        if (item.value) { element.setAttribute('value', item.value)}
        if (item.cols) { element.setAttribute('cols', item.cols)}
        if (item.rows) { element.setAttribute('rows', item.rows)}
        return element;
    };

    const pageGridContainer = () => {
        let pageGridContainer = {
            tag: 'div',
            id: 'pageGridContainer',
        }

        return globaljs.newElement(pageGridContainer)
    }

    // Render to DOM
    const render = (() => {
        const bodyAppendChild = (element) =>{
            cacheDom.body[0].appendChild(element);
        };

        const removePrev = () => {
            cacheDom.body[0].lastElementChild.remove();
        };

        const removeElement = (element) =>{
            element.remove();
        };

        return {bodyAppendChild: bodyAppendChild, removePrev:removePrev, removeElement:removeElement};
    })();


    return {newElement, pageGridContainer ,render}

})()