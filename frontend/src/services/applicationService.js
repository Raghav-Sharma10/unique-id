import apiService from './api';

class ApplicationService {
  // Get all applications (with filters)
  async getApplications(filters = {}) {
    try {
      const queryParams = new URLSearchParams();
      
      // Add filters to query params
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          queryParams.append(key, value);
        }
      });
      
      const endpoint = `/applications${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
      const response = await apiService.get(endpoint);
      return response;
    } catch (error) {
      console.error('Get applications failed:', error);
      throw error;
    }
  }

  // Get application by ID
  async getApplication(id) {
    try {
      const response = await apiService.get(`/applications/${id}`);
      return response;
    } catch (error) {
      console.error('Get application failed:', error);
      throw error;
    }
  }

  // Create new application
  async createApplication(applicationData) {
    try {
      const response = await apiService.post('/applications', applicationData);
      return response;
    } catch (error) {
      console.error('Create application failed:', error);
      throw error;
    }
  }

  // Update application
  async updateApplication(id, applicationData) {
    try {
      const response = await apiService.put(`/applications/${id}`, applicationData);
      return response;
    } catch (error) {
      console.error('Update application failed:', error);
      throw error;
    }
  }

  // Delete application
  async deleteApplication(id) {
    try {
      const response = await apiService.delete(`/applications/${id}`);
      return response;
    } catch (error) {
      console.error('Delete application failed:', error);
      throw error;
    }
  }

  // Submit application for review
  async submitApplication(id) {
    try {
      const response = await apiService.post(`/applications/${id}/submit`);
      return response;
    } catch (error) {
      console.error('Submit application failed:', error);
      throw error;
    }
  }

  // Withdraw application
  async withdrawApplication(id) {
    try {
      const response = await apiService.post(`/applications/${id}/withdraw`);
      return response;
    } catch (error) {
      console.error('Withdraw application failed:', error);
      throw error;
    }
  }

  // Review application (for officers)
  async reviewApplication(id, reviewData) {
    try {
      const response = await apiService.post(`/applications/${id}/review`, reviewData);
      return response;
    } catch (error) {
      console.error('Review application failed:', error);
      throw error;
    }
  }

  // Approve application
  async approveApplication(id, approvalData = {}) {
    try {
      const response = await apiService.post(`/applications/${id}/approve`, approvalData);
      return response;
    } catch (error) {
      console.error('Approve application failed:', error);
      throw error;
    }
  }

  // Reject application
  async rejectApplication(id, rejectionData) {
    try {
      const response = await apiService.post(`/applications/${id}/reject`, rejectionData);
      return response;
    } catch (error) {
      console.error('Reject application failed:', error);
      throw error;
    }
  }

  // Request additional documents
  async requestDocuments(id, requestData) {
    try {
      const response = await apiService.post(`/applications/${id}/request-documents`, requestData);
      return response;
    } catch (error) {
      console.error('Request documents failed:', error);
      throw error;
    }
  }

  // Get application statistics
  async getApplicationStats(filters = {}) {
    try {
      const queryParams = new URLSearchParams();
      
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          queryParams.append(key, value);
        }
      });
      
      const endpoint = `/applications/stats${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
      const response = await apiService.get(endpoint);
      return response;
    } catch (error) {
      console.error('Get application stats failed:', error);
      throw error;
    }
  }

  // Get applications by user
  async getUserApplications(userId, filters = {}) {
    try {
      const queryParams = new URLSearchParams();
      
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          queryParams.append(key, value);
        }
      });
      
      const endpoint = `/users/${userId}/applications${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
      const response = await apiService.get(endpoint);
      return response;
    } catch (error) {
      console.error('Get user applications failed:', error);
      throw error;
    }
  }

  // Get pending applications (for officers)
  async getPendingApplications(filters = {}) {
    try {
      const queryParams = new URLSearchParams();
      queryParams.append('status', 'pending');
      
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          queryParams.append(key, value);
        }
      });
      
      const endpoint = `/applications${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
      const response = await apiService.get(endpoint);
      return response;
    } catch (error) {
      console.error('Get pending applications failed:', error);
      throw error;
    }
  }

  // Get application history
  async getApplicationHistory(id) {
    try {
      const response = await apiService.get(`/applications/${id}/history`);
      return response;
    } catch (error) {
      console.error('Get application history failed:', error);
      throw error;
    }
  }

  // Add comment to application
  async addComment(id, commentData) {
    try {
      const response = await apiService.post(`/applications/${id}/comments`, commentData);
      return response;
    } catch (error) {
      console.error('Add comment failed:', error);
      throw error;
    }
  }

  // Get application comments
  async getComments(id) {
    try {
      const response = await apiService.get(`/applications/${id}/comments`);
      return response;
    } catch (error) {
      console.error('Get comments failed:', error);
      throw error;
    }
  }

  // Upload document
  async uploadDocument(id, file, documentType) {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('documentType', documentType);
      
      const response = await apiService.uploadFile(`/applications/${id}/documents`, formData);
      return response;
    } catch (error) {
      console.error('Upload document failed:', error);
      throw error;
    }
  }

  // Get application documents
  async getDocuments(id) {
    try {
      const response = await apiService.get(`/applications/${id}/documents`);
      return response;
    } catch (error) {
      console.error('Get documents failed:', error);
      throw error;
    }
  }

  // Download document
  async downloadDocument(id, documentId) {
    try {
      const response = await apiService.get(`/applications/${id}/documents/${documentId}/download`, {
        responseType: 'blob'
      });
      return response;
    } catch (error) {
      console.error('Download document failed:', error);
      throw error;
    }
  }

  // Delete document
  async deleteDocument(id, documentId) {
    try {
      const response = await apiService.delete(`/applications/${id}/documents/${documentId}`);
      return response;
    } catch (error) {
      console.error('Delete document failed:', error);
      throw error;
    }
  }

  // Get application types
  async getApplicationTypes() {
    try {
      const response = await apiService.get('/applications/types');
      return response;
    } catch (error) {
      console.error('Get application types failed:', error);
      throw error;
    }
  }

  // Get application statuses
  async getApplicationStatuses() {
    try {
      const response = await apiService.get('/applications/statuses');
      return response;
    } catch (error) {
      console.error('Get application statuses failed:', error);
      throw error;
    }
  }
}

// Create and export singleton instance
const applicationService = new ApplicationService();
export default applicationService;
