const Student = require('../models/Student')

exports.create = (req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"})
        return;
    }
    // if( Student.find(req.StudID)){
    //     res.status(400).send({message: "ID:"+req.StudID+" already exists in table"})
    //     return;
    // }

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
            res.send("Student updated")
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Error Update user information"})
    })
    
}

exports.update2 = (req,res)=>{
    if(!req.body){
        res.status(400).send({message: "Data to update can not be empty!"})
        return;
    }

    const id = req.params.StudID;
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

exports.retrieve = (req, res) => {
    if(req.query.StudID){
        const id = req.query.StudID;

        console.log("hello")

        Student.findOne({StudID: id})
            .then(data=>{
                if(!data){
                    res.status(404).send({message: "Student not Found with"+id+"id"})
                }else{
                    res.send(data)
                }
            })
            .catch(err=>{
                res.status(500).send({ message:"Eroor retrieving Student with id "+id })
            })

    }else{
        Student.find()
        .then(data => {
                res.send(data)
            })
            .catch(err=>{
                res.status(500).send({
                    message:err.message||"Error occured while retrieving Student info"
                });
            });
    }
}

exports.filter = async (req, res) => { //because i do .then i didnt use async
    if (!req.body) {
        res.status(400).send({ message: "Please enter some filter parameters!" })
        return;
    }


    // const { paymentPlan, Housing } = req.body;
    const students = await Student.find({ ...req.body });
    // const students = await Student.find({ ...req.body }); WHAtever is passed in req.body it used it to search

    return res.status(200).send({ students });


}//its fronts end job to arrange

exports.StudTotal = async (req,res)=>{
    const x = await Student.countDocuments({})

    return res.status(200).send({ x });
}

//verified count
exports.StudAdminvr = async (req,res)=>{
    const x = await Student.countDocuments({ Adminvr: true})

    return res.status(200).send({ x });
}

exports.StudFinancevr = async (req,res)=>{
    const x = await Student.countDocuments({ Financevr: true})

    return res.status(200).send({ x });
}

exports.StudHousingvr = async (req,res)=>{
    const x = await Student.countDocuments({ Housingvr: true})

    return res.status(200).send({ x });
}

exports.StudItvr = async (req,res)=>{
    const x = await Student.countDocuments({ Itvr: true})

    return res.status(200).send({ x });
}

exports.StudHealthvr = async (req,res)=>{
    const x = await Student.countDocuments({ Healthvr: true})

    return res.status(200).send({ x });
}

exports.StudActvr = async (req,res)=>{
    const x = await Student.countDocuments({ Studactvr: true})

    return res.status(200).send({ x });
}

exports.totalOpenerp = async (req,res)=>{
    const x = await Student.countDocuments({ OpenerpStatus: true})

    return res.status(200).send({ x });
}

exports.totalSEmail = async (req,res)=>{
    const x = await Student.countDocuments({ SchoolEmail: true})

    return res.status(200).send({ x });
}

//status
exports.StudAdminStatus = async (req,res)=>{
    var id = req.body.StudID;

    const Adminvrstatus = await Student.find({StudID: id}).distinct("Adminvr");
    // console.log(curso)
    return res.status(200).send({ Adminvrstatus });
}

exports.StudFinanceStatus = async (req,res)=>{
    var id = req.body.StudID;

    const Financevrstatus = await Student.find({StudID: id}).distinct("Financevr");
    // console.log(curso)
    return res.status(200).send({ Financevrstatus });
}

exports.StudHousingStatus = async (req,res)=>{
    var id = req.body.StudID;

    const Housingvrstatus = await Student.find({StudID: id}).distinct("Housingvr");
    // console.log(curso)
    return res.status(200).send({ Housingvrstatus });
}

exports.StudItStatus = async (req,res)=>{
    var id = req.body.StudID;

    const Itvrstatus = await Student.find({StudID: id}).distinct("Itvr");
    // console.log(curso)
    return res.status(200).send({ Itvrstatus });
}

exports.StudHealthStatus = async (req,res)=>{
    var id = req.body.StudID;

    const Healthvrstatus = await Student.find({StudID: id}).distinct("Healthvr");
    // console.log(curso)
    return res.status(200).send({ Healthvrstatus });
}

exports.StudactStatus = async (req,res)=>{
    var id = req.body.StudID;

    const Studactvrstatus = await Student.find({StudID: id}).distinct("Studactvr");
    // console.log(curso)
    return res.status(200).send({ Studactvrstatus });
}

exports.SEmailStatus = async (req,res)=>{
    var id = req.body.StudID;

    const SEmailvrstatus = await Student.find({StudID: id}).distinct("SchoolEmail");
    // console.log(curso)
    return res.status(200).send({ SEmailvrstatus });
}

exports.OpenerpStatus = async (req,res)=>{
    var id = req.body.StudID;

    const Openerpvrstatus = await Student.find({StudID: id}).distinct("OpenerpStatus");
    // console.log(curso)
    return res.status(200).send({ Openerpvrstatus });
}



