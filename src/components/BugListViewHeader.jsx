// https://stackoverflow.com/questions/4647817/javascript-object-rename-key
import React from 'react';

import './BugListView.css'

let sortDirection = true;
let previousSortColumnName = '';

export default function BugListViewHeader(props) {
    // console.log("in bugHeader", props.headerInfo);

    // function renameKeys(obj, newKeys) {
    //     const keyValues = Object.keys(obj).map(key => {
    //         const newKey = newKeys[key] || key;
    //         return { [newKey]: obj[key] };
    //     });
    //     return Object.assign({}, ...keyValues);
    // }


    const bugListViewKeys = ['id', 'bugTitle', 'bugCreatedDate', 'bugAssignedTo', 'bugDueDate', 'bugStatus', 'bugSeverity', 'bugReproducibleFrequency'];
    // TODO update header names, but retain sort option with real key names
    // const bugListViewKeysToDisplay = ['id', 'title', 'createdDate', 'assigned to', 'due', 'status', 'severity', 'reproducable'];
    // debugger;
    let allKeys = Object.keys(props.headerInfo);
    let keysToShow = allKeys.filter( key => bugListViewKeys.includes(key));
    keysToShow = bugListViewKeys;

    // const newKeyNames = { bugTitle: "title", bugCreatedDate: "created"};
    // keysToShow = renameKeys(keysToShow, newKeyNames);

    // create initial sort based on first key in list
    // useEffect( () => {
    //     props.setBugList(sortColumn (props, bugListViewKeys[0]));
    // },[]);

    
    return (
        keysToShow.map( (key, index) => {
            return <th onClick={() => { props.setBugList( sortColumn(props, key) ); } } 
                key={index}>
                {key.toUpperCase()}
            </th>
        })
    )
}

function sortStringColumn (a, b, sortColumnName) {
    let comparison = 0;
    if (a[sortColumnName].toLowerCase() > b[sortColumnName].toLowerCase()) {
        comparison = (sortDirection) ? 1 : -1;
    } else if (a[sortColumnName].toLowerCase() < b[sortColumnName].toLowerCase()) {
        comparison = (sortDirection) ? -1 : 1;
    }
    return comparison;
}

function sortNumberColumn (a, b, sortColumnName) {
    let comparison = 0;
    if (a[sortColumnName] > b[sortColumnName]) {
        comparison = (sortDirection) ? 1 : -1;
    } else if (a[sortColumnName] < b[sortColumnName]) {
        comparison = (sortDirection) ? -1 : 1;
    }
    return comparison;
}

function sortColumn (props, sortColumnName) {
    if (previousSortColumnName === sortColumnName) {
        sortDirection = !sortDirection;
    } else {
        sortDirection = true;
        previousSortColumnName = sortColumnName;
    }

    const dataType = typeof props.bugList[0][sortColumnName];
    let newSort = [...props.bugList];

    switch (dataType) {
        case 'string':
            newSort.sort( (a, b) => sortStringColumn (a, b, sortColumnName));
            break;
        case 'number':
            newSort.sort( (a, b) => sortNumberColumn (a, b, sortColumnName));
            break;
        default:
            break;
    }
    return newSort;
}