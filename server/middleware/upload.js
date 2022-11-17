const multer = require('multer') 
// const { GridFsStorage } = require("multer-gridfs-storage");

//defining images storage
const storage = multer.diskStorage({
    //destination for files
    destination:function(request, file, callback){
        callback(null, './assests/uploads/img');
    },

    //add back the extension
    filename:function (request, file, callback){
        // callback(null, Date.now()+file.filename);
        callback(null, file.originalname);

    },
})

//upload parameters for multer
const upload = multer({
    storage:storage,
    limits:{
        fieldSize:1024 * 1024 * 3,
    },
})