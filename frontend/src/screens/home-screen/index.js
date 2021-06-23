import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'firstName', headerName: 'First name', width: 200 },
  { field: 'lastName', headerName: 'Last name', width: 200 },
  {
    field: 'fullName',
    headerName: 'Full name',
    width: 160,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 200,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon',fullName: 'Snow Jon' , age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei',fullName: 'Snow Jon' ,  age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime',fullName: 'Snow Jon' ,  age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya',fullName: 'Snow Jon' ,  age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys',fullName: 'Snow Jon' ,  age: 34 },
  { id: 6, lastName: 'Melisandre', firstName: null,fullName: 'Snow Jon' ,  age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara',fullName: 'Snow Jon' ,  age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini',fullName: 'Snow Jon' ,  age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey',fullName: 'Snow Jon' ,  age: 65 },
];

const HomeScreen = () =>  {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}

export default HomeScreen;