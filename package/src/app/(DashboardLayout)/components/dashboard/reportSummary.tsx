import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DescriptionIcon from '@mui/icons-material/Description';

interface ReportSummaryItemProps {
  value: number;
  label: string;
  icon: React.ReactNode;
  color: string;
}

const ReportSummaryItem: React.FC<ReportSummaryItemProps> = ({ value, label, icon, color }) => {
  return (
    <Box textAlign="left">
      <Typography variant="h4" style={{ color }}>{value}</Typography>
      <Box display="flex" justifyContent="center" alignItems="center">
        {icon}
        <Typography variant="body1" sx={{ ml: 1 }}>{label}</Typography>
      </Box>
    </Box>
  );
};

const ReportSummary = () => {
  return (
    <Box p={2} boxShadow={1} bgcolor="white" borderRadius={2}>
      <Grid container spacing={3} justifyContent="space-around">
        <Grid item>
          <ReportSummaryItem 
            value={125} 
            label="Activities" 
            icon={<BarChartIcon style={{ color: 'gray' }} />} 
            color="black" 
          />
        </Grid>
        <Grid item>
          <ReportSummaryItem 
            value={4} 
            label="Staff" 
            icon={<SupervisorAccountIcon style={{ color: 'blue' }} />} 
            color="blue" 
          />
        </Grid>
        <Grid item>
          <ReportSummaryItem 
            value={1} 
            label="Visitors" 
            icon={<VisibilityIcon style={{ color: 'green' }} />} 
            color="blue" 
          />
        </Grid>
        <Grid item>
          <ReportSummaryItem 
            value={34} 
            label="Report" 
            icon={<DescriptionIcon style={{ color: 'blue' }} />} 
            color="blue" 
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReportSummary;