'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import ActivitiesOverview from '@/app/(DashboardLayout)/components/dashboard/ActivitiesOverview';
import DashboardMiniCard from './components/dashboard/dashboard-mini';
import ReportSummary from './components/dashboard/reportSummary';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          
        <Grid item xs={12} lg={3}>
                <DashboardMiniCard 
                    title="TOTAL CLIENTS"
                    subtitle="1"
                    progress_label="Total registered Clients"
                    progress_color="warning"
                    progress_value={70}
                />
            </Grid>
            <Grid item xs={12} lg={3}>
                <DashboardMiniCard 
                    title="TOTAL CALLS"
                    subtitle="2"
                    progress_label="Total incoming calls"
                    progress_color="secondary"
                    progress_value={85}
                />
            </Grid>
            <Grid item xs={12} lg={3}>
                <DashboardMiniCard 
                    title="INBOX"
                    subtitle="83"
                    progress_label="Total inbox"
                    progress_color="inherit"
                    progress_value={55}
                />
            </Grid>
            <Grid item xs={12} lg={3}>
                <DashboardMiniCard 
                    title="REPORTS"
                    subtitle="34"
                    progress_label="Total registered domains"
                    progress_color="success"
                    progress_value={40}
                />
            </Grid>

        </Grid>
        <br />
        <ReportSummary />
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ActivitiesOverview />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;


