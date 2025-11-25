import { useState } from "react";
import { Paper , Divider, Box, Typography, Skeleton } from "@mui/material";
import ProbabilitiesProgressBars from "./ProbabilitiesProgressBars";
import { useNavigate } from "react-router-dom";
import ImageUpload from "./ImageUpload";

function DoctorContent() {
    // Export probabilities as CSV
    const handleExportCSV = () => {
      if (!prediction || !prediction.all_probabilities) return;
      const probs = prediction.all_probabilities;
      const headers = ['Class', 'Probability (%)'];
      const rows = Object.entries(probs).map(([key, value]) => [key, (value * 100).toFixed(1)]);
      const csvContent = [headers, ...rows]
        .map(row => row.map(String).join(','))
        .join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'probabilities.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };
  const [originalImage, setOriginalImage] = useState("");
  const [prediction, setPrediction] = useState("");
  const [imageInfo, setImageInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formatToSignificantDigits = (num, digits = 4) => {
    if (num === 0) return "0";
    return parseFloat(num.toPrecision(digits));
  };

  const handleApiResponse = (data, isLoading = false) => {
    setLoading(isLoading);
    if (!isLoading) {
      setOriginalImage(data.originalImage);
      setPrediction(data.prediction);
      setImageInfo(data.image_info);
    }
  };

  return (
    <div>
        <Paper style={{ padding: 16, marginTop: 64, minWidth: 400}}>
          {/* Home Button */}

          
          {/* User Type Indicator */}
          <Box sx={{ mb: 2, textAlign: 'center' }}>
            <Typography variant="h6" color="primary">
              Doctor Portal
            </Typography>
             <Typography variant="body2">
              Upload a dermatoscopic skin-lesion photo and let our machine learning model <br/>
              provide preliminary assessment of your skin condition
            </Typography>
          </Box>

          <ImageUpload 
            onResponse={(data) => handleApiResponse(data, false)} 
            userType="doctor" 
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
          ) : (originalImage && prediction && typeof prediction === 'object' && prediction.all_probabilities && Object.keys(prediction.all_probabilities).length > 0) ? (
            <>
              {/* <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 4, justifyContent: 'center' }}>
                <DonutChart data={prediction.all_probabilities} />
              </Box> */}
              <Box sx={{ mt: 4 }}>
                {/* Highest probability paragraph */}
                {(() => {
                  const probs = prediction.all_probabilities || {};
                  const keys = Object.keys(probs);
                  const values = Object.values(probs);
                  if (keys.length > 0 && typeof values[0] === 'number') {
                    const maxKey = keys[0];
                    const maxValue = values[0];
                    if (maxValue === 0) {
                      return (
                        <Typography variant="body1" sx={{ mb: 2 }}>
                          We could not classify this image.
                        </Typography>
                      );
                    }
                    return (
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        The highest predicted probability is ({parseFloat(maxValue.toPrecision(5))}), <br/>
                        meaning the model thinks there’s a ({(maxValue * 100).toFixed(1)}%) chance <br/>
                        that the image corresponds to <b>{maxKey}</b>.
                      </Typography>
                    );
                  }
                  return (
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      No probability data available.
                    </Typography>
                  );
                })()}
                <ProbabilitiesProgressBars data={prediction.all_probabilities} />
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  <button onClick={handleExportCSV} style={{ padding: '8px 16px', borderRadius: 4, border: '1px solid #1976d2', background: '#1976d2', color: 'white', cursor: 'pointer', fontWeight: 500 }}>
                    Export CSV
                  </button>
                </Box>
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
    </div>
  );
}

export default DoctorContent;