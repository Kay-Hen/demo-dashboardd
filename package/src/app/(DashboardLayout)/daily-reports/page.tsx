'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';


const DailyReports = () => {
  return (
    <PageContainer title="Daily Reports" description="this is Sample page for Daily Reports">
      <DashboardCard title="Administration">
        <Typography>This is a sample page for daily reports</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default DailyReports;

