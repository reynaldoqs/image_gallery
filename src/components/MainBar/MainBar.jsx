import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { Avatar } from "../../components";
import { Container } from "./elements";
import aud from "../../assets/audiman.jpg";

export const MainBar = ({ onSearchOpt }) => {
  return (
    <Container>
      <Avatar src={aud} size="45px" />
      <Container.Opt onClick={onSearchOpt}>
        <Container.Icon icon={faSearch} />
      </Container.Opt>
    </Container>
  );
};
