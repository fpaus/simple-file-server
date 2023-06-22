const router = require('express').Router();
const files = {
  'test1.csv': (res) => res.send(`file,text,number,hex`),
  'test2.csv': (res) =>
    res.send(`file,text,number,hex
test2.csv,lBQW,
test2.csv,hD,37,bd95b141071a53a0d706e7260a5b3e53`),
  'test3.csv': (res) =>
    res.send(`file,text,number,hex
test3.csv,A,918
test3.csv,P,5597,2cb2717f5ec780cd7db2c9dc6b597d4c
test3.csv,arOkfSHzLGtrEkWJdSJJWwI,34019420,50ddfd7ba3b0b43794a89daaa5150609
test3.csv,OCkIxb,24,e1951fc1eaf782c80bf939b2fac693b3`),
  'test18.csv': (res) =>
    res.send(`file,text,number,hex
test18.csv,bKMm
test18.csv,YJYCfctjFBIKLYEbtOOfTPTcfLuio,55941,jzd66017bcfa9be1bfac0c712529ff
test18.csv,eefQTMMWpuCJ,24142324781789021713144380386717,jz1523b7ff43b4410b13caced21b6c
test18.csv,hLEttUbeuOHOXrUyxfFAzxRKYjuxY,7,jz6083671b8835b61cc0deca0e2385
test18.csv,RZTNAwtQxEwxiAet,0527316,jz9a05328826449c12cb1740ab85e7
test18.csv,qlxTmmzDGNsljlzrUvpzSpXc,80403186,jz355d361b337d3bf8e44028f99b39`),
  'test4.csv': (res) =>
    res.status(500).send({
      code: 'API-500',
      message: 'File error',
      details: 'FILE_ERROR',
      status: 500,
    }),
  'test5.csv': (res) =>
    res.status(404).send({
      code: 'SYS-ERR',
      message: 'Not Found',
      details: null,
      status: 404,
    }),
  'test6.csv': (res) =>
    res.send(`file,text,number,hex
test6.csv,aRjse
test6.csv,bAGA,006o,ddea4d828335e0a951c5e8673d46d6f2
test6.csv,LvqDzC,281641148o,3ab0bb8e0228feccea53e44699a795e4
test6.csv,qycHaqVExqaWdENnQssHYlfo,925219755o,3b5741506f499f0f2ec4ce318d8c766b
test6.csv,zptRDKIKdpdefoF,58o,3b4b684e610db7fb82fb02fcd8118707
test6.csv,XMpPBXIUlwcOGTYcVXGf,1261324o,4b2d829e7251d0c057cea6330e24f46a
test6.csv,hRZHCbkgpPMZqcp,84447299o,3978bc2d156ab20b710071f690b4d236
test6.csv,TMDHtzTlNJizBXy,236036881o,6d7261b57048f3267f17f5d9f36c706d
test6.csv,yjAutwzZHqMjjGRkbX,44173734o,c5fc19843a187e445c1dfb1d6cf06f2f,,
test6.csv,iawJB
test6.csv,Rwi,775150o,49aa911769ebeecb3b415b34139ffade
test6.csv,cuETgwTFc,0o,3ddc7439aa9ceac1c0f92bc02a8d3b47`),
  'test9.csv': (res) =>
    res.send(`file,text,number,hex
test9.csv,IUKGz
test9.csv,iTeTBSf,9546,e3d04d67fd7f074cd19dcd2db1155457
test9.csv,nXdTlcaIlbSorTMasMELFD,08601,0158705fa1abaa1c32bfda6c65d30fef
test9.csv,criuduoTHjCSthgB,50,559589b2058bd859cb9732d477579f7c
test9.csv,UGKeTyjbKZZTrEWSyXiWRFPVyu,8606193724,663bc54c7c2633a47f7320bdc06cac5b
test9.csv,goCEL,5890341,8126882d1474e1f26b9344f991f35e4f
test9.csv,dGyHRTPOyzKTFFqpM,59,e9b30ed8e96aeb8fd6c91a5c2a04d34b
test9.csv,BzMi,968,8cdfba08f8c7a690c5a4b9fe7501c41f
test9.csv,QWGNLnydsjfMfU,529,a7aade7b759ff0c5bf78953817ae7d1f,,
test9.csv,muMJn
test9.csv,DRsIPR,06077,9560920c8a3c0771455524581ad78a81
test9.csv,bCBGVCPhxRx,42322369,2d3f760c283a4cef78ca785db6eddc00
test9.csv,Nl,32,1a94c76e6da7f427a5d31d06dc759793
test9.csv,uWMmWMregELgnGrsXFMUIZAdnxlgkPli,563027,706c814eb14cef6eb0e3143dff08f1d8`),
  'test15.csv': (res) =>
    res.send(`file,text,number,hex
test15.csv,rTgp
test15.csv,ApRumHFmSiCGyXBgTETDeFybQvtUv,,
test15.csv,fSODG,,
test15.csv,MoINqVbqlhaXWYDUhGSeHCxtt,,
test15.csv,BemdvDIucOTAVHEUmrbXvXxErCXLFKOf,,
test15.csv,lJhNZpcqb,,
test15.csv,ySgRTexQVpypaKzQm,,
test15.csv,AygXDxnLjSAuvc,,
test15.csv,EoqynXXsh,,,,
test15.csv,xCSu
test15.csv,nYNUOtKDByGBE,,
test15.csv,kSDIsFsOuXnDBLYWMpQijxcTf,,
test15.csv,umOhBkYTgYutrQQOdcoV,,
test15.csv,pAVTAwCjlWwqSjoXgRbQUORFQUEbMYiX,,
test15.csv,kIQWrIHppcVfUsaA,,
test15.csv,GdHavOZIpVWiCDbDyKewwVRb,,`),
};

/**
 * @swagger
 * components:
 *   schemas:
 *     FileListResponse:
 *       type: object
 *       properties:
 *         files:
 *           type: array
 *           items:
 *             type: string
 *     Error:
 *       type: object
 *       properties:
 *         code:
 *           type: string
 *         message:
 *           type: string
 *         details:
 *           type: string
 *         status:
 *           type: integer
 *           oneOf:
 *             - exclusiveMinimum: 400
 *               exclusiveMaximum: 599
 */

/**
 * @swagger
 *  tags:
 *    name: File
 *    description: Checking files
 */

/**
 * @swagger
 * /files:
 *  get:
 *    tags: [File]
 *    summary: List files
 *    responses:
 *      200:
 *        description: Request was successful
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/FileListResponse'
 *      400:
 *        description: Bad request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *            example:
 *              code: API-400
 *              message: User error
 *              details: USER_ERROR
 *              status: 400
 *      500:
 *        description: Internal server error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *            example:
 *              code: API-500
 *              message: File error
 *              details: FILE_ERROR
 *              status: 500
 */
router.get('/files', (req, res) => {
  res.send({ files: Object.keys(files) });
});

/**
 * @swagger
 * /file/{name}:
 *     get:
 *       tags:
 *         - File
 *       summary: Get file
 *       parameters:
 *         - name: name
 *           in: path
 *           required: true
 *           schema:
 *             type: string
 *       responses:
 *         200:
 *           description: Request was successful
 *         400:
 *           description: Bad request
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Error'
 *               example:
 *                 code: API-400
 *                 message: User error
 *                 details: USER_ERROR
 *                 status: 400
 *         404:
 *           description: File not found
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Error'
 *               example:
 *                 code: API-404
 *                 message: File error
 *                 details: FILE_NOT_FOUND
 *                 status: 404
 *         500:
 *           description: Internal server error
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Error'
 *               example:
 *                 code: API-500
 *                 message: File error
 *                 details: FILE_ERROR
 *                 status: 500
 */
router.get('/file/:name', (req, res) => {
  const { name } = req.params;
  const handler = files[name];
  if (handler) {
    handler(res);
  } else {
    res.status(404).send({
      code: 'SYS-ERR',
      message: 'Not Found',
      details: null,
      status: 404,
    });
  }
});

module.exports = router;
