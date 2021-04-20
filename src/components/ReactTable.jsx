import React from 'react'
import {myData as mockData} from '../data'
import {useMemo} from 'react';
import { useTable } from 'react-table';



function ReactTable() {
    const data = useMemo(() => mockData, []);
    const columns = useMemo(() => [
        {
            Header: 'Title',
            accessor: 'title'
          },
          {
            Header: 'Author',
            accessor: 'authors'
          },
          {
            Header: 'Pages',
            accessor: 'num_pages'
          },
          {
            Header: 'Rating',
            accessor: 'rating'
          }
    ], []);

    const tableInstance = useTable({ columns, data });
const {
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow
} = tableInstance;
return (
  <table className="tableDark" {...getTableProps()} style={{ border: 'solid 1px blue' }}>
    <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th scope="row"
              {...column.getHeaderProps()}
              style={{
                background: '#657',
                color: 'white',
                fontWeight: 'bold'
              }}
            >
              {column.render('Header')}
            </th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody {...getTableBodyProps()}>
      {rows.map(row => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => {
              return (
                <td
                  {...cell.getCellProps()}
                  style={{
                    padding: '10px',
                    border: 'solid 0.6px gray',
                    background: '#fff'
                  }}
                >
                  {cell.render('Cell')}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  </table>
);
}

export default ReactTable
