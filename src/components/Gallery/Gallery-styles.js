import styled from "styled-components";

export const GridContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const GalleryHeader = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  font-size: 1.8rem;
  margin-top: 15px;
  margin-left: 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const ImageDiv = styled.div`
  width: 350px;
  height: 238.35px;

  border-radius: 24px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 24px;
`;

export const TextDiv = styled.div`
  display: flex;
`;

export const GalleryCaption = styled.p`
  color: #828282;
  padding-right: 150px;
  font-size: 1rem;
`;

export const Rating = styled.p`
  color: #4f4f4f;
  padding-top: 2.5px;
`;

export const GalleryDescription = styled.h4`
  font-size: 1.1rem;
`;
