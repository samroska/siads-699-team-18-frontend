import { useRef, useState} from "react";
import { Box, Button, Typography, Alert, Snackbar } from "@mui/material";
 
const ImageUpload = ({onResponse, userType}) => {
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
    
    // Determine endpoint and base URL based on user type
    let endpoint = "";
    let baseUrl = "";
    if (userType === "doctor") {
      endpoint = "/doctor";
      baseUrl = "https://capstone-team-18-service-2.onrender.com";
    } else {
      endpoint = "/user";
      baseUrl = "https://capstone-team-18-service.onrender.com";
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
      <p>Upload your image:</p>
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