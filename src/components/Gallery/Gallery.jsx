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

function Gallery({ stays }) {
  return (
    <GridContainer fluid>
      <Row>
        <GalleryHeader>Stays in Italy</GalleryHeader>
        {stays &&
          stays.map((stay) => (
            <CardContainer key={stay.id}>
              <ImageDiv>
                <StyledImage src={stay.img} alt="image" />
              </ImageDiv>
              <TextDiv>
                <GalleryCaption> {stay.caption} </GalleryCaption>
                <Rating>
                  {stay.rating} <BsFillStarFill className="iconColor" />{" "}
                </Rating>
              </TextDiv>
              <GalleryDescription>{stay.description}</GalleryDescription>
            </CardContainer>
          ))}
      </Row>
    </GridContainer>
  );
}

export default Gallery;
