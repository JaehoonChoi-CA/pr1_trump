const express = require('express');
const firebase = require('../config/firebase');
const axios = require('axios');
const {
  getData,
} = require('../utils/fred');

const router = express.Router();

router.get('/all', async (req, res) => {
  try {
    const snapshot = await firebase.db.collection('primary').get()
    const contents = snapshot.docs.map(doc => ({ ...doc.data() }));
    console.log(contents[0])
    res.send({
      message: 'success',
      contents,
    })
  } catch (err) {
    console.error(err);
    res.send({
      message: 'fail',
      contents: [],
    });
  }
});

router.post('/update', async (req, res) => {
  const data = await getData();
  data.forEach((e, _) => {
    firebase.db.collection('primary').add(e);
  })
  res.send('Success');
});

module.exports = router;