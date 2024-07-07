'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';


const Mail = () => {
  return (
    <PageContainer title="Mail" description="this is Sample page for Mail">
      <DashboardCard title="Mail">
        <Typography>This is a sample page for mail</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default Mail;

