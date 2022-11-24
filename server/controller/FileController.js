const File = require('../models/File')

exports.create = (req,res)=>{
    //validate request
    console.log(req.file);
    if (!req.file) {
		return res.status(400).send({ success: false, message:"Error uploading file, try again" });
	} else {
        // new file
        const F = new File({
            StudID:req.body.StudID,
            Jamb:req.file.filename,
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
            // res.send(data)
            res.json({
                message:'File: '+id+ ' updated'
            })
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Error Update user information"})
    })
    
}