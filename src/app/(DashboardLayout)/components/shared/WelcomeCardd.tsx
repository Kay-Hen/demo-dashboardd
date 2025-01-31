import React, { ReactNode } from "react";
import { Card, CardContent, Typography, Stack, Box } from "@mui/material";

type Props = {
  title?: string;
  children?: ReactNode; 
};

const WelcomeWelcomeCard = ({
    title, children 
  }: Props) => {
    return (
      <Card sx={{ padding: 0 }} elevation={9} variant={undefined}>
        
          <CardContent sx={{ p: "30px" }}>
            
              <Stack
                direction="row"
                spacing={2}
                justifyContent="space-between"
                alignItems={"center"}
                mb={3}
              >
                <Box>
                    <Typography variant="h5">{title}</Typography>
                </Box> 
              </Stack>
              {children}
          </CardContent>
       
      </Card>
    );
  };

  export default WelcomeWelcomeCard;