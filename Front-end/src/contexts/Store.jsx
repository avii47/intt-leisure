import { create } from 'zustand';
import axios from 'axios';

const useStore = create((set, get) => ({

  services: [],
  events: [], 
  blogs: [], 
  sampleItineraries: [], 
  activityTours: [], 
  conciergeServices: [],
  otherTours: [],
  dmc: [],

  isLoading: false, 
  error: null, 

  fetchEvents: async () => {
    if (useStore.getState().events.length > 0) return; 
    set({ isLoading: true });
    try {
      const response = await axios.get('/api/events');
      set({ events: response.data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  fetchServices: async () => {
    if (useStore.getState().services.length > 0) return; 
    set({ isLoading: true });
    try {
        const response = await axios.get('/api/services');
      set({ services: response.data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  fetchBlogs: async () => {
    if (useStore.getState().blogs.length > 0) return; 
    set({ isLoading: true });
    try {
        const response = await axios.get('/api/blogs');
      set({ blogs: response.data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  fetchSampleItineraries: async () => {
    if (useStore.getState().sampleItineraries.length > 0) return; 
    // if (get().sampleItineraries.length > 0) return; 
    set({ isLoading: true });
    try {
        const response = await axios.get('/api/sampleItineraries');
        set({ sampleItineraries: response.data, isLoading: false });
    } catch (error) {
        set({ error: error.message, isLoading: false });
    }
  },

  fetchActivityTours: async () => {
    if (get().activityTours.length > 0) return; 
    set({ isLoading: true });
    try {
        const response = await axios.get('/api/activityTours');
        set({ activityTours: response.data, isLoading: false });
    } catch (error) {
        set({ error: error.message, isLoading: false });
    }
  },

  fetchConciergeServices: async () => {
    if (get().conciergeServices.length > 0) return; 
    set({ isLoading: true });
    try {
        const response = await axios.get('/api/conciergeServices');
        set({ conciergeServices: response.data, isLoading: false });
    } catch (error) {
        set({ error: error.message, isLoading: false });
    }
  },

  fetchOtherTours: async () => {
    if (get().otherTours.length > 0) return; 
    set({ isLoading: true });
    try {
        const response = await axios.get('/api/otherTours');
        set({ otherTours: response.data, isLoading: false });
    } catch (error) {
        set({ error: error.message, isLoading: false });
    }
  },

  fetchDmc: async () => {
    if (get().dmc.length > 0) return; 
    set({ isLoading: true });
    try {
        const response = await axios.get('/api/dmc');
        set({ dmc: response.data, isLoading: false });
    } catch (error) {
        set({ error: error.message, isLoading: false });
    }
  },

}));

export default useStore;
