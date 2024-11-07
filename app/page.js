import Title from "./Components/Title";

import Content from "./Components/Content";
import Button from '@mui/material/Button';

function Home() {

function goToNextPage(){}

  return (
    <div>
      <Title heading="MAKERERE BLOG" onClick = {goToNextPage} />
      <Content details="This is a very nice blog from MAK" />

      <br />

      <Title heading="UGANDA MARTYRS BLOG" />
      <Content details="This is a very nice blog from UMU" />
      <br />

      <Title heading="NDEJJE BLOG" />
      <Content details="This is a very nice blog from NDEJJE" />
      <Button variant="text">Text</Button>
      < Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>



    </div>
  );
}

export default Home;