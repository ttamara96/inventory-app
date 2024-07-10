import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface ProductFormDialogProps {
    openDialogLabel: string
}

export const ProductFormDialog: React.FC<ProductFormDialogProps> = ({ openDialogLabel }) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
       <Button 
            variant="contained" 
            color="secondary" 
            size="large" 
            onClick={handleClickOpen}>
            {openDialogLabel}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());

            //save request comes here

            handleClose();
          },
        }}
      >
        <DialogTitle>{openDialogLabel}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {t("fields-with-*-required")}
          </DialogContentText>
          <TextField
                autoFocus
                required
                id="name"
                name="name"
                label={t("product-name")}
                fullWidth
                variant="standard"
                margin="normal"/>
            <TextField
                required
                id="price"
                name="price"
                label={t("price") + " (Ft)"}
                type="number"
                fullWidth
                variant="standard"
                margin="normal"
                InputProps={{ inputProps: { min: 0 } }}/>
        </DialogContent>
        <DialogActions>
            <Button 
                onClick={handleClose}>
                {t("cancel")}
            </Button>
            <Button 
                type="submit" 
                variant="contained" 
                color="primary">
                {t("save")}
            </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}