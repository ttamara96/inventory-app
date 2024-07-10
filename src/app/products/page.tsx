"use client";
import { Product } from "@inventory/inventory-api/src/gql/graphql";
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { getProductsHandler } from "./products.service";
import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import { ProductFormDialog } from "../_components/ProductFormDialog/ProductFormDialog";

 const ProductList = () => {
    const { t } = useTranslation();
    const [ products, setProducts ] = useState<Product[]>([]);
    const columns: GridColDef<(typeof products)[number]>[] = [
        { field: 'id', 
          headerName: t('id'),
          flex: 0.2
        },
        {
          field: 'name',
          headerName: t('name'),
          flex: 0.5
        },
        {
          field: 'price',
          headerName: t('price'),
          flex: 0.3
        }
    ];

    const getProducts = async () => {
      const productsResponse = await getProductsHandler();
      if(productsResponse.data) {
        setProducts(productsResponse.data);
      }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return <>
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          justifyContent="space-between"
          alignItems="center" 
          my={2}>
          <Typography 
            variant="h2" 
            my={2}>
            {t('list-of-products')}
          </Typography>
          <ProductFormDialog openDialogLabel={t('new-product')}></ProductFormDialog>
        </Stack>
        <DataGrid
          autoHeight
          columns={columns}
          rows={products}
          slots={{ toolbar: GridToolbar }}>
        </DataGrid>
    </>

}
export default ProductList;