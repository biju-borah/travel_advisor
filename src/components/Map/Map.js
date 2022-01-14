import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Map from "mapmyindia-react";
// import GoogleMapReact from 'google-map-react';

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: '85vh',
    width: '100%',
  },
}));

export default function MapApi() {
  const classes = useStyles();
  return (
    <Box className={classes.mapContainer}>
      <Map
        markers={[
          {
            position: [18.5314, 73.845],
            draggable: true,
            title: "Marker title",
            onClick: e => {
              console.log("clicked ");
            },
            onDragend: e => {
              console.log("dragged");
            }
          }
        ]}
      />
    </Box>
  );
}
