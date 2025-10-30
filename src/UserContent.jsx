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
          Phone User Portal
        </Typography>
        <Typography variant="body2">
          This portal is for users seeking lesion classification <br/>
          results that are using smartphone images.<br/>
          Please upload an image to get started.
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
            {/* Key Map for C and B icons */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2, justifyContent: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ bgcolor: '#bdbdbd', color: 'white', width: 24, height: 24, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 16 }}>C</Box>
                <Typography variant="body2" color="text.secondary">Cancerous</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ bgcolor: '#bdbdbd', color: 'white', width: 24, height: 24, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 16 }}>B</Box>
                <Typography variant="body2" color="text.secondary">Benign</Typography>
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <Typography color="text.secondary">No image uploaded yet.</Typography>
      )}
    </Paper>
  );
}

export default UserContent;