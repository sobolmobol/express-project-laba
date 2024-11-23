const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

function loadData(fileName){
    const filePath = path.join(__dirname, '..', `data\\${fileName}.json`);
    console.log(filePath);
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

router.get("/", function(request, response){
    const data = loadData('main');
    response.render('main', data);
});
router.get("/about", function(request, response){
    const data = loadData('about');
    response.render('about', data);
});
module.exports = router;