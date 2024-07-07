'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';


const Visitors = () => {
  return (
    <PageContainer title="Visitors" description="this is Sample page for Visitors">
      <DashboardCard title="Visitors">
        <Typography>This is a sample page for visitors</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default Visitors;

