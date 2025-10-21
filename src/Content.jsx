import { useState } from "react";
import { Paper , Divider, Box, Typography, Tooltip, Table, TableBody, TableCell, TableContainer, TableRow, Tabs, Tab, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ImageUpload from "./ImageUpload";

function Content({ userTypeDefault = "user" }) {
  const [originalImage, setOriginalImage] = useState("");
  const [prediction, setPrediction] = useState("");
  const [imageInfo, setImageInfo] = useState({});
  const [userType, setUserType] = useState(userTypeDefault); // "doctor" or "user"
  const navigate = useNavigate();

  const formatToSignificantDigits = (num, digits = 4) => {
    if (num === 0) return "0";
    return parseFloat(num.toPrecision(digits));
  };

  const handleApiResponse = (data) => {
    setOriginalImage(data.originalImage);
    setPrediction(data.prediction);
    setImageInfo(data.image_info);
  };

  const handleTabChange = (event, newValue) => {
    setUserType(newValue);
  };

  return (
    <div>
        <Paper style={{ padding: 16, marginTop: 64, minWidth: 400}}>
          {/* Home Button */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <Button 
              variant="outlined" 
              size="small" 
              onClick={() => navigate('/')}
            >
              Home
            </Button>
          </Box>
          
          {/* User Type Indicator */}
          <Box sx={{ mb: 2, textAlign: 'center' }}>
            <Typography variant="h6" color="primary">
              {userType === 'doctor' ? 'Doctor Portal' : 'User Portal'}
            </Typography>
          </Box>

          <ImageUpload onResponse={handleApiResponse} userType={userType} />
          <Divider style={{ margin: '16px 0' }} />

         {originalImage ? (
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 2 }}>
              <Box  >
                <img 
                  src={originalImage} 
                  alt="Uploaded" 
                  style={{ maxWidth: '100%', maxHeight: 300, width: '100%', objectFit: 'contain' }}
                />
              </Box>
              <Box  >
                <TableContainer component={Paper} sx={{ width: '100%' }}>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <Typography variant="subtitle1" gutterBottom sx={{ display: 'block' }}>
                            Classifcation
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
export default Content;