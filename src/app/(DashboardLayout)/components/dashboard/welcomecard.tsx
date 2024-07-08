// components/WelcomeCard.js
import React from 'react';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import styles from '../styles/WelcomeCard.module.css';
import { Typography, Box, LinearProgress } from '@mui/material';

const WelcomeCard = ({ title, subtitle, progress_label, progress_color, progress_value }: { 
  title: string; 
  subtitle: string; 
  progress_label: string; 
  progress_color: string; 
  progress_value: number; 
}) => {
  return (
    <DashboardCard title={title}>
    <Box>
        <Typography variant="h4" color="primary" sx={{ mb: 1 }}>
            {subtitle}
        </Typography>
        <br />
        <Box sx={{ position: 'relative', width: '100%' }}>
            <Typography variant="body1" sx={{ position: 'absolute', top: -24, left: 0 }}>
                {progress_label}
            </Typography>
            <LinearProgress 
                variant="determinate" 
                value={progress_value} 
                color={progress_color as "inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning"} 
                sx={{ mt: 3 }} 
            />
        </Box>
    </Box>
</DashboardCard>
  );
};

export default WelcomeCard;
