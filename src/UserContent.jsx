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

              <Box>
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
                      <TableRow>
                        <TableCell>
                          <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                            Actinic Keratosis - Pre-cancerous skin lesion
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle1">
                            ACK: {formatToSignificantDigits(prediction.all_probabilities.ACK)}
                          </Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                            Basal Cell Carcinoma - Most common type of skin cancer
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle1">
                            BCC: {formatToSignificantDigits(prediction.all_probabilities.BCC)}
                          </Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                            Melanoma - Most dangerous form of skin cancer
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle1">
                            MEL: {formatToSignificantDigits(prediction.all_probabilities.MEL)}
                          </Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                            Nevus - Common mole or birthmark
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle1">
                            NEV: {formatToSignificantDigits(prediction.all_probabilities.NEV)}
                          </Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                            Squamous Cell Carcinoma - Second most common skin cancer
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle1">
                            SCC: {formatToSignificantDigits(prediction.all_probabilities.SCC)}
                          </Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                            Seborrheic Keratosis - Benign skin growth
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle1">
                            SEK: {formatToSignificantDigits(prediction.all_probabilities.SEK)}
                          </Typography>
                        </TableCell>
                      </TableRow>
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