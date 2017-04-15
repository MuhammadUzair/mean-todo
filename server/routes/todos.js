var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:123@ds155130.mlab.com:55130/meantodos',['todos']);

// Get Todos
router.get('/todos',function(req,res,next){
    db.todos.find(function(err , todos){
        if(err){
            res.send(err);
        }
        else{
            res.json(todos);
        }
    });
});

// Get Single Todos
router.get('/todo/:id',function(req,res,next){
    db.todos.findOne({
        _id: mongojs.ObjectId(req.params.id)
    },
    function(err , todo){
        if(err){
            res.send(err);
        }
        else{
            res.json(todo);
        }
    });
});

// Save Todos
router.post('/todo',function(req,res,next){
    var todo = req.body;
    if(!todo.text || !(todo.isCompleted + '')){
        res.status(400);
        res.json({"error":"Invalid Data"});
    }
    else{
        db.todos.save(todo,function(err,result){
            if(err){
            res.send(err);
        }
        else{
            res.json(result);
        }

        });
    }
});

// Update Todos
router.put('/todo/:id',function(req,res,next){
    var todo = req.body;
    var upObj = {};

    if(todo.isCompleted){
        upObj.isCompleted = todo.isCompleted;
    }

    if(todo.text){
        upObj.text = todo.text;
    }

    if(!upObj){
        res.status(400);
        res.json({"error":"Invalid Data"});
    }
    else{
        db.todos.update({
            _id: mongojs.ObjectId(req.params.id)
        },upObj,{},function(err,result){
            if(err){
            res.send(err);
        }
        else{
            res.json(result);
        }
        });
    }
});

// Delete Todos
router.delete('/todo/:id',function(req,res,next){
    db.todos.remove({
        _id: mongojs.ObjectId(req.params.id)
    },function(err,result){
        if(err){
        res.send(err);
    }
    else{
        res.json(result);
    }
    });
    
});
module.exports = router;