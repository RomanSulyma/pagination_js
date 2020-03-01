
export const elementsNames = {
    inputText : '.input-text',
    inputButton : '.input-button',
    table : '.table',
    pageButtonLeft : '.page-button-left',
    pageButtonRight : '.page-button-right',
    tableRow : '.row'
};

export const getDataObject = () => {
    return document.querySelector(elementsNames.inputText).value;
};

const renderTableElem = (data) => {
    const tableRow = `<tr class="row">
        <th>${data.id}</th>
        <th>${data.text}</th>
    </tr>`;

    document.querySelector(elementsNames.table).insertAdjacentHTML("beforeend", tableRow);
};

export const renderTable = (page, dataArr) => {

    const start = (page - 1) * 10;
    const end = page * 10;

    const arrPerPage = dataArr.slice(start, end);

    arrPerPage.forEach(value => {
        renderTableElem(value);
    })

};

export const clearTable = () => {
    if(document.querySelector(elementsNames.tableRow) != null){
        document.querySelector(elementsNames.tableRow).innerHTML  = '';
    }

};

export const clearInput = () => {
  document.querySelector(elementsNames.inputText).value = '';
};