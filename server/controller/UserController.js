const User = require('../models/User')
const Student = require('../models/Student')


exports.create = (req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"})
        return;
    }

    //new file
    const U = new User({
        User_id:req.body.User_id,
        name:req.body.name,
        password:req.body.password
    })

    var x = req.body.User_id;
    
    if(x == "1111" || x == "0151" || x == "0152" || x == "0153" || x == "0154" || x == "0155" || x == "0156" || x == "0127"){

    }else{
        const stud = new Student({
            StudID:req.body.User_id,
            Firstname:req.body.name
        })
    
        //save file in database
        stud.save()
    }

    U.save()
    .then(data =>{
        res.json({
            message: 'User Added Succesfully!'

        })
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message||"Some error occured while doing create operation"
        });
    });

}

exports.update = (req,res)=>{
    if(!req.body){
        res.status(400).send({message: "Data to update can not be empty!"})
        return;
    }

    const id = req.body.User_id;
    Role.findOneAndUpdate({User_id: id}, req.body, {useFindAndModify: false})
    .then(data =>{
        if(!data){
            res.status(404).send({message:`Cannot Update user with ${id}. Maybe user not found!`})
        }else{
            // res.send(data)
            res.json({
                message:'User: '+id+ ' updated'
            })
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Error Update user information"})
    })
    
}

exports.find = (req,res)=>{
    if(!req.body){
        res.status(400).send({message: "Data can not be empty!"})
        return;
    }

    const id = req.body.id;

        User.findById({User_id: id})
            .then(data=>{
                if(!data){
                    res.status(404).send({message: "User not Found with"+id+"id"})
                }else{
                    res.send(data)
                }
            })
            .catch(err=>{
                res.status(500).send({ message:"Eroor retrieving user with id"+id })
            })

}

exports.retrieve = (req, res) => {
    if(req.query.User_id){
        const id = req.query.User_id;

        User.findOne({User_id: id})
            .then(data=>{
                if(!data){
                    res.status(404).send({message: "User not Found with "+id+" id"})
                }else{
                    res.send(data)
                }
            })
            .catch(err=>{
                res.status(500).send({ message:"Eroor retrieving user with id "+id })
            })

    }else{
        User.find()
        .then(data => {
                res.send(data)
            })
            .catch(err=>{
                res.status(500).send({
                    message:err.message||"Error occured while retrieving User info"
                });
            });
    }
}