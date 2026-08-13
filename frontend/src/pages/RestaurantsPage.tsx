import { useEffect, useState } from "react";

import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Snackbar,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import RestaurantTable from "../components/RestaurantTable";
import RestaurantForm from "../components/RestaurantForm";
import ConfirmDialog from "../components/ConfirmDialog";

import {
  getRestaurants,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} from "../api/restaurantApi";

import type {
  Restaurant,
  CreateRestaurantData,
  UpdateRestaurantData,
} from "../types/restaurant.types";

function RestaurantsPage() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Form modal state
  const [formOpen, setFormOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<Restaurant | null>(null);

  // Delete dialog state
  const [deleteTarget, setDeleteTarget] = useState<Restaurant | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Snackbar feedback
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string }>({
    open: false,
    message: "",
  });

  // ── Fetch all restaurants on mount ──────────────────────────────────────
  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      setLoading(true);
      const data = await getRestaurants();
      setRestaurants(data);
      setError(null);
    } catch {
      setError("Failed to fetch restaurants. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  // ── Form handlers ────────────────────────────────────────────────────────
  const handleOpenAdd = () => {
    setEditTarget(null);
    setFormOpen(true);
  };

  const handleOpenEdit = (restaurant: Restaurant) => {
    setEditTarget(restaurant);
    setFormOpen(true);
  };

  const handleCloseForm = () => {
    setFormOpen(false);
    setEditTarget(null);
  };

  const handleFormSubmit = async (
    data: CreateRestaurantData | UpdateRestaurantData
  ) => {
    try {
      if (editTarget) {
        // Edit mode
        const updated = await updateRestaurant(editTarget.id, data);
        setRestaurants((prev) =>
          prev.map((r) => (r.id === updated.id ? updated : r))
        );
        showSnackbar("Restaurant updated successfully");
      } else {
        // Create mode
        const created = await createRestaurant(data as CreateRestaurantData);
        setRestaurants((prev) => [...prev, created]);
        showSnackbar("Restaurant added successfully");
      }
      handleCloseForm();
    } catch {
      showSnackbar("Something went wrong. Please try again.");
    }
  };

  // ── Delete handlers ──────────────────────────────────────────────────────
  const handleOpenDelete = (restaurant: Restaurant) => {
    setDeleteTarget(restaurant);
  };

  const handleConfirmDelete = async () => {
    if (!deleteTarget) return;
    setIsDeleting(true);
    try {
      await deleteRestaurant(deleteTarget.id);
      setRestaurants((prev) => prev.filter((r) => r.id !== deleteTarget.id));
      showSnackbar("Restaurant deleted successfully");
    } catch (err: any) {
      const msg = err.response?.data?.message || err.message || "Failed to delete restaurant.";
      showSnackbar(`Failed: ${msg}`);
    } finally {
      setIsDeleting(false);
      setDeleteTarget(null);
    }
  };

  const handleCancelDelete = () => {
    setDeleteTarget(null);
  };

  // ── Snackbar helper ──────────────────────────────────────────────────────
  const showSnackbar = (message: string) => {
    setSnackbar({ open: true, message });
  };

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box
        display="flex"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h4" fontWeight={700}>
          Restaurant Listing
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpenAdd}
          sx={{ ml: "auto" }}
        >
          Add Restaurant
        </Button>
      </Box>

      {/* Loading */}
      {loading && (
        <Box display="flex" justifyContent="center" mt={6}>
          <CircularProgress />
        </Box>
      )}

      {/* Error */}
      {!loading && error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {/* Table */}
      {!loading && !error && (
        <RestaurantTable
          restaurants={restaurants}
          onEdit={handleOpenEdit}
          onDelete={handleOpenDelete}
        />
      )}

      {/* Add / Edit Modal */}
      <RestaurantForm
        open={formOpen}
        editTarget={editTarget}
        onSubmit={handleFormSubmit}
        onClose={handleCloseForm}
      />

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        open={!!deleteTarget}
        restaurantName={deleteTarget?.name ?? ""}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        isDeleting={isDeleting}
      />

      {/* Snackbar feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        message={snackbar.message}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </Container>
  );
}

export default RestaurantsPage;
