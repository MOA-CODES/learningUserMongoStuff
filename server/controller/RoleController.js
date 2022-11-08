const Role = require('../models/Role')

exports.create = (req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"})
        return;
    }

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