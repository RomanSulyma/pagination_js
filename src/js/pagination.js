import {elementsNames} from './view';


export const changePageNumber = (attribValue) => {
 document.querySelector(elementsNames.table).setAttribute('data-page', attribValue);
};

export const  getPageNumber = () => {
    return document.querySelector(elementsNames.table).getAttribute('data-page');
};

export const renderPageButtons = (page, allPages) => {
    deleteButtons();
    if(page > 1) {
        document.querySelector(elementsNames.table).insertAdjacentHTML('afterend', `<input type="button" class="page-button-left" value="LEFT">`);
    }
    if(page < allPages) {
        document.querySelector(elementsNames.table).insertAdjacentHTML('afterend', `<input type="button" class="page-button-right" value="RIGHT">`);
    }
};

    const deleteButtons = () => {

    if(document.querySelector(elementsNames.pageButtonLeft) != null){
        let leftElem = document.querySelector(elementsNames.pageButtonLeft);
        leftElem.parentNode.removeChild(leftElem);
    }
    if(document.querySelector(elementsNames.pageButtonRight) != null){
       let rightElem =  document.querySelector(elementsNames.pageButtonRight);
       rightElem.parentNode.removeChild(rightElem);
    }
};
