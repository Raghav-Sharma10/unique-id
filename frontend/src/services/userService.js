import apiService from './api';

class UserService {
  // Get all users (admin only)
  async getUsers(filters = {}) {
    try {
      const queryParams = new URLSearchParams();
      
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          queryParams.append(key, value);
        }
      });
      
      const endpoint = `/users${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
      const response = await apiService.get(endpoint);
      return response;
    } catch (error) {
      console.error('Get users failed:', error);
      throw error;
    }
  }

  // Get user by ID
  async getUser(id) {
    try {
      const response = await apiService.get(`/users/${id}`);
      return response;
    } catch (error) {
      console.error('Get user failed:', error);
      throw error;
    }
  }

  // Create new user (admin only)
  async createUser(userData) {
    try {
      const response = await apiService.post('/users', userData);
      return response;
    } catch (error) {
      console.error('Create user failed:', error);
      throw error;
    }
  }

  // Update user
  async updateUser(id, userData) {
    try {
      const response = await apiService.put(`/users/${id}`, userData);
      return response;
    } catch (error) {
      console.error('Update user failed:', error);
      throw error;
    }
  }

  // Delete user (admin only)
  async deleteUser(id) {
    try {
      const response = await apiService.delete(`/users/${id}`);
      return response;
    } catch (error) {
      console.error('Delete user failed:', error);
      throw error;
    }
  }

  // Activate user
  async activateUser(id) {
    try {
      const response = await apiService.post(`/users/${id}/activate`);
      return response;
    } catch (error) {
      console.error('Activate user failed:', error);
      throw error;
    }
  }

  // Deactivate user
  async deactivateUser(id) {
    try {
      const response = await apiService.post(`/users/${id}/deactivate`);
      return response;
    } catch (error) {
      console.error('Deactivate user failed:', error);
      throw error;
    }
  }

  // Suspend user
  async suspendUser(id, reason) {
    try {
      const response = await apiService.post(`/users/${id}/suspend`, { reason });
      return response;
    } catch (error) {
      console.error('Suspend user failed:', error);
      throw error;
    }
  }

  // Unsuspend user
  async unsuspendUser(id) {
    try {
      const response = await apiService.post(`/users/${id}/unsuspend`);
      return response;
    } catch (error) {
      console.error('Unsuspend user failed:', error);
      throw error;
    }
  }

  // Change user role
  async changeUserRole(id, role) {
    try {
      const response = await apiService.post(`/users/${id}/change-role`, { role });
      return response;
    } catch (error) {
      console.error('Change user role failed:', error);
      throw error;
    }
  }

  // Get user statistics
  async getUserStats(filters = {}) {
    try {
      const queryParams = new URLSearchParams();
      
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          queryParams.append(key, value);
        }
      });
      
      const endpoint = `/users/stats${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
      const response = await apiService.get(endpoint);
      return response;
    } catch (error) {
      console.error('Get user stats failed:', error);
      throw error;
    }
  }

  // Get users by role
  async getUsersByRole(role, filters = {}) {
    try {
      const queryParams = new URLSearchParams();
      queryParams.append('role', role);
      
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          queryParams.append(key, value);
        }
      });
      
      const endpoint = `/users${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
      const response = await apiService.get(endpoint);
      return response;
    } catch (error) {
      console.error('Get users by role failed:', error);
      throw error;
    }
  }

  // Get user activity
  async getUserActivity(id, filters = {}) {
    try {
      const queryParams = new URLSearchParams();
      
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          queryParams.append(key, value);
        }
      });
      
      const endpoint = `/users/${id}/activity${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
      const response = await apiService.get(endpoint);
      return response;
    } catch (error) {
      console.error('Get user activity failed:', error);
      throw error;
    }
  }

  // Get user permissions
  async getUserPermissions(id) {
    try {
      const response = await apiService.get(`/users/${id}/permissions`);
      return response;
    } catch (error) {
      console.error('Get user permissions failed:', error);
      throw error;
    }
  }

  // Update user permissions
  async updateUserPermissions(id, permissions) {
    try {
      const response = await apiService.put(`/users/${id}/permissions`, { permissions });
      return response;
    } catch (error) {
      console.error('Update user permissions failed:', error);
      throw error;
    }
  }

  // Search users
  async searchUsers(query, filters = {}) {
    try {
      const queryParams = new URLSearchParams();
      queryParams.append('q', query);
      
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          queryParams.append(key, value);
        }
      });
      
      const endpoint = `/users/search${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
      const response = await apiService.get(endpoint);
      return response;
    } catch (error) {
      console.error('Search users failed:', error);
      throw error;
    }
  }

  // Get user notifications
  async getUserNotifications(id, filters = {}) {
    try {
      const queryParams = new URLSearchParams();
      
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          queryParams.append(key, value);
        }
      });
      
      const endpoint = `/users/${id}/notifications${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
      const response = await apiService.get(endpoint);
      return response;
    } catch (error) {
      console.error('Get user notifications failed:', error);
      throw error;
    }
  }

  // Mark notification as read
  async markNotificationAsRead(id, notificationId) {
    try {
      const response = await apiService.post(`/users/${id}/notifications/${notificationId}/read`);
      return response;
    } catch (error) {
      console.error('Mark notification as read failed:', error);
      throw error;
    }
  }

  // Mark all notifications as read
  async markAllNotificationsAsRead(id) {
    try {
      const response = await apiService.post(`/users/${id}/notifications/read-all`);
      return response;
    } catch (error) {
      console.error('Mark all notifications as read failed:', error);
      throw error;
    }
  }

  // Get user preferences
  async getUserPreferences(id) {
    try {
      const response = await apiService.get(`/users/${id}/preferences`);
      return response;
    } catch (error) {
      console.error('Get user preferences failed:', error);
      throw error;
    }
  }

  // Update user preferences
  async updateUserPreferences(id, preferences) {
    try {
      const response = await apiService.put(`/users/${id}/preferences`, { preferences });
      return response;
    } catch (error) {
      console.error('Update user preferences failed:', error);
      throw error;
    }
  }

  // Upload user avatar
  async uploadUserAvatar(id, file) {
    try {
      const response = await apiService.uploadFile(`/users/${id}/avatar`, file);
      return response;
    } catch (error) {
      console.error('Upload user avatar failed:', error);
      throw error;
    }
  }

  // Get user roles
  async getUserRoles() {
    try {
      const response = await apiService.get('/users/roles');
      return response;
    } catch (error) {
      console.error('Get user roles failed:', error);
      throw error;
    }
  }

  // Get user statuses
  async getUserStatuses() {
    try {
      const response = await apiService.get('/users/statuses');
      return response;
    } catch (error) {
      console.error('Get user statuses failed:', error);
      throw error;
    }
  }

  // Export users data
  async exportUsers(filters = {}) {
    try {
      const queryParams = new URLSearchParams();
      
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          queryParams.append(key, value);
        }
      });
      
      const endpoint = `/users/export${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
      const response = await apiService.get(endpoint, {
        responseType: 'blob'
      });
      return response;
    } catch (error) {
      console.error('Export users failed:', error);
      throw error;
    }
  }
}

// Create and export singleton instance
const userService = new UserService();
export default userService;
