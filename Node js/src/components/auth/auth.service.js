const bcrypt = require('bcryptjs');
const { User } = require('../../db/models');
const JwtService = require('./jwt.service');
const db = require('../../db/db.js');
const logger = require('../../support/logger');

const { BadRequestError, NotFoundError } = require('../../utils/api-errors');

const AuthService = {
  /**
   * Login a user and generate token.
   * @async
   * @method
   * @param {UserDto} requestBody - Request Body
   * @returns {Context} Context object
   * @throws {NotFoundError} When the user is not found.
   */

  doLogin: async (requestBody) => {
    try {
      //email and password from the object is stored to variable and binded to query
    const { email, password } = requestBody;
    let queryObj1=`SELECT user_account.name, user_account.email, user_account.password, rolelist.roleId
    FROM user_account
    LEFT JOIN rolelist 
    ON user_account.userId = rolelist.userId
    WHERE user_account.email = '${email}';`
    // let queryObj = `select * from user_account where email = '${email}'`;
//query is passesd for execution and result is stored in  resultObj
    const resultObj = await db.promise(queryObj1);
    console.log("daqta ",password, resultObj[0].roleId);
    //checking the hashed registered password and user entered password
    const passwordMatch = await bcrypt.compare(password, resultObj[0].password);

    console.log("passwordMatch",passwordMatch)
   
    if (resultObj.length == 0 || passwordMatch == false) {
      throw new BadRequestError('Username or Password is invalid!');
    }

    payload = {
      userId: resultObj[0].userId,
      userRole: resultObj[0].roleId,
      userName: resultObj[0].name,
    };
// token is created with payload containing userId,roleId
    const accessToken = await JwtService.generateJWT({
      payload
    });
    return {
      accessToken,
      ...payload
    };
  } catch (error) {
    logger.error("dologin()"+error);
 }
    
  },

  doRegister: async (requestBody) => {
    try {
      //name ,email and password from the object is stored to variable and binded to query
      const { name, email, password} = requestBody; 
      var sqlQuery = `SELECT email from user_account where email = '${email}'`;
      const emailResult = await db.promise(sqlQuery);
      // checking if email alredy exist or not
      if (!emailResult.length == 0) {
        return new BadRequestError('Email is already in use');
      }

      role_Id=1
     //let insertQuery = `INSERT INTO tasklist (tasktitle, taskdescription, taskstartdatetime, taskenddatetime, tasktypeid, priorityid, statusid, uid)SELECT '${tasktitle}', '${taskdescription}', '${taskstartdatetime}', '${taskenddatetime}', tasktypeid, priorityid, statusid, uid          FROM tasktype, priority, statusdetails, userdetails          WHERE tasktype.tasktypetitle = '${tasktypetitle}'          AND priority.prioritytype = '${prioritytype}'          AND statusdetails.statustitle = '${statustitle}'          AND userdetails.username = '${username}';`;
     
      var sqlObj = `INSERT INTO user_account VALUES (?,?,?,?,?)`;
      // making db call for inset user in to user_account table with role table inserion 
      console.log("pASSWORD",password)
      const resultObj = await db.promise(sqlObj,[,name, email, password,role_Id])
     
      .then((result) => {
        // get inserted user id from previous query
        let queryObj = `select userId from user_account where userId = '${result.insertId}'`;
        return db.promise(queryObj);
      }).then((result) => {
        // insert useride into rolelist table with user role as static
        let roleType = 1; // user role type value = 1 and dadmin type = 2
        let queryObj = `INSERT INTO rolelist VALUES (?,?,?)`;
        return db.promise(queryObj,[,roleType, result[0].userId]);
      })
      .catch((err) => { 
        // write error into logger file
        console.log("catch error ",err);
      });

      if (resultObj.length == 0) {
        //
        logger.error("doRegister() Insert failed");
        //
        throw new BadRequestError('Insert failed');
      }
      return {
        resultObj
      };
    } catch (error) {
       logger.error("doRegister()"+error);
    }
    
  }
};

module.exports = AuthService;
