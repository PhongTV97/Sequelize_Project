import express from "express";
let router = express.Router();

//always check
router.use((res, req, next) => {
    console.log("router");
})


export default router;