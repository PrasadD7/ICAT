const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Question } = require('../models/questions');

//localhost:3000/questios -GET
router.get('/easy', (req, res) => {
    console.log(req.param);
    Question.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Grade III Questions :' + err); }
    }).byDifficulty('easy');
});

router.get('/moderate:id', (req, res) => {
    console.log(req.params.id);
    Question.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Grade II Questions :' + err); }
    }).byDifficulty('moderate');
});

router.get('/difficult', (req, res) => {
    console.log(req.param);
    Question.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Grade I Questions :' + err); }
    }).byDifficulty('difficult');
}); //TRY With URL query string/request param later-merge 3 functions into 1


//POST
router.post('/addEasy', (req, res) => {
    //TODO- replace hardcoded value with angular's json (validated)
    var qE=new Question({
        question: "NewEasy",
        category: "NewEasy",
        difficulty: "difficult",
        questonBank: "NewEasy",
        options: ["String", "String", "String", "String"],
        answer: "String"
      });
      qE.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Add Question:' +err); }
    });
}); //TRY With URL query string/request param later-merge 3 functions into 1

//Delete- TODO
//findOneAndDelete or findOneAndRemove


module.exports = router;