import axios from 'axios';

export const fetchEventDetails = async (eventId, token) => {
  try {
    const response = await axios.get(`https://api.worldeventaccess.com/api/Event/${eventId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching event details:', error);
    throw error;
  }
};