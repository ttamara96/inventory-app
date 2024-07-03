import { Product } from "@inventory/inventory-api/src/gql/graphql";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';

 const ProductList = () => {
    const columns: GridColDef<(typeof rows)[number]>[] = [
        { field: 'id', 
          headerName: 'ID',
          flex: 0.2
        },
        {
          field: 'name',
          headerName: 'Name',
          editable: true,
          flex: 0.5
        },
        {
          field: 'price',
          headerName: 'Price',
          editable: true,
          flex: 0.3
        }
      ];
      
      const rows: Product[] = [
        { id: "1", name: 'Product 1', price: 1500 },
        { id: "2", name: 'Product 2', price: 2200 },
        { id: "3", name: 'Product 3', price: 15000 },
        { id: "4", name: 'Product 4', price: 300 }
      ];

    return <>
        <Typography variant="h2" my={4}>
            List of Products
        </Typography>
        <DataGrid
            columns={columns}
            rows={rows}>
        </DataGrid>
    </>

}
export default ProductList;