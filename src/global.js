export const globaljs = (() => {    
    //Function List
    const newElement = (item) => {
        let element = document.createElement(item.tag);
        if (item.htmlString) { element.innerHTML = item.htmlString; };
        if (item.classId) { element.setAttribute('class', item.classId)};
        if (item.id) { element.setAttribute('id', item.id)};
        if (item.for) { element.setAttribute('for', item.for)};
        if (item.type) { element.setAttribute('type', item.type)};
        if (item.name) { element.setAttribute('name', item.name)};
        if (item.value) { element.setAttribute('value', item.value)};
        return element;
    };

    return {newElement:newElement}
})()