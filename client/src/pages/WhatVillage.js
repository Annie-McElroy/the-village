// What is the Village? Info Page

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const WhatVillage = () => {
  return (
    <div className="landing-page">
      <div className="banner">
        <div className="layered-village base" alt="base"></div>
        <div className="layered-village foreground" alt="foreground"></div>
        <div className="layered-village clouds" alt="foreground"></div>
  
      </div>
        <h2>What Is The Village?</h2>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 128,
              height: 128,
            },
          }}
          >
          <Paper elevation={3}> 
            <Typography variant="h6">
              It Takes a Village to Raise A Child
            </Typography>
          </Paper>
        </Box>
    </div>
    );
  };

export default WhatVillage;