import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import type { Restaurant } from "../types/restaurant.types";

interface RestaurantTableProps {
  restaurants: Restaurant[];
  onEdit: (restaurant: Restaurant) => void;
  onDelete: (restaurant: Restaurant) => void;
}

const RestaurantTable = ({
  restaurants,
  onEdit,
  onDelete,
}: RestaurantTableProps) => {
  if (restaurants.length === 0) {
    return (
      <Typography
        variant="body1"
        color="text.secondary"
        align="center"
        sx={{ mt: 4 }}
      >
        No restaurants found. Add one to get started.
      </Typography>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Name</strong>
            </TableCell>
            <TableCell>
              <strong>Address</strong>
            </TableCell>
            <TableCell>
              <strong>Contact</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Actions</strong>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {restaurants.map((restaurant) => (
            <TableRow key={restaurant.id} hover>
              <TableCell>{restaurant.name}</TableCell>
              <TableCell>{restaurant.address}</TableCell>
              <TableCell>{restaurant.contact}</TableCell>
              <TableCell align="right">
                <Tooltip title="Edit">
                  <IconButton
                    color="primary"
                    onClick={() => onEdit(restaurant)}
                  >
                    <EditIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Delete">
                  <IconButton
                    color="error"
                    onClick={() => onDelete(restaurant)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RestaurantTable;