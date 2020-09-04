import React from "react";
import { withRouter } from "react-router-dom";

import {
  DirectoryItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./directory-item.styles";

const DirectoryItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <DirectoryItemContainer
  size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <ContentContainer className="content">
      <ContentTitle> {title.toUpperCase()} </ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </DirectoryItemContainer>
);

export default withRouter(DirectoryItem);
