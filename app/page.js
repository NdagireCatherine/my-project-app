import Title from "./Components/Title";

import Content from "./Components/Content";
import Button from '@mui/material/Button';
import * as React from 'react';
import Stack from '@mui/material/Stack';




function Home() {

function goToNextPage(){}

  return (
    <div>
      <Button variant="contained" color="success">Text</Button>
      < Button variant="contained" color="info">Contained</Button>
      <Button variant="contained" color="warning">Outlined</Button>

      <Title heading="MAKERERE BLOG" onClick = {goToNextPage} />
      <Content details="This is a very nice blog from MAK" />
      <br />

      <Title heading="UGANDA MARTYRS BLOG" />
      <Content details="This is a very nice blog from UMU" />
      <br />

      <Title heading="NDEJJE BLOG" />
      <Content details="This is a very nice blog from NDEJJE" />

      



    </div>
  );
}

export default Home;