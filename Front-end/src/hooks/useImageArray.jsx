import { useEffect, useState } from 'react';

const useImages = (fileNames) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const loadedImages = await Promise.all(
          fileNames.map(async (fileName) => {
            const response = await import(`../assets/images/${fileName}`);
            return response.default;
          })
        );
        setImages(loadedImages);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [fileNames]);

  return { images, loading, error };
};

export default useImages;
