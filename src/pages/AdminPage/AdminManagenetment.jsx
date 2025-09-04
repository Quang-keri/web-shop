
import { useState } from "react";
import { storage } from "../../assets/firebase/firebase"; // import từ file firebase.js
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function AdminManagement() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const handleUpload = async () => {
    if (!file) {
      alert("Vui lòng chọn file!");
      return;
    }

    try {
      // Tạo tham chiếu đến nơi lưu trong Firebase Storage
      const storageRef = ref(storage, `images/${file.name}`);

      // Upload file
      await uploadBytes(storageRef, file);

      // Lấy URL để hiển thị hoặc lưu DB
      const downloadURL = await getDownloadURL(storageRef);
      setUrl(downloadURL);

      alert("Upload thành công!");
    } catch (err) {
      console.error(err);
      alert("Lỗi upload!");
    }
  };

  return (
    <div className="p-4">
      <h1>Upload ảnh lên Firebase</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>

      {url && (
        <div>
          <h2>Ảnh đã upload:</h2>
          <img src={url} alt="uploaded" width="200" />
        </div>
      )}
    </div>
  );
}
