import { useRef, useState} from "react";
import { Box, Button, Typography, Alert, Snackbar } from "@mui/material";
 
const ImageUpload = ({onResponse}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] =  useState(null);
  const [loading, setLoading] =  useState(false);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const fileInputRef = useRef(null);

  const clearInput = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    setLoading(true);
    setError("");
    setShowError(false);
    
    const formData = new FormData();
    formData.append("file", selectedFile);
    
    try {
      const res = await fetch("https://capstone-team-18-service.onrender.com/predict", {
        method: "POST",
        body: formData,
      });
      
      if (!res.ok) {
        const errorData = await res.text();
        throw new Error(`Server error ${res.status}: ${errorData}`);
      }
      
      const blob = await res.json();
      onResponse({
        originalImage: previewUrl || "",
        prediction: blob.predictions || "",
        image_info: blob.image_info || ""
      });
      clearInput();
    } catch (err) {
      setError(err.message || "An unexpected error occurred");
      setShowError(true);
      onResponse({ imageUrl: "", prediction: "Error: " + err.message });
    }
    setLoading(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2  }}>
      <p>Upload a .png, .jpg, .jpeg file:</p>
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
        color="primary"
        disabled={!selectedFile || loading}>
        {loading ? 'Uploading...' : 'Upload'}
      </Button>
      {loading && <Typography variant="body2" color="text.secondary">Loading...</Typography>}
      
      {/* Error Snackbar */}
      <Snackbar 
        open={showError} 
        autoHideDuration={6000} 
        onClose={() => setShowError(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          severity="error" 
          onClose={() => setShowError(false)}
          sx={{ width: '100%' }}
        >
          {error}
        </Alert>
      </Snackbar>
      
      {/* <Typography 
        variant="body2" 
        color="text.secondary">
          Selected: {selectedFile ? selectedFile.name : 'None'}
        </Typography> */}
    </Box>
 
  );
};

export default ImageUpload;