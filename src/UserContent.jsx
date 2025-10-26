import { useState } from "react";
import { Paper , Divider, Box, Typography, Tooltip, Table, TableBody, TableCell, TableContainer, TableRow, Tabs, Tab, Button, Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ImageUpload from "./ImageUpload";

function UserContent() {
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
          ) : originalImage ? (
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 2 }}>

              <Box sx={{ width: '100%' }}>
                <TableContainer component={Paper} sx={{ width: '100%' }}>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <Typography variant="subtitle1" gutterBottom sx={{ display: 'block' }}>
                            Classification
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle1">
                             Probability
                          </Typography>
                        </TableCell>
                      </TableRow>
                      {prediction.all_probabilities && Object.entries(prediction.all_probabilities).map(([key, value]) => (
                        <TableRow key={key}>
                          <TableCell>
                            <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                              {key}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="subtitle1">
                              {formatToSignificantDigits(value)}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          ) : <Typography color="text.secondary">No image uploaded yet.</Typography>}
        </Paper>
    </div>
  );
}

export default UserContent;