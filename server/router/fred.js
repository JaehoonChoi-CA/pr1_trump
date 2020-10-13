const express = require('express');
const firebase = require('../config/firebase');
const spawn = require('child_process').spawn;

const axios = require('axios');
const {
  getData,
} = require('../utils/fred');
console.log(11);
const pythonOptions= {
  pythonPath: '/Library/Frameworks/Python.framework/Versions/3.6/bin/python3'
}

const router = express.Router();

// /api/fred/all
router.get('/all', async (req, res) => {
  firebase.db.collection('primary').get()
    .then(snapshot => {
      const contents = snapshot.docs.map(doc => {
        return {
          ...doc.data(),
        }
      });
      // console.log(11, contents);
      const process = spawn('python3', [
        'python/main.py',
        JSON.stringify(contents),
      ]);
      let result = '';
      process.stdout.on('data', (data) => {
        result += data.toString('utf8');
        // return res.send({
        //   message: 'success',
        //   result,
        // })
      });
      process.on('close', () => {
        console.log(33, typeof JSON.parse(result));
        result = JSON.parse(result);
        return res.send({
          message: 'success',
          result,
        });
      });
    })
    .catch((err) => {
      console.error(err);
      res.send({
        message: 'fail',
        contents: [],
      });
    });
});

router.post('/update', async (req, res) => {
  const data = await getData();
  data.forEach((e, _) => {
    firebase.db.collection('primary').add(e);
  })
  res.send('Success');
});

module.exports = router;