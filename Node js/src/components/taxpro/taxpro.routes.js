/**
 *
 * @param {Object} TaxProRouter
 * @param {ExpressRouter} TaxProRouter.router
 * @param {Taxprocontroller} TaxProRouter.TaxProController
 * @param {TaxProRouter} TaxProRouter.TaxProRouter
 * @param {makeExpressCallback} TaxProRouter.makeExpressCallback
 * @param {makeValidatorCallback} TaxProRouter.makeValidatorCallback
 * @returns {ExpressRouter}
 */

const authorization = require('../../middlewares/auth');

module.exports = ({ router, TaxProController, makeExpressCallback }) => {
  
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/
    router.get('/list',authorization, makeExpressCallback(TaxProController.list));

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */

    router.get('/view/:id',authorization, makeExpressCallback(TaxProController.viewDetails));
    router.post('/add', makeExpressCallback(TaxProController.addTaxPro));
    return router;
  };