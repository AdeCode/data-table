import React from 'react';
import {myData as mockData} from '../data';
import MaterialTable from 'material-table';
import Table from './Table'

function Material() {
    const columns = [
        {
          title: "Name",
          field: "name",
        },
        {
          title: "Email",
          field: "email",
        },
        {
          title: "Age",
          field: "age",
        },
        {
          title: "Gender",
          field: "gender",
        },
      ];
    return (
        <div style={{ maxWidth: '100%' }}>
            <MaterialTable columns={columns} data={Table} title='Books Directory' />
        </div>
    )
}

export default Material
