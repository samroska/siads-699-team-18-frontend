import { useState } from "react";
import { Paper , Divider, Box, Typography, Tooltip, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import ImageUpload from "./ImageUpload";

function Content() {
const [originalImage, setOriginalImage] =  useState("");
const [prediction, setPrediction] = useState("");
const [imageInfo, setImageInfo] = useState({});

  const formatToSignificantDigits = (num, digits = 4) => {
    if (num === 0) return "0";
    return parseFloat(num.toPrecision(digits));
  };

  const handleApiResponse = (data) => {
    setOriginalImage(data.originalImage);
    setPrediction(data.prediction);
    setImageInfo(data.image_info);
  };

  return (
    <div>
        <Paper style={{ padding: 16, marginTop: 64, minWidth: 400}}>
          <ImageUpload onResponse={handleApiResponse} />
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
export default Content;