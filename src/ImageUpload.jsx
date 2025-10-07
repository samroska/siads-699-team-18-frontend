import { useRef, useState} from "react";
import { Box, Button, Typography } from "@mui/material";
 
const ImageUpload = ({onResponse}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] =  useState(null);
  const [loading, setLoading] =  useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);
    try {
      const res = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      });
      const blob = await res.json();
      onResponse({
        originalImage: previewUrl || "",
        prediction: blob.predictions || "",
        image_info: blob.image_info || ""
      });
    } catch (err) {
      onResponse({ imageUrl: "", prediction: "Error: " + err.message });
    }
    setLoading(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2  }}>
      <p>Upload a .png, .jpg or .jpeg file:</p>
      <input
        ref={fileInputRef}
        type="file" 
        accept=".png, .jpg, .jpeg, .heic, .heif"
        disabled={loading}
        onChange={handleFileChange} 
      />
      <Button style={{ marginTop: 16, minWidth: 120 }} 
        onClick={handleSubmit}
        type="submit" 
        variant="contained" 
        color="primary">
        Upload
      </Button>
      {loading && <Typography variant="body2" color="text.secondary">Loading...</Typography>}
      {/* <Typography 
        variant="body2" 
        color="text.secondary">
          Selected: {selectedFile ? selectedFile.name : 'None'}
        </Typography> */}
    </Box>
 
  );
};

export default ImageUpload;