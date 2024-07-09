// components/WelcomeCard.js
import React from 'react';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import styles from '../styles/WelcomeCard.module.css';
import { Typography, Box, LinearProgress } from '@mui/material';
import WelcomeWelcomeCard from '../shared/WelcomeCardd';

const WelcomeCard = ({ name }: { 
  name: string; 
}) => {
  return (
    <WelcomeWelcomeCard title= {`Welcome, ${name}`}>
 
</WelcomeWelcomeCard>
  );
};

export default WelcomeCard;
