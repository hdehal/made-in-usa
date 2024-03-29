import React from 'react';
import { textFilter } from 'react-bootstrap-table2-filter';
import Badge from 'react-bootstrap/Badge';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Twemoji from './twemoji'

// Define sortCaret
const sortFunc = (order, column) => {
    if (!order) return (<span className="order"><span className="dropdown"><span className="caret"></span></span><span className="dropup"><span className="caret"></span></span></span>);
    else if (order === 'asc') return (<span className="react-bootstrap-table-sort-order"><span className="caret"></span></span>);
    else if (order === 'desc') return (<span className="react-bootstrap-table-sort-order dropup"><span className="caret"></span></span>);
    return null;
}

// JSON table column data
let nameFilter;

export const tableColumns = [
    {
        dataField: 'id',
        text: 'ID',
        hidden: true

    }, {
        dataField: 'company',
        text: 'Company',
        sort: true,
        sortCaret: sortFunc,
        headerStyle: (column, colIndex) => {
            return { minWidth: '175px' };
        }
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
        sortCaret: sortFunc,
        headerStyle: (column, colIndex) => {
            return { minWidth: '175px' };
        }
    }, {
        dataField: 'gender',
        text: 'Gender',
        sort: true,
        sortCaret: sortFunc,
        headerStyle: (column, colIndex) => {
            return { minWidth: '120px' };
        }
    }, {
        dataField: 'tags',
        text: <span className='tagsLabel'>Tags</span>,
        sort: true,
        sortCaret: sortFunc,
        formatter: (cell) => {
            return cell.map(x => {
                return <>
                    <OverlayTrigger
                        key="top"
                        placement="top"
                        overlay={
                            <Tooltip>
                                {x === 'Accessories' ? "Bags, belts, sunglasses, etc."
                                    : x === 'Bottoms' ? "Pants, shorts, skirts, etc."
                                        : x === 'Dresses' ? <><Twemoji emoji="👗" /></>
                                            : x === 'Formal' ? "Blazers, suits, etc."
                                                : x === 'Shoes' ? <><Twemoji emoji="👟" /></>
                                                    : x === 'Sports' ? <><Twemoji emoji="🏃‍♀️" /></>
                                                        : x === 'Swim' ? "Bikinis, trunks, etc."
                                                            : x === 'Tops' ? "Shirts, OCBD, etc."
                                                                : x === 'Undergarments' ? "Socks, underwear, etc."
                                                                    : null}
                            </Tooltip>
                        }
                    >
                        <Badge pill variant="primary">{x}</Badge>
                    </OverlayTrigger></>;
            });
        },
        filter: textFilter({
            className: 'form-control-sm',
            placeholder: 'Search by tag',
            // onClick: e => console.log(e)
            getFilter: (filter) => {
                nameFilter = filter;
            }
        }),
    }];

document.onkeydown = function (evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        // console.log("Escape key pressed")
        nameFilter('');
    }
};