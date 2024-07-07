'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';


const Administration = () => {
  return (
    <PageContainer title="Administration" description="this is Sample page for Administration">
      <DashboardCard title="Administration">
        <Typography>This is a sample page for administration</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default Administration;

