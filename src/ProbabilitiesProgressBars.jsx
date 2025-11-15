import React, { useState } from "react";
import { Box, Typography, LinearProgress, Accordion, AccordionSummary, AccordionDetails, IconButton, Avatar, Tooltip, Button } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ProbabilityDetails from "./ProbabilityDetails";

function ProbabilitiesProgressBars({ data }) {
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

  const sortedEntries = entries.sort(([,a], [,b]) => b - a);

  const allEntries = sortedEntries;

  const [showAll, setShowAll] = useState(false);

  const displayedEntries = showAll ? allEntries : allEntries.slice(0, 1);

  const cancerousColor = '#D32F2F'; // Red for cancerous
  const benignColor = '#43A047';    // Green for benign
  
  const colors = allEntries.map(([key]) => {
    return cancerousKeys.includes(key) ? cancerousColor : benignColor;
  });
  const [expanded, setExpanded] = useState(null);
  const handleExpand = (panel) => (event) => {
    event.stopPropagation();
    setExpanded(expanded === panel ? null : panel);
  };
      return (
        <Box sx={{ width: '100%', mt: 2 }}>
          {displayedEntries.map(([key, value], i) => {
            const originalIndex = allEntries.findIndex(([k]) => k === key);
            const displayKey = key;
            return (
              <Accordion key={key} sx={{ mb: 2, boxShadow: 0 }} expanded={expanded === key}>
                <AccordionSummary
                  expandIcon={null}
                  sx={{ cursor: 'default', userSelect: 'none', minHeight: 0, padding: 0 }}
                >
                  <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="subtitle2" sx={{ mb: 0.5, fontWeight: 600 }} align="left">
                      {displayKey}
                    </Typography>
                    {cancerousKeys.includes(key) && (
                      <Tooltip title="Cancerous">
                        <Avatar sx={{ bgcolor: colors[originalIndex], width: 24, height: 24, fontSize: 16 }}>C</Avatar>
                      </Tooltip>
                    )}
                    {benignKeys.includes(key) && (
                      <Tooltip title="Benign">
                        <Avatar sx={{ bgcolor: colors[originalIndex], width: 24, height: 24, fontSize: 16 }}>B</Avatar>
                      </Tooltip>
                    )}
                    <Box 
                      component="span" 
                      onClick={handleExpand(key)} 
                      sx={{ 
                        ml: 1, 
                        cursor: 'pointer', 
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        '&:hover': {
                          bgcolor: 'rgba(0, 0, 0, 0.04)'
                        }
                      }}
                    >
                      <InfoOutlinedIcon fontSize="small" color="primary"/>
                    </Box>
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
                          backgroundColor: colors[originalIndex]
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
            );
          })}
          
          {/* Show More/Less button when there are additional entries */}
          {allEntries.length > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="text"
                onClick={() => setShowAll(!showAll)}
                startIcon={showAll ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                sx={{ textTransform: 'none' }}
              >
                {showAll ? 'Show Less' : `Show All Probabilities`}
              </Button>
            </Box>
          )}
          
        </Box>
        
      );
}

export default ProbabilitiesProgressBars;