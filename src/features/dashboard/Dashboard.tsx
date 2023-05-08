import { Box, MenuItem, Modal, Select, SelectChangeEvent, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import { useState } from 'react';
import AddChallenge from './AddChallenge';
import Appraisal from './Appraisal';
import Chart from './Chart';
import Disbursement from './Disbursement';
import DueDelligence from './DueDelligence';
import LeadGeneration from './LeadGeneration';
import Sanction from './Sanction';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 400,
  bgcolor: 'background.paper',
  margin: '10px',
  padding: '10px'
  
};

const challengeStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 750,
  height: 600,
  bgcolor: 'background.paper',
  margin: '10px',
  padding: '10px'
  
};

function DashboardContent() {

  const [period, setPeriod] = useState("Q");
  const [openTrend, setOpenTrend] = useState(false);
  const [openAddChallenge, setOpenAddChallenge] = useState(false);

  function toogleTrend() {
    setOpenTrend((prevState: boolean) => {
      return !prevState;
    })
  }

  function toogleChallenge() {
    setOpenAddChallenge((prevState: boolean) => {
      return !prevState;
    })
  }

  const handleChange = (event: SelectChangeEvent) => {
    setPeriod(event.target.value as string);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={10} lg={11}>
              <Typography component="p" variant="h4">Direct Cerdit Vertical</Typography>
            </Grid>
            <Grid item xs={12} md={2} lg={1}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                value={period}
                size="small"
                onChange={handleChange}
              >
                <MenuItem selected value={"Q"}>QTD</MenuItem>
                <MenuItem value={"M"}>MTD</MenuItem>
                <MenuItem value={"Y"}>YTD</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 280,
            }}
          >
            <LeadGeneration toogleTrend={toogleTrend} toogleChallenge={toogleChallenge} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 280,
            }}
          >
            <Appraisal toogleTrend={toogleTrend}/>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 280,
            }}
          >
            <DueDelligence toogleTrend={toogleTrend}/>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 280,
            }}
          >
            <Sanction toogleTrend={toogleTrend}/>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 280,
            }}
          >
            <Disbursement toogleTrend={toogleTrend}/>
          </Paper>
        </Grid>
      </Grid>
      <Modal
        open={openTrend}
        onClose={toogleTrend}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Chart />
        </Box>
      </Modal>
      <Modal
        open={openAddChallenge}
        onClose={toogleChallenge}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={challengeStyle}>
          <AddChallenge toogleChallenge={toogleChallenge} />
        </Box>
      </Modal>
    </>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
