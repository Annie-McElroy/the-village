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
import BackMeUp from '../components/BackBtn';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import AuthService from '../utils/auth';





const WhatVillage = () => {
  return (
    <div className="landing-page">
      <div className="banner">
        <div className="layered-village base" alt="base"></div>
        <div className="layered-village foreground" alt="foreground"></div>
        <div className="layered-village clouds" alt="foreground"></div>
  
      </div>
      <div className='pageFrame'>
        <Typography sx={{ fontSize: '2.3rem', fontFamily: 'Marcellus, serif', color: '#00425a', paddingTop: '3%'}}>
        <h2>What Is The Village?</h2>
        </Typography>
        <Typography sx={{ marginTop: "37.5%", fontSize: 20}}>
        <h4>"It Takes a Village to Raise a Child..."</h4>
        </Typography>
        <Typography sx={{ fontSize: 20, fontWeight: 'bold', m: 1, marginTop: "-5.6%", marginBottom: "2%"}}>
        <p>You may be familiar with the old proverb, but...where do you find your village...and how do you use it? </p>
        </Typography>
        <Stack
        // marginTop="15%"
        marginBottom="12%"
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}>
          <Card sx={{ minWidth: 275, border: 1, borderColor:'#ADCC5E', boxShadow:10}}>
            <CardContent sx={{ mb: 1.3 }}>
              <Typography variant="h5" component="div">
                The Village
              </Typography>
              <Typography variant="body2">
                The Village allows users to share childcare-related resources. Once you've logged in and created an account, you can join a village or create your own! Any villager from the same village can post requests for childcare-related needs. Their fellow villagers will have the option to respond to these requests.
              </Typography>
            </CardContent>
          </Card>
        
        
          <Card sx={{ minWidth: 275, border: 1, borderColor:'#ADCC5E', boxShadow:10 }}>
            <CardContent sx={{ mb: 1.3 }}>
              <Typography variant="h5" component="div">
                So How Do I Actually Use The Village?
              </Typography>
              <Typography variant="body2">
                Once you create a unique username and password, you will be able to log-in to the app. From there, you can search for a Village by matching a zip code or you can create your own! Once inside a village, you'll be able to create requests for childcare-related help or claim any of the open requests of your fellow villagers.
              </Typography>
            </CardContent>
          </Card>
        
          
          {
            !AuthService.loggedIn() && (  <Button
              className="button-instance"
              variant="contained"
              size="regular"
              state="default"
              type="primary"
              component={Link} to="/"
            ><span><ArrowCircleRightOutlinedIcon />{'\u00A0'}{'\u00A0'}</span> Login or Signup </Button>)
          }
          
          
          <Button
            className="button-instance"
            variant="contained"
            size="regular"
            state="default"
            type="primary"
            component={Link} to="/about"
          ><span><ArrowCircleRightOutlinedIcon />{'\u00A0'}{'\u00A0'}</span> All about our team </Button>
      
        <Card sx={{ minWidth: 275, border: 1, borderColor:'#ADCC5E', boxShadow:10 }}>
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
            <AccordionDetails sx={{ minWidth: 275, border: 1, borderColor:'#ADCC5E', boxShadow:10 }}>
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
            <AccordionDetails sx={{ minWidth: 275, border: 1, borderColor:'#ADCC5E', boxShadow:10 }}>
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
            <AccordionDetails sx={{ minWidth: 275, border: 1, borderColor:'#ADCC5E', boxShadow:10 }}>
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
            <AccordionDetails sx={{ minWidth: 275, border: 1, borderColor:'#ADCC5E', boxShadow:10 }}>
              <Typography>
                Each village will likely end up setting their own local value, but we suggest a base rate of 4 CPH (Crayons Per Hour). Of course, more difficult requests merit extra Crayons. Villagers are always able to comment on a request, so if your request seems to be short on Crayons, one of your fellow villagers may comment to let you know just how much you should bump it up. 
              </Typography>
            </AccordionDetails>
          </Accordion>
            </CardContent>
          </Card>
          </Stack>
          </div>
        </div>
    );
  };

export default WhatVillage;