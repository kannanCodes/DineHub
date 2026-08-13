import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

interface ConfirmDialogProps {
  open: boolean;
  restaurantName: string;
  onConfirm: () => void;
  onCancel: () => void;
  isDeleting?: boolean;
}

const ConfirmDialog = ({
  open,
  restaurantName,
  onConfirm,
  onCancel,
  isDeleting,
}: ConfirmDialogProps) => {
  return (
    <Dialog open={open} onClose={isDeleting ? undefined : onCancel}>
      <DialogTitle>Delete Restaurant</DialogTitle>

      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete <strong>{restaurantName}</strong>?
          This action cannot be undone.
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={onCancel} color="inherit" disabled={isDeleting}>
          Cancel
        </Button>

        <Button onClick={onConfirm} color="error" variant="contained" disabled={isDeleting}>
          {isDeleting ? "Deleting..." : "Delete"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
