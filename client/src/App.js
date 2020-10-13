import React, { useState, useEffect } from 'react';
import { Button, makeStyles, Typography, Paper, Divider, Grid, TextField } from '@material-ui/core';
import PanoramaFishEyeIcon from '@material-ui/icons/PanoramaFishEye';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

const useStyles = makeStyles((theme) => ({
  whole: {
    display: 'flex'
  },
  left: {
    background: 'whitesmoke',
    flex: 1
  },
  rightNone: {
    background: 'gainsboro',
    flex: 1
  },
  rightRight: {
    background: 'limegreen',
    flex: 1,
  }, 
  rightWrong: {
    background: 'red',
    flex: 1,
  },
  result: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    margin: theme.spacing(1),
  },
  button: {
    padding: theme.spacing(3),
    textAlign: 'center',
    margin: '0 37%',
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

function App() {
  const classes = useStyles();
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [num4, setNum4] = useState(0);
  const [sum, setSum] = useState(0);
  const [howMuch, setHowMuch] = useState(0);
  const [isSubmitted, setSubmit] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      setSum(num1+num2+num3+num4);
      sum >= 50 ? setHowMuch(66) : setHowMuch(33);
    }
  })

  return (
    <div id="wholeContainer" className={classes.whole}>
      <div id="leftContainer" className={classes.left}>
        <Typography variant="subtitle1" gutterBottom>
          KyoungJae
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <Paper className={classes.paper} elevation={0}>실업률</Paper>
          </Grid>
          {(num1 >= 0 && num1 <= 100)
            ? <TextField
                required
                id="outlined-required"
                className={classes.paper}
                label="Required"
                placeholder="0"
                variant="outlined"
                color="primary"
                // value={num1}
                onChange={e => setNum1(Number(e.target.value))}
              />
            : <TextField
                error
                id="outlined-error-helper-text"
                className={classes.paper}
                label="Error"
                placeholder="0"
                helperText="0~100"
                variant="outlined"
                // value={num1}
                onChange={e => setNum1(Number(e.target.value))}
              />
          }
          <Grid item xs={6}>
            <Paper className={classes.paper} elevation={1}>굥제</Paper>
          </Grid>
          {(num2 >= 0 && num2 <= 100)
            ? <TextField
                required
                id="outlined-required"
                className={classes.paper}
                label="Required"
                placeholder="0"
                variant="outlined"
                color="primary"
                // value={num2}
                onChange={e => setNum2(Number(e.target.value))}
              />
            : <TextField
                error
                id="outlined-error-helper-text"
                className={classes.paper}
                label="Error"
                placeholder="0"
                helperText="0~100"
                variant="outlined"
                // value={num2}
                onChange={e => setNum2(Number(e.target.value))}
              />
          }
          <Grid item xs={6}>
            <Paper className={classes.paper} elevation={2}>굥제</Paper>
          </Grid>
          {(num3 >= 0 && num3 <= 100)
            ? <TextField
                required
                id="outlined-required"
                className={classes.paper}
                label="Required"
                placeholder="0"
                variant="outlined"
                color="primary"
                // value={num3}
                onChange={e => setNum3(Number(e.target.value))}
              />
            : <TextField
                error
                id="outlined-error-helper-text"
                className={classes.paper}
                label="Error"
                placeholder="0"
                helperText="0~100"
                variant="outlined"
                // value={num3}
                onChange={e => setNum3(Number(e.target.value))}
              />
          }
          <Grid item xs={6}>
            <Paper className={classes.paper} elevation={3}>굥제</Paper>
          </Grid>
          {(num4 >= 0 && num4 <= 100)
            ? <TextField
                required
                id="outlined-required"
                className={classes.paper}
                label="Required"
                placeholder="0"
                variant="outlined"
                color="primary"
                // value={num4}
                onChange={e => setNum4(Number(e.target.value))}
              />
            : <TextField
                error
                id="outlined-error-helper-text"
                className={classes.paper}
                label="Error"
                placeholder="0"
                helperText="0~100"
                variant="outlined"
                // value={num4}
                onChange={e => setNum4(e.target.value)}
              />
          }
        </Grid>
        {console.log(sum,'sadf', howMuch)}
        <Button 
          className={classes.button} 
          color="primary"
          onClick={() => setSubmit(true)}
        >Submit</Button>

        <Divider className={classes.divider} />

        <Typography variant="subtitle2" gutterBottom>
          JaeKyoung
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <Paper className={classes.paper} elevation={0}>굥제</Paper>
          </Grid>
          {(num1 >= 0 && num1 <= 100)
            ? <TextField
                required
                id="outlined-required"
                className={classes.paper}
                label="Required"
                placeholder="0"
                variant="outlined"
                color="primary"
                // value={num1}
                onChange={e => setNum1(Number(e.target.value))}
              />
            : <TextField
                error
                id="outlined-error-helper-text"
                className={classes.paper}
                label="Error"
                placeholder="0"
                helperText="0~100"
                variant="outlined"
                // value={num1}
                onChange={e => setNum1(Number(e.target.value))}
              />
          }
          <Grid item xs={6}>
            <Paper className={classes.paper} elevation={1}>굥제</Paper>
          </Grid>
          {(num2 >= 0 && num2 <= 100)
            ? <TextField
                required
                id="outlined-required"
                className={classes.paper}
                label="Required"
                placeholder="0"
                variant="outlined"
                color="primary"
                // value={num2}
                onChange={e => setNum2(Number(e.target.value))}
              />
            : <TextField
                error
                id="outlined-error-helper-text"
                className={classes.paper}
                label="Error"
                placeholder="0"
                helperText="0~100"
                variant="outlined"
                // value={num2}
                onChange={e => setNum2(Number(e.target.value))}
              />
          }
          <Grid item xs={6}>
            <Paper className={classes.paper} elevation={2}>굥제</Paper>
          </Grid>
          {(num3 >= 0 && num3 <= 100)
            ? <TextField
                required
                id="outlined-required"
                className={classes.paper}
                label="Required"
                placeholder="0"
                variant="outlined"
                color="primary"
                // value={num3}
                onChange={e => setNum3(Number(e.target.value))}
              />
            : <TextField
                error
                id="outlined-error-helper-text"
                className={classes.paper}
                label="Error"
                placeholder="0"
                helperText="0~100"
                variant="outlined"
                // value={num3}
                onChange={e => setNum3(Number(e.target.value))}
              />
          }
          <Grid item xs={6}>
            <Paper className={classes.paper} elevation={3}>굥제</Paper>
          </Grid>
          {(num4 >= 0 && num4 <= 100)
            ? <TextField
                required
                id="outlined-required"
                className={classes.paper}
                label="Required"
                placeholder="0"
                variant="outlined"
                color="primary"
                // value={num4}
                onChange={e => setNum4(Number(e.target.value))}
              />
            : <TextField
                error
                id="outlined-error-helper-text"
                className={classes.paper}
                label="Error"
                placeholder="0"
                helperText="0~100"
                variant="outlined"
                // value={num4}
                onChange={e => setNum4(e.target.value)}
              />
          }
        </Grid>
      </div>
      {(howMuch === 0)
        ? <div id="rightContainer" className={classes.rightNone}>
            <div className={classes.result}>
              <PanoramaFishEyeIcon style={{ color: 'white', fontSize: 100 }} />
            </div>
          </div>
        : (howMuch > 50)
          ? <div id="rightContainerRight" className={classes.rightRight}>
              <div className={classes.result}>
                <SentimentSatisfiedAltIcon style={{ color: 'white', fontSize: 100 }} />
              </div>
            </div>
          : <div id="rightContainerWrong" className={classes.rightWrong}>
              <div className={classes.result}>
                <SentimentVeryDissatisfiedIcon style={{ color: 'white', fontSize: 100 }} />
              </div>
            </div>
      }
    </div>
  );
}

export default App;
