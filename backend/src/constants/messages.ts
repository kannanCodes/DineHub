export const MESSAGES = {
  RESTAURANT: {
    FETCHED_ALL: 'Restaurants fetched successfully',
    FETCHED_ONE: 'Restaurant fetched successfully',
    CREATED: 'Restaurant created successfully',
    UPDATED: 'Restaurant updated successfully',
    DELETED: 'Restaurant deleted successfully',
    NOT_FOUND: 'Restaurant not found',
  },
  SERVER: {
    INTERNAL_ERROR: 'Internal server error',
    DB_CONNECTED: 'Database connection successful',
    DB_FAILED: 'Database connection failure.',
    RUNNING: (port: number | string) => `Server running on http://localhost:${port}`,
  },
};
