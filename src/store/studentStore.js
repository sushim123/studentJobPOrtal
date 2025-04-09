import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";

export const useStudentStore = create((set, get) => ({
  applications: [],
  loading: false,
  error: null,

  getAllApplications: async () => {
    set({ loading: true });
    try {
      const res = await axiosInstance.get("/allapplications");
      set({ applications: res.data, loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to fetch applications",
        loading: false,
      });
    }
  },

  addApplication: async (newApp) => {
    set({ loading: true });
    try {
      const res = await axiosInstance.post("/newapplication", newApp);
      set((state) => ({
        applications: [res.data, ...state.applications],
        loading: false,
      }));
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to add application",
        loading: false,
      });
    }
  },

  updateStatus: async (id, newStatus) => {
    set({ loading: true });
    try {
      const res = await axiosInstance.put(`/status/${id}`, {
        status: newStatus,
      });
      set((state) => ({
        applications: state.applications.map((app) =>
          app._id === id ? { ...app, status: res.data.status } : app
        ),
        loading: false,
      }));
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to update status",
        loading: false,
      });
    }
  },

  deleteApplication: async (id) => {
    set({ loading: true });
    try {
      await axiosInstance.delete(`/delete/${id}`);
      set((state) => ({
        applications: state.applications.filter((app) => app._id !== id),
        loading: false,
      }));
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to delete application",
        loading: false,
      });
    }
  },
}));
