import fs from "fs";

const uploadImage = async function (req, res, next) {
  try {
    if (!req.files || Object.keys(req.files).length === 0)
      return res
        .status(400)
        .json({ msg: "Không co tập tin nào được tải lên." });

    const file = req.files.file;

    if (file.size > 1024 * 1024) {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "Kích thước quá lớn" });
    } // 1mb

    if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "Định dạng tệp không chính xác!" });
    }

    next();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};

export default uploadImage;
