import Typography from '@mui/material/Typography';

export default function Page({
  children,
}: {
  children: React.ReactNode
})  {
  return  <>
    <Typography variant="h2" my={4}>
      Inventory App
    </Typography>
  </>
}