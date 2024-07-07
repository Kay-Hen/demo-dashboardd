'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';


const ManageStaff = () => {
  return (
    <PageContainer title="Manage Staff" description="this is Sample page for managing staff">
      <DashboardCard title="Manage Staff">
        <Typography>This is a sample page for managing staff</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default ManageStaff;

