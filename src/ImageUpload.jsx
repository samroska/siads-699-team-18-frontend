import { useRef, useState} from "react";
import { Box, Button, Typography, Alert, Snackbar, CircularProgress } from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
 
const ImageUpload = ({onResponse, userType}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] =  useState(null);
  const [loading, setLoading] =  useState(false);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const fileInputRef = useRef(null);

  const clearInput = () => {
    setSelectedFile(null);
    // Do not clear previewUrl so image stays after submit
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
    
    // Determine endpoint and base URL based on user type
    let endpoint = "";
    let baseUrl = "";
    // if (userType === "doctor") {
    //   endpoint = "/doctor";
    //   baseUrl = "https://capstone-team-18-service-2.onrender.com";
    // } else {
    //   endpoint = "/user";
    //   baseUrl = "https://capstone-team-18-service.onrender.com";
    // }
      if (userType === "doctor") {
      endpoint = "/doctor";
      baseUrl = "http://localhost:8000";
    } else {
      endpoint = "/user";
      baseUrl = "http://localhost:8080";
    }

    try {
      const res = await fetch(`${baseUrl}${endpoint}`, {
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
      <Box
        sx={{
          border: '2px dashed #1976d2',
          borderRadius: 2,
          p: 3,
          mt: 2,
          mb: 2,
          background: '#fafafa',
          minWidth: 320,
          textAlign: 'center',
          cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.6 : 1,
        }}
        onDragOver={e => { e.preventDefault(); if (!loading) e.currentTarget.style.borderColor = '#1565c0'; }}
        onDragLeave={e => { e.preventDefault(); if (!loading) e.currentTarget.style.borderColor = '#1976d2'; }}
        onDrop={e => {
          e.preventDefault();
          if (loading) return;
          const file = e.dataTransfer.files[0];
          if (file) {
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file));
          }
        }}
        onClick={() => {
          if (!loading && fileInputRef.current) fileInputRef.current.click();
        }}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".png, .jpg, .jpeg, .heic, .heif"
          disabled={loading}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <Typography variant="body2" color="text.secondary">
          Drag & drop an image here, or click to select<br />
          Accepted types: .png, .jpg, .jpeg, .heic, .heif
        </Typography>
      </Box>

      {/* Image preview with border and placeholder */}
      <Box sx={{ border: '2px solid #1976d2', borderRadius: 2, p: 1, mt: 2, mb: 2, background: '#fafafa', minHeight: 320, minWidth: 320, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Preview"
            style={{ maxWidth: 300, maxHeight: 300, display: 'block', margin: '0 auto', borderRadius: 8 }}
          />
        ) : (
          <CameraAltIcon sx={{ fontSize: 80, color: '#bdbdbd' }} />
        )}
      </Box>

      <Button style={{ marginTop: 16, minWidth: 120 }} 
        onClick={handleSubmit}
        type="submit" 
        variant="contained" 
        color="primary"
        disabled={!selectedFile || loading}>
        {loading ? 'Uploading...' : 'Upload'}
      </Button>
  {loading && <CircularProgress color="primary" sx={{ mt: 1 }} />}
      
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
    </Box>
 
  );
};

export default ImageUpload;