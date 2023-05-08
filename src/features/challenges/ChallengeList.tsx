import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../../components/Title';
import { Box, Chip, LinearProgress } from '@mui/material';
import { bgcolor } from '@mui/system';

// Generate Order Data
function createData(
  id: number,
  name: string,
  stage: string,
  metric: string,
  target: string,
  period: string,
  reward: number,
  teamSize: number,
  participants: number[][]
) {
  return { id, name, stage, metric, target, period, reward, teamSize, participants };
}

const rows = [
  createData(
    1, 'One week streak', 'Lead Generation', '₹ Value', '₹ 10 cr', '7 days', 5000, 1, [[1], [1]]
  ),
  createData(
    1, 'Buddy challenge', 'Appraisal', 'Number of appraisals', '10', '30 days', 15000, 3, [[1, 2, 3], [1, 2, 3]]
  )
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

const generateDiceBearAvataars = (seed: number): string => {
  return `https://api.dicebear.com/6.x/pixel-art/svg?seed=${seed}`
}

function Participants(props: { participants: number[][] }) {
  return (<>{props.participants.map((team) => 
      <Box sx={{bgcolor: "lightgrey", padding: 1, borderRadius: 1, margin: "5px"}} component="span">
        {team.map((member) => 
          <img src={generateDiceBearAvataars(Math.random())} width={15} style={{marginRight: "2px"}} />)}
      </Box>
  )}
  </>)
}

export default function ChallengeList() {
  return (
    <React.Fragment>
      <Title>Active Challenges</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Stage</TableCell>
            <TableCell>Metrics</TableCell>
            <TableCell>Target</TableCell>
            <TableCell>Period</TableCell>
            <TableCell align="right">Reward (Git Coin)</TableCell>
            <TableCell>Team Size</TableCell>
            <TableCell>Participants</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.stage}</TableCell>
              <TableCell>{row.metric}</TableCell>
              <TableCell>{row.target}</TableCell>
              <TableCell>
                {row.period}
                <LinearProgress color="secondary" variant="determinate" value={Math.random()*100} />
              </TableCell>
              <TableCell align="right">{row.reward}</TableCell>
              <TableCell>{row.teamSize}</TableCell>
              <TableCell><Participants participants={row.participants} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box mt={3}>
      <Link color="primary" href="#" onClick={preventDefault}>
        View history
      </Link>
      </Box>
    </React.Fragment>
  );
}
