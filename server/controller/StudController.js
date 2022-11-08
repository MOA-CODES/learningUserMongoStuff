const Student = require('../models/Student')

exports.create = (req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"})
        return;
    }

    //new user
    const stud = new Student({
        StudID:req.body.StudID,
        Firstname:req.body.Firstname
    })

    //save user in database
    stud.save()
    .then(data =>{
        // res.send(data)
        // res.redirect('/add-user')
        res.json({
            message: 'Student Added Succesfully!'

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

    const id = req.body.StudID;
    Student.findOneAndUpdate({StudID: id}, req.body, {useFindAndModify: false})
    .then(data =>{
        if(!data){
            res.status(404).send({message:`Cannot Update user with ${id}. Maybe user not found!`})
        }else{
            // res.send(data)
            res.json({
                message:'Student: '+id+' updated'
            })
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Error Update user information"})
    })
    
}

exports.delete = (req,res)=>{
    const id = req.body.StudID;

    // Userdb.findOneAndDelete()
    Userdb.findOneAndDelete({StudID: id})
        .then(data =>{
            if(!data){
                res.status(404).send({message:`Cannot Delete with ${id}. id maybe Wrong!`})
            }else{
                res.send({
                    message:"User was deleted successfully!"
                })
            }
        })
        .catch(err=>{
            res.status(500).send({
                message:"Could not delete User with id=" +id
            });
        });
}