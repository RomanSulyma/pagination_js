import * as View from './view';
import * as Pagination from './pagination';

    let ID = 0;
    let dataArr = [];

    class DataObj {
        constructor(text) {
            this.id = ID;
            this.text = text;
            ID += 1;
        }
    }

    const addElemTotable = () => {
       const dataObj = new DataObj(View.getDataObject());

       dataArr.push(dataObj);

       View.clearInput();
       View.clearTable();

       View.renderTable(Pagination.getPageNumber(), dataArr);
       console.log(Pagination.getPageNumber());

       Pagination.deleteButtons();

       Pagination.renderPageButtons(Pagination.getPageNumber(), Math.ceil(dataArr.length / 10));
    };

    document.querySelector('.input-button').addEventListener('click', event => {
        addElemTotable();
    });

    document.querySelector('.body').addEventListener('click', event => {

    });