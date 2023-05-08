import * as React from "react"
import Link from "@mui/material/Link"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Title from "../../components/Title"
import { Box, Button, Chip, Grid, LinearProgress, Paper, Typography } from "@mui/material"
import { bgcolor } from "@mui/system"
import LeadGeneration from "../dashboard/LeadGeneration"

// Generate Order Data
function createData(
  id: number,
  name: string,
  accumalatedRewards: number,
  activeChallenges: number,
  allChallenges: number,
) {
  return { id, name, accumalatedRewards, activeChallenges, allChallenges }
}

const rows = [
  createData(1, "Rajan R", 5000, 1, 2),
  createData(1, "Kannan G", 15000, 2, 5),
  createData(1, "Babu A", 5000, 1, 2),
  createData(1, "Amuthan R", 15000, 2, 5),
  createData(1, "Hari B", 5000, 1, 2),
  createData(1, "Arun K", 15000, 2, 5),
  createData(1, "Sheik M", 5000, 1, 2),
  createData(1, "Jude J", 15000, 2, 5),
  createData(1, "Santhosh S", 5000, 1, 2),
  createData(1, "Ganesan G", 15000, 2, 5),
]

function createChallenge(
  id: number,
  name: string,
  description: string,
  stage: string,
  metric: string,
  target: string,
  period: number,
  reward: number,
  teamSize: number,
  participants: number[][],
) {
  return {
    id,
    name,
    description,
    stage,
    metric,
    target,
    period,
    reward,
    teamSize,
    participants,
  }
}

const challenges = [
  createChallenge(
    1,
    "One week streak",
    "Acquire 5 qualified leads daily for 7 days to get 5000 GITCOINS",
    "Lead Generation",
    "₹ Value",
    "₹ 10 cr",
    7,
    5000,
    1,
    [[1], [1]],
  ),
  createChallenge(
    1,
    "Buddy challenge",
    "Complete 10 appriasals in 30 days to get 15000 GITCOINS each",
    "Appraisal",
    "Number of appraisals",
    "10",
    30,
    15000,
    3,
    [
      [1, 2, 3],
      [1, 2, 3],
    ],
  ),
]

const generateDiceBearAvataars = (seed: number): string => {
  return `https://api.dicebear.com/6.x/pixel-art/svg?seed=${seed}`
}

function Participants(props: { participants: number[][] }) {
  return (
    <>
      {props.participants.map((team) => (
        <Box
          sx={{
            bgcolor: "lightgrey",
            padding: 1,
            borderRadius: 1,
            margin: "5px",
          }}
          component="span"
        >
          {team.map((member) => (
            <img
              src={generateDiceBearAvataars(Math.random())}
              width={15}
              style={{ marginRight: "2px" }}
            />
          ))}
        </Box>
      ))}
    </>
  )
}

export default function TeamList() {
  const days = Math.random()

  return (
    <React.Fragment>
      <Grid container spacing={3} lg={12} mt={3}>
        <Grid xs={12} md={12} lg={5}>
          <Title>Team</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell width="35%">Name</TableCell>
                <TableCell>Rewards</TableCell>
                <TableCell>Active Challenges</TableCell>
                <TableCell>All Challenges</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <img
                      src={generateDiceBearAvataars(Math.random())}
                      width={15}
                      style={{ marginRight: "2px" }}
                    />
                    {row.name}
                  </TableCell>
                  <TableCell>{row.accumalatedRewards}</TableCell>
                  <TableCell>{row.activeChallenges}</TableCell>
                  <TableCell>{row.allChallenges}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "10px" }}
          >
            Add
          </Button>
        </Grid>
        <Grid xs={12} md={12} lg={5} ml={20}>
          <Title>Active Challenges</Title>
          {challenges.map((challenge) => {
            return (
              <Grid item xs={12} md={6} lg={12} mt={2}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 200,
                  }}
                >
                  <Title>{challenge.name}</Title>
                  <Typography variant="body2" sx={{ flex: 1 }}>{challenge.description}</Typography>
                  <Box mb={3}>
                    {challenge.period - Math.round(days * challenge.period)}{" "}
                    days left
                    <LinearProgress
                      color="secondary"
                      variant="determinate"
                      value={days * 100}
                    />
                  </Box>
                  <Box alignItems="right">
                    <Grid container xs={12}>
                    <Grid xs={10}>
                      <Participants participants={challenge.participants} />
                    </Grid>
                    <Grid xs={2}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                      >
                        Invite
                      </Button>
                    </Grid>
                    </Grid>
                  </Box>
                </Paper>
              </Grid>
            )
          })}
          <Box></Box>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
