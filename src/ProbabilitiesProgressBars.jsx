import React, { useState } from "react";
import { Box, Typography, LinearProgress, Accordion, AccordionSummary, AccordionDetails, IconButton, Avatar, Tooltip } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ProbabilityDetails from "./ProbabilityDetails";

function ProbabilitiesProgressBars({ data }) {
  // Cancerous and benign keys
  const cancerousKeys = [
    'Melanoma',
    'Basal Cell Carcinoma',
    'Squamous Cell Carcinoma',
    'Melanoma Metastasis'
  ];
  const benignKeys = [
    'Nevus',
    'Seborrheic Keratosis',
    'Solar Lentigo',
    'Actinic Keratosis',
    'Scar',
    'Dermatofibroma',
    'Vascular Lesion'
  ];
  const entries = Object.entries(data);
  // Monochromatic shades
  // Use only darker shades
  const redShades = ['#e53935', '#d32f2f', '#c62828', '#b71c1c', '#f44336', '#ef5350'];
  const blueShades = ['#1e88e5', '#1976d2', '#1565c0', '#0d47a1', '#2196f3', '#42a5f5'];
  let redIdx = 0;
  let blueIdx = 0;
  const colors = entries.map(([key]) => {
    if (cancerousKeys.includes(key)) {
      const color = redShades[redIdx % redShades.length];
      redIdx++;
      return color;
    } else {
      const color = blueShades[blueIdx % blueShades.length];
      blueIdx++;
      return color;
    }
  });
  const [expanded, setExpanded] = useState(null);
  const handleExpand = (panel) => (event) => {
    event.stopPropagation();
    setExpanded(expanded === panel ? null : panel);
  };
      return (
        <Box sx={{ width: '100%', mt: 2 }}>
          {entries.map(([key, value], i) => (
            value === 0 ? null : (
              <Accordion key={key} sx={{ mb: 2, boxShadow: 0 }} expanded={expanded === key}>
                <AccordionSummary
                  expandIcon={null}
                  sx={{ cursor: 'default', userSelect: 'none', minHeight: 0, padding: 0 }}
                >
                  <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="subtitle2" sx={{ mb: 0.5, fontWeight: 600 }} align="left">
                      {key}
                    </Typography>
                    {cancerousKeys.includes(key) && (
                      <Tooltip title="Cancerous">
                        <Avatar sx={{ bgcolor: colors[i], width: 24, height: 24, fontSize: 16 }}>C</Avatar>
                      </Tooltip>
                    )}
                    {benignKeys.includes(key) && (
                      <Tooltip title="Benign">
                        <Avatar sx={{ bgcolor: colors[i], width: 24, height: 24, fontSize: 16 }}>B</Avatar>
                      </Tooltip>
                    )}
                    <IconButton size="small" onClick={handleExpand(key)} sx={{ ml: 1 }}>
                      <InfoOutlinedIcon fontSize="small" />
                    </IconButton>
                  </Box>
                  <Box sx={{ position: 'relative', width: '100%' }}>
                    <LinearProgress 
                      variant="determinate" 
                      value={value * 100} 
                      sx={{ 
                        height: 12, 
                        borderRadius: 6, 
                        backgroundColor: '#eee',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: colors[i % colors.length]
                        }
                      }}
                    />
                    <Box
                      component="span"
                      sx={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', zIndex: 1 }}
                      title={`${key}: ${(value * 100).toFixed(1)}%`}
                    />
                  </Box>
                  <Typography variant="caption" sx={{ ml: 1 }} color="text.secondary">
                    {(value * 100).toFixed(1)}%
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>
                  <ProbabilityDetails keyName={key} />
                </AccordionDetails>
              </Accordion>
            )
          ))}
        </Box>
      );
}

export default ProbabilitiesProgressBars;
