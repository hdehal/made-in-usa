import React from 'react';
import Badge from 'react-bootstrap/Badge'

// Define sortCaret
export const sortFunc = (order, column) => {
    if (!order) return (<span className="order"><span className="dropdown"><span className="caret"></span></span><span className="dropup"><span className="caret"></span></span></span>);
    else if (order === 'asc') return (<span className="react-bootstrap-table-sort-order"><span className="caret"></span></span>);
    else if (order === 'desc') return (<span className="react-bootstrap-table-sort-order dropup"><span className="caret"></span></span>);
    return null;
  }
  
// JSON table column data
export const tableColumns = [
{
    dataField: 'id',
    text: 'ID',
    hidden: true
    
}, {
    dataField: 'company',
    text: 'Company',
    sort: true,
    sortCaret: sortFunc
}, {
    dataField: 'url',
    text: 'URL',
    sort: true,
    sortCaret: sortFunc,
    formatter: (rowContent, row) => { return <><a href={rowContent} target="_blank" rel="noopener noreferrer">{rowContent}</a></>; }
    }, {
    dataField: 'loc',
    text: 'Location',
    sort: true,
    sortCaret: sortFunc
}, {
    dataField: 'gender',
    text: 'Gender',
    sort: true,
    sortCaret: sortFunc
}, {
    dataField: 'tags',
    text: 'Tags',
    sort: true,
    formatter: (cell) => {
        if (cell.length === 1) {
            return cell;
          } else {
            return cell.map(x => {
                return <><Badge pill variant="primary">{x}</Badge></>;
            });
          }
      }
}];