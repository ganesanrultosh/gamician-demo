import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '../../components/Title';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';
import { Divider, Grid, IconButton } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import SportsIcon from '@mui/icons-material/Sports';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function LeadGeneration(props: { toogleTrend: () => void, toogleChallenge: () => void }) {
  return (
    <React.Fragment>
      <Title>Lead Generation</Title>
      <Typography component="p" variant="h4">
        ₹ 275 cr <ArrowCircleUpTwoToneIcon fontSize="small" color="success" />
        <Typography fontSize={14} display="inline" alignItems={"top"} >10%</Typography>
      </Typography>
      <Typography color="text.secondary" alignItems="center" component="p" variant="h6" sx={{ flex: .5 }}>
        <b>10</b> leads <ArrowCircleUpTwoToneIcon fontSize="small" color="success" />
        <Typography fontSize={14} display="inline" alignItems={"top"}>10%</Typography>
      </Typography>
      <Divider sx={{ marginBottom: 1, marginTop: 1 }} />
      <Typography color="text.secondary" alignItems="center" sx={{ flex: 1 }} component="p" variant="h6">
        Sources <ArrowCircleDownTwoToneIcon fontSize="small" color="error" />
        <Typography fontSize={14} display="inline" alignItems={"top"}>3%</Typography>
        <Typography component="p" variant="h4">
          <b>2</b>
        </Typography>
      </Typography>
      <Divider sx={{ marginBottom: 1, marginTop: 1 }} />
      {/* <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 1st May, 2023
      </Typography> */}
      <Grid container xs={12} md={12} lg={12}>
        <Grid xs={12} md={12} lg={2}>
          <Link color="primary" href="#" onClick={(e) => { preventDefault(e); props.toogleTrend() }}>
            {/* View trends */}
            <BarChartIcon />
          </Link>
        </Grid>
        <Grid xs={12} md={12} lg={10}>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
            size="small"
            onClick={(e) => { preventDefault(e); props.toogleChallenge() }}
          >
            <Typography variant='caption'>(2 active challenges)</Typography>
            <SportsIcon /> <Typography variant='button'>ADD</Typography>
          </IconButton>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
