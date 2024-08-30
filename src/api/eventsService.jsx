import axios from "axios";

export const fetchEventsDetails = async (token) => {
    try {
      const response = await axios.get('https://api.worldeventaccess.com/api/Event', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };