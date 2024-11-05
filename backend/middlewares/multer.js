import multer from 'multer'

const storage=multer.diskStorage({
    filename:function(req,file,callback){
        callback(null,file.originalname)
    }
})

const upload=multer({storage})

export default upload 


// import multer from 'multer';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import fs from 'fs';

// // Get __dirname equivalent in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Ensure the 'uploads' directory exists, or create it if it doesn't
// const uploadDirectory = path.join(__dirname, 'uploads');
// if (!fs.existsSync(uploadDirectory)) {
//     fs.mkdirSync(uploadDirectory, { recursive: true });
// }

// const storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//         callback(null, uploadDirectory); // Set the upload destination
//     },
//     filename: function (req, file, callback) {
//         callback(null, Date.now() + '-' + file.originalname); // Name the file uniquely with a timestamp
//     }
// });

// const upload = multer({ storage });

// export default upload;
