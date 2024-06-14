const API_BASE_URL = 'https://shubh-backend.vercel.app'; // Replace with your actual base URL

export const getUserGroupsByEmail = async (email:any) => {
  try {
    const response = await fetch(`${API_BASE_URL}/groups/${email}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const createGroup = async (groupData:any) => {
  try {
    const response = await fetch(`${API_BASE_URL}/creategroups`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(groupData),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
