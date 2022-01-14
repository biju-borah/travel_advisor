import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: '85vh',
    width: '100%',
  },
}));

export default function Map() {
  const classes = useStyles();
  return (
    <Box className={classes.mapContainer}>
      <GoogleMapReact bootstrapURLKeys={{ key: '' }} />
    </Box>
  );
}
