import Title from "./Components/Title";

import Content from "./Components/Content";

import Button from '@mui/material/Button';
import * as React from 'react';


import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';




function Home() {

function goToNextPage(){}

  return (
    <div>

      <Button variant="contained" color="success">Main Course</Button>
      < Button variant="contained" color="info">Dessert</Button>
      <Button variant="contained" color="warning">Drinks</Button>

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





  


