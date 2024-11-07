import Title from "./Components/Title";

import Content from "./Components/Content";
import Button from '@mui/material/Button';

import * as React from 'react';
import Box from '@mui/material/Box';

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

      export default function BoxBasic() {
  return (
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      The 2024 U.S. presidential election will take place on November 5, 2024. This election will determine the President and Vice President of the United States for the next four-year term, beginning in January 2025. The election process involves voters in all 50 states and the District of Columbia casting ballots for electors in the Electoral College, which formally elects the President and Vice President.
    </Box>
  );
}



    </div>
  );
}

export default Home;