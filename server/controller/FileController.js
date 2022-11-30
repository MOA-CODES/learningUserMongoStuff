const File = require('../models/File')

exports.create = (req,res)=>{
    //validate request
    let filenames = {};
    console.log(req.files);
    if (!req.files) {
		return res.status(400).send({ success: false, message:"Error uploading file, try again" });
	} else {
        // new file
        console.log(Object.keys(req.files));
        Object.keys(req.files).map((file,index)=>{
            filenames[file] = req.files[file][0].filename;
        });
    
        const F = new File({
            StudID:req.body.StudID,
            ...filenames
        })
        F.save();
        return res.status(200).send({ success: true, message:"Success upload successful" });
    }
}

exports.update = (req,res)=>{
    if(!req.body){
        res.status(400).send({message: "Data to update can not be empty!"})
        return;
    }

    const id = req.body.StudID;
    Role.findOneAndUpdate({StudID: id}, req.body, {useFindAndModify: false})
    .then(data =>{
        if(!data){
            res.status(404).send({message:`Cannot Update user with ${id}. Maybe user not found!`})
        }else{
            res.json({
                message:'File: '+id+ ' updated'
            })
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Error Update user information"})
    })
}

exports.retrieve = (req, res) => {
    if(req.query.StudID){
        const id = req.query.StudID;

        File.findOne({StudID: id})
            .then(data=>{
                if(!data){
                    res.status(404).send({message: "File not Found with "+id+" id"})
                }else{
                    res.send(data)
                }
            })
            .catch(err=>{
                res.status(500).send({ message:"Eroor retrieving File with id "+id })
            })

    }else{
        File.find()
        .then(data => {
                res.send(data)
            })
            .catch(err=>{
                res.status(500).send({
                    message:err.message||"Error occured while retrieving File info"
                });
            });
    }
}