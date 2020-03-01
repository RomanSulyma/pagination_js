import {elementsNames} from './view';


export const changePageNumber = (attribValue) => {
 const attrib = document.querySelector(elementsNames.table).setAttribute('data-page', attribValue);
};

export const  getPageNumber = () => {
    return document.querySelector(elementsNames.table).getAttribute('data-page');
};

export const renderPageButtons = (page, allPages) => {

    if(page > 1) {
        document.querySelector(elementsNames.table).insertAdjacentHTML('afterend', `<input type="button" class="page-button-left" value="${page - 1}">`);
    }
    if(page < allPages) {
        document.querySelector(elementsNames.table).insertAdjacentHTML('afterend', `<input type="button" class="page-button-right" value="${page + 1}">`);
    }

};

export const deleteButtons = () => {
    if(document.querySelector(elementsNames.pageButtonLeft) != null){
        document.querySelector(elementsNames.pageButtonLeft).innerHTML  = '';
    }

    if(document.querySelector(elementsNames.pageButtonRight) != null){
        document.querySelector(elementsNames.pageButtonRight).innerHTML  = '';
    }
};
