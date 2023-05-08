import Button from '@mui/material/Button';
import { Box, Divider, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";

function AddChallenge(props: {toogleChallenge: () => void}) {

  return (
    <div>
      <Box mb={2} mt={2}>
        <Typography color="text.primary" alignItems="center" component="p" variant="h4" sx={{ flex: .5 }}>
          Create a challenge
        </Typography>
        <Divider sx={{marginBottom: 2, marginTop: 1}}/>
        <Typography color="text.secondary" alignItems="center" component="p" variant="h6" sx={{ flex: .5 }}>
          Please specify your challenge name
        </Typography>
        <FormControl>
          <TextField
            label="Name your challenge"
            id="outlined-start-adornment"
            sx={{ m: 1, minWidth: 300 }}
          />
        </FormControl>
      </Box>
      <Grid container textAlign={"left"} xs={12} md={12} lg={12}>
        <Grid xs={6} md={6} lg={6}>
          <Typography color="text.secondary" alignItems="center" component="p" variant="h6" sx={{ flex: .5 }}>
            Please specify your challenge</Typography>
          <Grid xs={12} md={12} lg={12}>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
              <InputLabel id="stage-autowidth-label">Stage</InputLabel>
              <Select
                labelId="stage-autowidth-label"
                id="stage-autowidth"
                // value={stage}
                // onChange={handleChange}
                autoWidth
                label="Stage"
              >
                <MenuItem value={"Lead"}>Lead generation</MenuItem>
                <MenuItem value={"Appraisal"}>Appraisal</MenuItem>
                <MenuItem value={"DD"}>Due delligence</MenuItem>
                <MenuItem value={"Sanction"}>Sanction</MenuItem>
                <MenuItem value={"Disbursement"}>Disbursement</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={12} md={12} lg={12}>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
              <InputLabel id="metric-autowidth-label">Metric to improve</InputLabel>
              <Select
                labelId="metric-autowidth-label"
                id="metric-autowidth"
                // value={age}
                // onChange={handleChange}
                autoWidth
                label="Metric to improve"
              >
                <MenuItem value={10}>₹ Value</MenuItem>
                <MenuItem value={21}>Number of leads</MenuItem>
                <MenuItem value={22}>Conversion ratio</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={12} md={12} lg={12}>
            <FormControl>
              <TextField
                label="Target"
                type="number"
                id="outlined-start-adornment"
                sx={{ m: 1, minWidth: 300 }}
              />
            </FormControl>
          </Grid>
          <Grid xs={12} md={12} lg={12}>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
              <InputLabel id="period-autowidth-label">Challenge period</InputLabel>
              <Select
                labelId="period-autowidth-label"
                id="period-autowidth"
                // value={age}
                // onChange={handleChange}
                autoWidth
                label="Challenge period"
              >
                <MenuItem value={10}>7 days</MenuItem>
                <MenuItem value={21}>14 days</MenuItem>
                <MenuItem value={22}>30 days</MenuItem>
                <MenuItem value={22}>A quarter</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid xs={6} md={6} lg={6}>
          <Typography color="text.secondary" alignItems="center" component="p" variant="h6" sx={{ flex: .5 }}>
            Please specify the reward and team size</Typography>
          <Grid xs={12} md={12} lg={12}>
            <FormControl>
              <TextField
                label="Rewards in GITCOINS"
                type={"number"}
                id="outlined-start-adornment"
                sx={{ m: 1, minWidth: 300 }}
              />
            </FormControl>
          </Grid>
          <Grid xs={12} md={12} lg={12}>
            <FormControl>
              <TextField
                label="Team size"
                type={"number"}
                id="outlined-start-adornment"
                sx={{ m: 1, minWidth: 300 }}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid lg={9}>

        </Grid>
        <Grid display={"flex"} flex="right">
          <Button 
            variant="contained" 
            color="primary" 
            sx={{marginRight: 1}}
            onClick={(e) => {props.toogleChallenge()}}
            >
            Add</Button>
          <Button 
            variant="outlined"
            onClick={(e) => {props.toogleChallenge()}}
            >Cancel</Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default AddChallenge;