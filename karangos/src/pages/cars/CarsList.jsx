import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function CarsList() {

    const columns = [
   {
     field: 'id',
     headerName: 'Cód.',
     width: 90
   },
   {
     field: 'brand_model',
     headerName: 'Marca/Modelo',
     width: 250,
     renderCell: (params) => (
      <div>
         <strong>{params.row.brand}</strong> {params.row.model}
      </div>
     )
   },

   {
     field: 'color',
     headerName: 'Cor',
     width: 90,
   },
   {
     field: 'year_manufacture',
     headerName: 'Ano de fabricação',
     width: 150
   },
   {
     field: 'imported',
     headerName: 'Importado',
     width: 90,
     renderCell: (params) => (
        params.value ? 'SIM' : ''
     )
   },
   {
    field: 'plates',
    headerName: 'Placa',
    width: 120
   }
 ];




 const [cars, setCars] = React.useState([])


 async function loadData() {
   try {
     // Conectamos ao servidor remoto e esperamos uma resposta
     const response = await fetch('https://api.faustocintra.com.br/v2/cars')
     // Extraímos da resposta os dados em formato JSON
     const data = await response.json()
     // Armazenamos os dados na variável de estado
     setCars(data)
   }
   catch(error) {
     // Exibimos o erro no console, para efeitos de depuração
     console.error(error)
     // Informamos o erro ao usuário
     alert('ERRO: ' + error.message)
   }
 }

 React.useEffect(() => {
   loadData()
 }, [])


 return <>
   <Typography variant="h1" gutterBottom>
     Listagem de veículos
   </Typography>
   <Box sx={{ height: 400, width: '100%' }}>
     <DataGrid
       rows={cars}
       columns={columns}
       initialState={{
         pagination: {
           paginationModel: {
             pageSize: 5,
           },
         },
       }}
       pageSizeOptions={[5]}
       checkboxSelection
       disableRowSelectionOnClick
     />
   </Box>
 </>
}
