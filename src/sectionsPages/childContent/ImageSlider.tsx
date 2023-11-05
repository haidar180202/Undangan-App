import  { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

const imageUrls = [
  'https://invitato.net/template-nailalvia/static/2-884e618dbd1230a324d23cbf06c2688e.jpg',
  'https://user-images.githubusercontent.com/10141928/147430930-d27df943-444f-41cc-8d5f-4d9da680d668.jpeg',
  'https://invitato.net/template-nailalvia/static/5-89c7d3a566b24cc8f7efe2bd9df76e3e.jpg',

];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fungsi untuk mengubah gambar latar belakang ke gambar berikutnya
  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  useEffect(() => {
    // Atur interval untuk mengubah gambar setiap 2.5 detik
    const interval = setInterval(changeImage, 2500);

    return () => {
      // Hapus interval saat komponen dibongkar
      clearInterval(interval);
    };
  }, []);

  return (
    <Box
      w="100%"
      h="100vh"
      mt="3"
      borderRadius="10"
      bgImage={`url(${imageUrls[currentImageIndex]})`}
      bgSize="cover"
      bgPosition="center"
      transition="background-image 1s"
    >
      {/* Konten lainnya di sini */}
    </Box>
  );
};

export default ImageSlider;
