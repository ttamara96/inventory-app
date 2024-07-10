"use client";
import { Product } from "@inventory/inventory-api/src/gql/graphql";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { getProductsHandler } from "./products.service";
import { useEffect, useState } from "react";

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
          editable: true,
          flex: 0.5
        },
        {
          field: 'price',
          headerName: t('price'),
          editable: true,
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
        <Typography 
          variant="h2" 
          my={4} 
          >
          {t('list-of-products')}
        </Typography>
        <DataGrid
            columns={columns}
            rows={products}>
        </DataGrid>
    </>

}
export default ProductList;