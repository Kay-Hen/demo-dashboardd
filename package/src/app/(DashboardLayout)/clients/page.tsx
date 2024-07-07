'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';


const Clients = () => {
  return (
    <PageContainer title="Clients" description="this is Sample page for Clients">
      <DashboardCard title="Clients">
        <Typography>This is a sample page for clients</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default Clients;

