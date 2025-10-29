import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

function ProbabilitiesProgressBars({ data }) {
  // data: { [key]: value }
  // Use the same color array as DonutChart
  const colors = [
    '#1976d2', '#388e3c', '#fbc02d', '#d32f2f', '#7b1fa2', '#0288d1', '#c2185b', '#ffa000', '#689f38', '#f57c00', '#455a64', '#8d6e63'
  ];
  const entries = Object.entries(data);
  return (
  <Box sx={{ width: '100%', mt: 2 }}>
      {entries.map(([key, value], i) => (
        <Box key={key} sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ mb: 0.5, fontWeight: 600 }} align="left">
            {key}
          </Typography>
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
        </Box>
      ))}
    </Box>
  );
}

export default ProbabilitiesProgressBars;
