import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Progress } from 'reactstrap';
import { randomnumbergenerator } from '../../../util/randomnumbergenerator';
import AddIcon from '@material-ui/icons/Add';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
const useRowStyles = makeStyles({
  root: {
    cursor: 'pointer',
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],
  };
}
const colorGen = () => {
  if (randomnumbergenerator(1, 4) == 1) {
    return 'red';
  }
  if (randomnumbergenerator(1, 4) == 2) {
    return 'yellow';
  }
  if (randomnumbergenerator(1, 4) == 3) {
    return 'green';
  }
};
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell align="center" padding="checkbox">
          <span
            onClick={(e) => {
              document.getElementById('openmodal12').click();
            }}
            style={{ color: '#73236B' }}
          >
            <span className="glyph-icon iconsminds-mail-forward"></span>
          </span>
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <IndeterminateCheckBoxIcon/>:<AddIcon/>}
          </IconButton>
        </TableCell>
        <TableCell align="">{row.Activity}</TableCell>
        <TableCell align="">{row.TaskOwner}</TableCell>
        <TableCell align="">
          <Progress value={Math.floor(Math.random() * (99 - 2)) + 2} />
        </TableCell>
        <TableCell align="">{randomnumbergenerator(1,100)} </TableCell>
        <TableCell align="center">
          <span
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '10px',
              display: 'inline-block',
              background: colorGen(),
            }}
          ></span>{' '}
        </TableCell>
      </TableRow>
      <TableRow style={{ background: '#F8F8F8' }}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Table
                size="small"
                aria-label="purchases"
                style={{ width: '100%' }}
              >
                <TableHead>
                  <TableRow style={{ background: '#F8F8F8' }}>
                    <TableCell>Class</TableCell>
                    <TableCell>Deliverables</TableCell>
                    <TableCell>Control Level</TableCell>
                    <TableCell>Process Onwer</TableCell>
                    <TableCell>Team Member</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Operations</TableCell>
                    <TableCell>Appraisal</TableCell>
                    <TableCell>External</TableCell>
                    <TableCell>RDNG</TableCell>
                    <TableCell>Amadou Ibrahim</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="mt-5">
                <h5 className="mt-4">Specific Actions</h5>
                <hr />
                <p style={{ color: '#73236B' }}>
                  Have some members of the project team, especially procurement
                  and environmental, go on a mission to Lagos State to avoid
                  delay in preparation for Board and implementation –
                  Electricity Cooperatives in Lagos State
                </p>
              </div>

              <h5 className="mt-4">Progress achieved as of today :</h5>
              <hr />

              <p style={{ color: '#73236B' }}>
                Appraisal mission - PAR is under preparation
              </p>

              <h5 className="mt-4">Issues for Management Attention :</h5>
              <hr />
              <p style={{ color: '#73236B' }}>
                Appraisal mission - PAR is under preparation
              </p>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

const data = [
  {
    Activity: ' Nigeria - Special Agro.... ',
    ActivityCategory: ' LENDING PROGRAM  ',
    StartDate: '   ',
    priority: '   High ',
    status: ' Ongoing  ',
    EndDate: '   ',
    TaskOwner: 'Monde Nyambe    ',
  },
  {
    Activity: '  Nigeria - Special Agro-Industrial Processing Zones (Sapzs I) ',
    ActivityCategory: '  Business Development ',
    StartDate: '   ',
    priority: ' Medium   ',
    status: '  Completed ',
    EndDate: '   ',
    TaskOwner: 'Monde Nyambe    ',
  },
  {
    Activity: ' Nigeria - Special Agro-Industrial Processing Zones (Sapzs I)  ',
    ActivityCategory: '   ',
    StartDate: '   ',
    priority: ' High   ',
    status: ' Onhold  ',
    EndDate: '   ',
    TaskOwner: 'Amadou Ibrahim   ',
  },
  {
    Activity:
      ' Multinational - Integrated Programme for Development and Adaptation   ',
    ActivityCategory: ' Business Development  ',
    StartDate: '  ',
    priority: ' High   ',
    status: 'Cancelled',
    EndDate: '   ',
    TaskOwner: 'Amadou Ibrahim   ',
  },
  {
    Activity: ' to Climate Change in the Basin of Niger (PIDACC)  ',
    ActivityCategory: ' Business Development  ',
    StartDate: '   ',
    priority: '   Medium ',
    status: '   ',
    EndDate: '   ',
    TaskOwner: 'Amadou Ibrahim   ',
  },
  {
    Activity:
      ' Nigeria - Agricultural Transformation Agenda Support Program –   ',
    ActivityCategory: '  Portfolio Management ',
    StartDate: '   ',
    priority: '  High  ',
    status: '   ',
    EndDate: '   ',
    TaskOwner: 'SD   ',
  },
  {
    Activity: '  Phase 1 (ATASP-1)  ',
    ActivityCategory: '  Corporate Actions ',
    StartDate: '   ',
    priority: ' Low   ',
    status: '   ',
    EndDate: '   ',
    TaskOwner: 'SD   ',
  },
  {
    Activity: ' Electric Coops  ',
    ActivityCategory: ' Portfolio Management  ',
    StartDate: '   ',
    priority: '  Low  ',
    status: '   ',
    EndDate: '   ',
    TaskOwner: 'SD   ',
  },
  {
    Activity: ' Electric Coops  ',
    ActivityCategory: ' Non-Lending Actions  ',
    StartDate: '   ',
    priority: '  Medium  ',
    status: '   ',
    EndDate: '   ',
    TaskOwner: 'SD   ',
  },
  {
    Activity: ' Electric Coops  ',
    ActivityCategory: ' Portfolio Management  ',
    StartDate: '   ',
    priority: ' Low   ',
    status: '   ',
    EndDate: '   ',
    TaskOwner: 'SD   ',
  },
  {
    Activity: ' Electric Coops  ',
    ActivityCategory: '   Non-Lending Actions',
    StartDate: '   ',
    priority: '  Low  ',
    status: '   ',
    EndDate: '   ',
    TaskOwner: 'SD   ',
  },
  {
    Activity: ' Electric Coops  ',
    ActivityCategory: ' Portfolio Management  ',
    StartDate: '   ',
    priority: 'Low    ',
    status: '   ',
    EndDate: '   ',
    TaskOwner: 'SD   ',
  },
  {
    Activity: ' Electric Coops  ',
    ActivityCategory: ' Portfolio Management  ',
    StartDate: '   ',
    priority: '   High ',
    status: '   ',
    EndDate: '   ',
    TaskOwner: 'SD   ',
  },
  {
    Activity: ' Electric Coops  ',
    ActivityCategory: '   ',
    StartDate: '   ',
    priority: '  Medium  ',
    status: '   ',
    EndDate: '   ',
    TaskOwner: 'SD   ',
  },
];

const ReadinessTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell></TableCell>
            <TableCell>Activity </TableCell>
            <TableCell>Task Owner </TableCell>
            <TableCell>Progress</TableCell>
            <TableCell>Due </TableCell>
            <TableCell>Priority</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ReadinessTable;
