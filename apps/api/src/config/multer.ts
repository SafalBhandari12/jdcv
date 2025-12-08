import multer from "multer";

const max_size = process.env.MAX_UPLOAD_SIZE_MB
  ? parseInt(process.env.MAX_UPLOAD_SIZE_MB) * 1024 * 1024
  : 5 * 1024 * 1024;

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: max_size,
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") cb(null, true);
    else cb(null, false);
  },
});

export default upload;
