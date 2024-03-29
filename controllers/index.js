const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-rountes.js');
const dashboardRoutes = require('./dashboard-rountes.js');


router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);


router.use((req, res) => {
    res.status(404).end();
});


module.exports = router;