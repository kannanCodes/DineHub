import { useEffect, useState } from "react";
import type { FormEvent } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";

import type {
  Restaurant,
  CreateRestaurantData,
  UpdateRestaurantData,
} from "../types/restaurant.types";
import { validateRestaurantForm } from "../validators/restaurant.validator";

interface RestaurantFormProps {
  open: boolean;
  editTarget: Restaurant | null; // null = create mode, Restaurant = edit mode
  onSubmit: (data: CreateRestaurantData | UpdateRestaurantData) => void;
  onClose: () => void;
}

const EMPTY_FORM: CreateRestaurantData = { name: "", address: "", contact: "" };

const RestaurantForm = ({
  open,
  editTarget,
  onSubmit,
  onClose,
}: RestaurantFormProps) => {
  const [formData, setFormData] = useState<CreateRestaurantData>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof CreateRestaurantData, string>>>({});

  // When editTarget changes, pre-fill the form (edit) or reset it (create)
  useEffect(() => {
    setErrors({});
    if (editTarget) {
      setFormData({
        name: editTarget.name,
        address: editTarget.address,
        contact: editTarget.contact,
      });
    } else {
      setFormData(EMPTY_FORM);
    }
  }, [editTarget, open]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors = validateRestaurantForm(formData);
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
    }
  };

  const handleChange = (field: keyof CreateRestaurantData) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = event.target.value;
    if (field === "contact") {
      value = value.replace(/\D/g, "");
    }
    
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        {editTarget ? "Edit Restaurant" : "Add Restaurant"}
      </DialogTitle>

      <Stack component="form" onSubmit={handleSubmit}>
        <DialogContent>
          <Stack spacing={2}>
            <TextField
              label="Restaurant Name"
              value={formData.name}
              onChange={handleChange("name")}
              error={!!errors.name}
              helperText={errors.name}
              fullWidth
            />

            <TextField
              label="Address"
              value={formData.address}
              onChange={handleChange("address")}
              error={!!errors.address}
              helperText={errors.address}
              fullWidth
            />

            <TextField
              label="Contact"
              value={formData.contact}
              onChange={handleChange("contact")}
              error={!!errors.contact}
              helperText={errors.contact}
              type="tel"
              fullWidth
            />
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose} color="inherit">
            Cancel
          </Button>

          <Button type="submit" variant="contained">
            {editTarget ? "Save Changes" : "Add Restaurant"}
          </Button>
        </DialogActions>
      </Stack>
    </Dialog>
  );
};

export default RestaurantForm;