const Role = require('../models/Role')

exports.create = (req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"})
        return;
    }
    // if( Role.find(req.body.Role_id)  ){
    //     res.status(400).send({message: "ID: already exists in table"})
    //     return;
    // }
    //new role
    const R = new Role({
        Role_id:req.body.Role_id,
        Title:req.body.Title,
        Description:req.body.Description
    })

    //save role in database
    R.save()
    .then(data =>{
        // res.send(data)
        // res.redirect('/add-user')
        res.json({
            message: 'Role Added Succesfully!'

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

    const id = req.body.Role_id;
    Role.findOneAndUpdate({Role_id: id}, req.body, {useFindAndModify: false})
    .then(data =>{
        if(!data){
            res.status(404).send({message:`Cannot Update user with ${id}. Maybe user not found!`})
        }else{
            res.send("Role updated")
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Error Update user information"})
    })
}


exports.retrieve = (req, res) => {
    if(req.query.Role_id){
        const id = req.query.Role_id;

        Role.findOne({Role_id: id})
            .then(data=>{
                if(!data){
                    res.status(404).send({message: "Role not Found with "+id+" id"})
                }else{
                    res.send(data)
                }
            })
            .catch(err=>{
                res.status(500).send({ message:"Eroor retrieving Role with id "+id })
            })

    }else{
        Role.find()
        .then(data => {
                res.send(data)
            })
            .catch(err=>{
                res.status(500).send({
                    message:err.message||"Error occured while retrieving Role info"
                });
            });
    }
}