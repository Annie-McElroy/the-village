// What is the Village? Info Page

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const WhatVillage = () => {
  return (
    <div className="landing-page">
      <div className="banner">
        <div className="layered-village base" alt="base"></div>
        <div className="layered-village foreground" alt="foreground"></div>
        <div className="layered-village clouds" alt="foreground"></div>
  
      </div>
        <h2>What Is The Village?</h2>
        <h4>"It Takes a Village to Raise a Child..."</h4>
        <p>You may be familiar with the old proverb, but...where do you find your village...and how do you use it? </p>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
            },
          }}
          >
          <Card sx={{ minWidth: 275 }}>
            <CardContent sx={{ mb: 1.3 }}>
              <Typography variant="h5" component="div">
                The Village
              </Typography>
              <Typography variant="body2">
                The Village allows users to share childcare-related resources. Once you've logged in and created an account, you can join a village or create your own! Any villager from the same village can post requests for childcare-related needs. Their fellow villagers will have the option to respond to these requests.
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
            },
          }}
          >
          <Card sx={{ minWidth: 275 }}>
            <CardContent sx={{ mb: 1.3 }}>
              <Typography variant="h5" component="div">
                So How Do I Actually Use The Village?
              </Typography>
              <Typography variant="body2">
                Once you create a unique username and password, you will be able to log-in to the app. From there, you can search for a Village by matching a zip code or you can create your own! Once inside a village, you'll be able to create requests for childcare-related help or claim any of the open requests of your fellow villagers.
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Card sx={{ minWidth: 275 }}>
            <CardContent sx={{ mb: 1.3 }}>
              <Typography variant="h5" component="div">
                FAQs
              </Typography>
              <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>What Are Crayons?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Within the village, Crayons are the exchange currency! You can use your Crayons to request help. Whenever you list a new request, you'll be prompted to include how many Crayons you'll give to the villager who helps you out! 
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>How Do I Get More Crayons?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Help more villagers! You'll receive Crayons to the amount listed for every request you complete. 
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Who Controls Village Access?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The creator of a village has administrative privilege, granting them control over who they invite to their village. 
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>How Many Crayons Should I Charge For My Request?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Each village will likely end up setting their own local value, but we suggest a base rate of 4 CPH (Crayons Per Hour). Of course, more difficult requests merit extra Crayons. Villagers are always able to comment on a request, so if your request seems to be short on Crayons, one of your fellow villagers may comment to let you know just how much you should bump it up. 
              </Typography>
            </AccordionDetails>
          </Accordion>
            </CardContent>
          </Card>
        </div>
    );
  };

export default WhatVillage;