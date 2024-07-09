// components/WelcomeCard.js
import React from 'react';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import styles from '../styles/WelcomeCard.module.css';
import { Typography, Box, LinearProgress } from '@mui/material';

const WelcomeCard = ({ name }: { 
  name: string; 
}) => {
  return (
    <DashboardCard title= {`Welcome, ${name}`}>

      
    
</DashboardCard>
  );
};

export default WelcomeCard;
