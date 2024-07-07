'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';


const Appointment = () => {
  return (
    <PageContainer title="Appointment" description="this is Sample page for Appointment">
      <DashboardCard title="Appointment">
        <Typography>This is a sample page for appointment</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default Appointment;

