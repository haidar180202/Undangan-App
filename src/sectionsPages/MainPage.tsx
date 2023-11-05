import React, { useState } from "react";
import { Box, Button, Grid, GridItem, Text, useMediaQuery } from '@chakra-ui/react';
import { Foto, IconMail, IconsFooter, IconsHeader } from '../components';
import MyCard from './childContent/MyCard';
import ImageSlider from "./childContent/ImageSlider";

interface MainPageProps {
  backgroundImage: string;
  text: string;
}

const MainPage: React.FC<MainPageProps> = ({ backgroundImage, text }) => {
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)");

  const [showAlternateContent, setShowAlternateContent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setShowAlternateContent(!showAlternateContent);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Grid
      h='200px'
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(5, 1fr)'
      style={{ fontFamily: "cursive" }}
    >
      {isLargerThan1200 && (
        <GridItem colSpan={3}>
          <Box
            bgImage={`url(${backgroundImage})`}
            style={{ display: 'flex'}}
            bgSize="cover"
            bgPosition="center"
            h="100vh"
            position="relative"
          >
            <Box
              bg="rgba(180, 197, 212, 0.35)"
              position="absolute"
              top="0"
              left="0"
              w="99%"
              h="100%"
              display="flex"
            />
            <Box
              bg="#a0aec0"
              position="absolute"
              top="0"
              right="0"
              w="1%"
              h="100%"
              display="flex"
            />
            <Box pt="10" ml="12" textColor="#67544e">
              <Text fontSize="1xl" fontFamily="sans-serif">{text}</Text>
              <Text fontSize='7xl' my={3} fontFamily="Clicker Script">Nailal & Via</Text>

              <Box fontFamily="italic">
                <Box>
                  <Text>“And I knew exactly how old Walt Disney’s Cinderella felt when she</Text>
                </Box>

                <Box>
                  <Text>found her prince.”</Text>
                </Box>

                <Box>
                  <Text>— Elizabeth Young</Text>
                </Box>
              </Box>
            </Box>



          </Box>
        </GridItem>
      )}

      <GridItem colSpan={isLargerThan1200 ? 2 : 5} style={{ overflowY: 'auto' }} bg="#b4c5d5" textColor="white" h="100vh">
        {!showAlternateContent ? (
          <Box className={isLoading ? "fadeOut" : ""}>
            <Box
              bgImage={`url(${backgroundImage})`}
              bgSize="cover"
              bgPosition="center"
              h="88vh"
              style={{ display: 'flex'}}
              position="relative"
            >
              <Box
                bg="rgba(180, 197, 212, 0.35)"
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                display="flex"
                justifyContent="center"
              >
                <Box mt="19" textColor="white">
                  <center>
                    <IconsHeader />
                    <Text mt={2} fontSize="14" fontFamily="sans-serif">{text}</Text>
                    <Text fontSize='4xl' fontWeight="bold" my={2} fontFamily="Clicker Script">Nailal & Via</Text>
                    <Button
                      className="animation-heart"
                      leftIcon={<IconMail />}
                      bg="#E2E8F0"
                      size="md"
                      borderTopStartRadius="43%"
                      borderTopEndRadius="43%"
                      borderBottomEndRadius="43%"
                      borderBottomStartRadius="43%"
                      color="white"
                      _hover={{ bgColor: "black" }}
                      variant='solid'
                      fontFamily="inherit"
                      my="100%"
                      fontSize="14"
                      onClick={handleButtonClick}
                      isLoading={isLoading}
                    >
                      Open lnvitation
                    </Button>
                  </center>
                </Box>
              </Box>
            </Box>
            <Box
              backgroundColor="transparent"
              transform="translateY(-38px)"
            >
              <IconsFooter />
              <center>
                <Box>
                  <Text className="chakra-text css-1sgqbae">Created with</Text>
                </Box>
                <Box>
                  <Text className="chakra-text css-i34euv">© 2023 Nailal &amp; Via. All Rights Reserved</Text>
                </Box>
              </center>
            </Box>
          </Box>
        ) : (
          <Box className={isLoading ? "fadeOut" : "fadeIn"}>
            <Box
              bgImage={`url("https://user-images.githubusercontent.com/10141928/147430937-dc4f7649-2190-4568-b503-1ead665c1c5c.jpeg")`}
              bgSize="cover"
              bgPosition="center top"
              h="78vh"
              style={{ display: 'flex'}}
              position="relative"
            >
              <Box
                bg="rgba(180, 197, 212, 0.35)"
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                display="flex"
                justifyContent="center"
              >
              </Box>
            </Box>
            <Box
              backgroundColor="transparent"
              transform="translateY(-38px)"
            >
              <IconsFooter />
              <center>
                <Box fontFamily="Clicker Script">
                  <Text fontSize="1xl" fontWeight="bold">Dear Mr/Mrs/Ms</Text>
                </Box>
                <Box fontFamily="Clicker Script">
                  <Text fontSize="1xl" fontWeight="bold">Family & Friends</Text>
                </Box>
                <Box>
                  <p>We are pleased to announce and invite you to our wedding. We sincerely hope that you will be able to attend and pray directly on our wedding day. Your presence will mean a lot to us.</p>
                </Box>
              </center>
            </Box>
            <MyCard />
            <Box m="20px">
              <Foto />
              <ImageSlider/>
            </Box>


          </Box>
        )}
      </GridItem>
    </Grid>
  );
};

export default MainPage;
