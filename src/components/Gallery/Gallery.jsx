import "./Gallery.scss";

import {
  CardContainer,
  GalleryCaption,
  GalleryDescription,
  GalleryHeader,
  GridContainer,
  ImageDiv,
  Rating,
  StyledImage,
  TextDiv,
} from "./Gallery-styles";

import { BsFillStarFill } from "react-icons/bs";
import Row from "react-bootstrap/Row";
import brownLivingRoom from "./images/brown-living-room.jpg";
import greyKitchen from "./images/grey-kitchen.jpg";
import interiorBed from "./images/interior-bed.jpg";
import interiorWhite from "./images/interior-white.jpg";
import kitchenInterior from "./images/kitchen-interior.jpg";
import lakeView from "./images/lake-view.jpg";

function Gallery() {
  return (
    <GridContainer fluid>
      <Row>
        <GalleryHeader>Stays in Italy</GalleryHeader>
        <CardContainer>
          <ImageDiv>
            <StyledImage src={brownLivingRoom} alt="image" />
          </ImageDiv>
          <TextDiv>
            <GalleryCaption>Entire house. 3 beds </GalleryCaption>
            <Rating>
              4.3 <BsFillStarFill className="iconColor" />{" "}
            </Rating>
          </TextDiv>
          <GalleryDescription>
            Lorem ipsum dolor sit amet consectetur.
          </GalleryDescription>
        </CardContainer>
        <CardContainer>
          <ImageDiv>
            <StyledImage src={greyKitchen} alt="image" />
          </ImageDiv>
          <TextDiv>
            <GalleryCaption>Entire house. 4 beds </GalleryCaption>
            <Rating>
              4.8 <BsFillStarFill className="iconColor" />{" "}
            </Rating>
          </TextDiv>
          <GalleryDescription>
            Mordern house in a remote area
          </GalleryDescription>
        </CardContainer>
        <CardContainer>
          <ImageDiv>
            <StyledImage src={interiorBed} alt="image" />
          </ImageDiv>
          <TextDiv>
            <GalleryCaption>Private room</GalleryCaption>
            <Rating>
              4.5 <BsFillStarFill className="iconColor" />{" "}
            </Rating>
          </TextDiv>
          <GalleryDescription>
            Cozy, peaceful and private room
          </GalleryDescription>
        </CardContainer>
        <CardContainer>
          <ImageDiv>
            <StyledImage src={interiorWhite} alt="image" />
          </ImageDiv>
          <TextDiv>
            <GalleryCaption>Whole apartment. 2 beds </GalleryCaption>
            <Rating>
              4.7 <BsFillStarFill className="iconColor" />{" "}
            </Rating>
          </TextDiv>
          <GalleryDescription>
            Stylish apartment in center of the city
          </GalleryDescription>
        </CardContainer>
        <CardContainer>
          <ImageDiv>
            <StyledImage src={kitchenInterior} alt="image" />
          </ImageDiv>
          <TextDiv>
            <GalleryCaption>Whole apartment. 2 beds </GalleryCaption>
            <Rating>
              4.6 <BsFillStarFill className="iconColor" />{" "}
            </Rating>
          </TextDiv>
          <GalleryDescription>
            Modern apartment close to nature
          </GalleryDescription>
        </CardContainer>
        <CardContainer>
          <ImageDiv>
            <StyledImage src={lakeView} alt="image" />
          </ImageDiv>
          <TextDiv>
            <GalleryCaption> Entire house. 4 beds</GalleryCaption>
            <Rating>
              4.9 <BsFillStarFill className="iconColor" />{" "}
            </Rating>
          </TextDiv>
          <GalleryDescription>
            Open concept home with a lakeside view
          </GalleryDescription>
        </CardContainer>
      </Row>
    </GridContainer>
  );
}

export default Gallery;
