const express = require('express');
const router = express.Router();
let apiCtrl = require('../api/api.ctrl');

router.post('/login', apiCtrl.authUser);
router.post('/register', apiCtrl.registerUser);
router.post('/createCategory', apiCtrl.createCategory);
router.post('/addStore', apiCtrl.addStore);
router.post('/addCoupon', apiCtrl.addCoupon);

// router.get('/users', (req, res) => {
//     console.log("Started")
//     connection((db) => {
//         db.collection('users')
//             .find()
//             .toArray()
//             .then((users) => {
//                 response.data = users;
//                 res.json(response);
//             })
//             .catch((err) => {
//                 sendError(err, res);
//             });
//     });
// });

module.exports = router;