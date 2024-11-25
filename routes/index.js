const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

function loadData(...fileNames) {
    if (fileNames.length === 1) {
        const filePath = path.join(__dirname, '..', 'data', `${fileNames[0]}.json`);
        console.log(filePath);
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } else {
        let data = {};
        for (const fileName of fileNames) {
            const filePath = path.join(__dirname, '..', 'data', `${fileName}.json`);
            console.log(filePath);
            const fileData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            data = Object.assign(data, fileData); 
        }
        return data;
    }
}


router.get("/", function(request, response){
    const data = loadData('main');
    response.render('main', data);
});
router.get("/about", function(request, response){
    const data = loadData('about');
    response.render('about', data);
});
router.get("/menu", function(request, response){
    const data = loadData('menu');
    response.render('menu', data);
});
router.get("/gallery", function(request, response){
    const data = loadData('gallery');
    response.render('gallery', data);
});
router.get("/contact", function(request, response){
    const data = loadData('contact', 'reviews');
    response.render('contact', data);
});
router.post('/contact', (req, res) => {
    console.log(req.body); 
    res.send('Данные получены');
});

module.exports = router;