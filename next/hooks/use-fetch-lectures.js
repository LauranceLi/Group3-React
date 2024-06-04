import { useState, useEffect } from 'react';

function useFetchLectures() {
  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const res = await fetch('http://localhost:3005/api/lectures', {
          credentials: 'include',
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json();
        setLectures(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching lectures:', error);
      }
    };
    
    fetchLectures();
  }, []);
  
  return { lectures, loading };
}

export default useFetchLectures;
