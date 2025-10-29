import { useState } from "react";
import { Paper , Divider, Box, Typography, Skeleton } from "@mui/material";
import DonutChart from "./DonutChart";
import ProbabilitiesProgressBars from "./ProbabilitiesProgressBars";
import { useNavigate } from "react-router-dom";
import ImageUpload from "./ImageUpload";

function UserContent() {
  const [originalImage, setOriginalImage] = useState("");
  const [prediction, setPrediction] = useState("");
  const [imageInfo, setImageInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleApiResponse = (data, isLoading = false) => {
    setLoading(isLoading);
    if (!isLoading) {
      setOriginalImage(data.originalImage);
      setPrediction(data.prediction);
      setImageInfo(data.image_info);
    }
  };

  return (
    <Paper style={{ padding: 16, marginTop: 64, minWidth: 400}}>
      {/* User Type Indicator */}
      <Box sx={{ mb: 2, textAlign: 'center' }}>
        <Typography variant="h6" color="primary">
          User Portal
        </Typography>
      </Box>

      <ImageUpload 
        onResponse={(data) => handleApiResponse(data, false)} 
        userType="user" 
        setLoading={setLoading}
      />
      <Divider style={{ margin: '16px 0' }} />

      {loading ? (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 2 }}>
          <Skeleton variant="rectangular" width={300} height={300} />
          <Box sx={{ width: '100%' }}>
            <Skeleton variant="text" width={200} height={40} />
            <Skeleton variant="rectangular" width={400} height={200} />
          </Box>
        </Box>
      ) : originalImage && prediction.all_probabilities ? (
        <>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 4, justifyContent: 'center' }}>
            <DonutChart data={prediction.all_probabilities} />
          </Box>
          <Box sx={{ mt: 4 }}>
            <ProbabilitiesProgressBars data={prediction.all_probabilities} />
          </Box>
        </>
      ) : (
        <Typography color="text.secondary">No image uploaded yet.</Typography>
      )}
    </Paper>
  );
}

export default UserContent;