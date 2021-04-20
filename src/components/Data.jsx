import React, { useMemo, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {useTable} from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import {Columns} from './columns'


export default function Data(){

    const columns = useMemo(() => Columns, [])
    const data = useMemo(() => MOCK_DATA, [])
    const tableInstance = useTable({
        columns: columns,
        data: data
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return (
        <div className="w-60">
            <div className="card">
                <div className="card-header">Joke Table</div>
                <table class="table table-dark table-striped" {...getTableProps()}>
                    <thead> 
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map(column => (
                                        <th scope="col" {...column.render('Header')}></th>
                                    ))
                                }
                            </tr>
                        ))}
                        
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {
                            rows.map((row) => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {
                                            row.cells.map((cell) => {
                                                return  <td {...cell.getCellProps()}>{cell.render('cell')}</td>
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }                                          
                    </tbody>
                </table>
              
            </div>
        </div>
    )
}