'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';


const ManageCalls = () => {
  return (
    <PageContainer title="Manage Calls" description="this is Sample page for managing Calls">
      <DashboardCard title="Manage Calls">
        <Typography>This is a sample page for managing calls</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default ManageCalls;

