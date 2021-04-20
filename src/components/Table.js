import React, { useMemo } from 'react';
import MaterialTable from 'material-table';
import MOCK_DATA from './MOCK_DATA.json';


export const Table = () => {
    const newData = useMemo(() => MOCK_DATA, [])

    const columns = [
        {
            title: "Id",
            field: "id",
        },
        {
            title: "First Name",
            field: "first_name",
        },
        {
            title: "Last Name",
            field: "last_name",
        },
        {
            title: "Email",
            field: "email",
        },
        {
            title: "DOB",
            field: "DOB",
        },
        {
            title: "Age",
            field: "age",
        },
        {
            title: "Country",
            field: "country",
        },
    ]

    return (
        <div>
            <MaterialTable title="Material Table"
                data = {newData}
                columns = {columns}
                actions={[
                    {
                      icon: 'save',
                      tooltip: 'Save User',
                      onClick: (event, rowData) => {
                        // Do save operation
                      }
                    }
                  ]}
                options = {{
                    filtering : false,
                    exportButton: true,
                }}
                
            />
        </div>
    )
    
  };