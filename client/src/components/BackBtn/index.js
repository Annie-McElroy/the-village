import React from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';

const BackMeUp = () => {
  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
  }
  return (
    <Button color="primary" onClick={goBack}><span><ArrowCircleLeftOutlinedIcon /></span></Button>
  )
};

export default BackMeUp;