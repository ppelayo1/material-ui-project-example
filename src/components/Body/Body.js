import React from 'react';
import {
  Grid, Card, CardContent, Typography, Box,
} from '@material-ui/core';

import './Body.scss';

function Body() {
  return (
    <Box m="auto" mt="11rem" maxWidth="75%">
      <Grid direction="row" container className="grid-body" spacing={1}>
        <Grid item xs={12} lg={4}>
          <Card>
            <CardContent>

              <Typography variant="h3">Header Text</Typography>
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card>
            <CardContent>

              <Typography variant="h3">Header Text</Typography>
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card>
            <CardContent>

              <Typography variant="h3">Header Text</Typography>
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card>
            <CardContent>

              <Typography variant="h3">Header Text</Typography>
            </CardContent>

          </Card>
        </Grid>

      </Grid>
    </Box>
  );
}

export default Body;
