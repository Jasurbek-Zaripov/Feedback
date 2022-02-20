import multer from "multer";

const upload = multer({
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            return cb(null, true);
        }
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'), false);

    },
    limits: { fileSize: 5 * 1024 * 1024 }
}).single('file');
export { upload };