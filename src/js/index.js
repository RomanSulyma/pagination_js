import * as View from './view';
import * as Pagination from './pagination';
import {elementsNames} from "./view";

    let ID = 0;
    let dataArr = [];

    class DataObj {
        constructor(text) {
            this.id = ID;
            this.text = text;
            ID += 1;
        }
    }

    const addElemToTable = () => {
       const dataObj = new DataObj(View.getDataObject());
       dataArr.push(dataObj);

       View.clearInput();
       View.clearTable();
       View.renderTable(Pagination.getPageNumber(), dataArr);

       Pagination.renderPageButtons(Pagination.getPageNumber(), Math.ceil(dataArr.length / 10));
    };


    const changePage = (pageClassName) => {
        if(pageClassName === 'page-button-left') {
            Pagination.changePageNumber(parseInt(Pagination.getPageNumber()) - 1);
        }
        if(pageClassName === 'page-button-right') {
            Pagination.changePageNumber(parseInt(Pagination.getPageNumber()) + 1);
        }

        View.clearTable();
        View.renderTable(Pagination.getPageNumber(), dataArr);
        Pagination.renderPageButtons(Pagination.getPageNumber(), Math.ceil(dataArr.length / 10));
    };

    document.querySelector('.input-button').addEventListener('click', event => {
        addElemToTable();
    });

    document.querySelector('.body').addEventListener('click', event => {
        const pageClassName = event.target.className;

        if(pageClassName ===  'page-button-left' || pageClassName === 'page-button-right') {
            changePage(pageClassName);
        }
    });