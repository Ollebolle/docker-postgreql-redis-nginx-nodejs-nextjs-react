const router = require('express').Router()

router.get('/', (req, res) => {
  console.log('Get sensors')
  // return res.json({
  //   sensors: [
  //     {
  //       type: 'temp',
  //       name: 'lalala',
  //       values: [
  //         {
  //           id: 'test',
  //           value: 23
  //         },
  //         {
  //           id: 'test',
  //           value: 22
  //         },
  //         {
  //           id: 'test',
  //           value: 20
  //         },
  //         {
  //           id: 'test',
  //           value: 18
  //         },
  //         {
  //           id: 'test',
  //           value: 25
  //         },
  //         {
  //           id: 'test',
  //           value: 29
  //         }
  //       ]
  //     }
  //   ]
  // })
  return res.json({
    type: 'temp',
    name: 'lalala',
    values: [
      {
        id: 'test',
        value: 23,
        date: '2018-01-24'
      },
      {
        id: 'test',
        value: 22,
        date: '2018-01-25'
      },
      {
        id: 'test',
        value: 20,
        date: '2018-01-26'
      },
      {
        id: 'test',
        value: 18,
        date: '2018-01-27'
      },
      {
        id: 'test',
        value: 25,
        date: '2018-01-28'
      },
      {
        id: 'test',
        value: 29,
        date: '2018-01-29'
      }
    ]
  })
})

module.exports = router
