"use client";
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';

export default function Page({
  children,
}: {
  children: React.ReactNode
})  {
  const { t } = useTranslation();
  return  <>
    <Typography variant="h2" my={4}>
      {t("inventory")}
    </Typography>
  </>
}