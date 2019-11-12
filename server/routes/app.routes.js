const express = require('express');
const router = express.Router();
let fetchCtrl = require('../api/fetch.ctrl');

// router.get('/countCoupons', sortCtrl.countCoupons);
// router.get('/countBlogs', sortCtrl.countBlogs);
// router.get('/countStores', sortCtrl.countStores);
// router.get('/countUsers', sortCtrl.countUsers);


router.get('/fetchSlides', fetchCtrl.fetchSlides);
router.get('/fetchTopStores', fetchCtrl.fetchTopStores);
router.get('/fetchTopBlogs', fetchCtrl.fetchTopBlogs);
router.get('/fetchTopDeals', fetchCtrl.fetchTopDeals);
router.get('/fetchCoupons', fetchCtrl.fetchCoupons);
router.get('/singleStoreData', fetchCtrl.singleStoreData);
router.get('/fetchStores', fetchCtrl.fetchStores);

module.exports = router;