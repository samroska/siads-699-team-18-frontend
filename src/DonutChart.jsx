import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';

function DonutChart({ data }) {
  const [hovered, setHovered] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  // data: { [key]: value }
  const keys = Object.keys(data);
  const values = Object.values(data);
  const total = values.reduce((a, b) => a + b, 0);
  const maxKey = keys[values.indexOf(Math.max(...values))];
  const maxValue = Math.max(...values);

  // Generate colors
  // Assign red for cancerous, blue for non-cancerous
  const cancerousKeys = [
    'Melanoma',
    'Basal Cell Carcinoma',
    'Squamous Cell Carcinoma',
    'Melanoma Metastasis'
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

  // Calculate SVG arcs
  let startAngle = 0;
  const arcs = values.map((value, i) => {
    const radius = 80;
    const center = 100;
    if (value === total && total > 0) {
      // Full circle for 100%
      return {
        path: `M${center},${center} m-${radius},0 a${radius},${radius} 0 1,0 ${radius * 2},0 a${radius},${radius} 0 1,0 -${radius * 2},0`,
        color: colors[i],
        key: keys[i],
        isFull: true
      };
    }
    const angle = (value / total) * 360;
    const endAngle = startAngle + angle;
    const largeArcFlag = angle > 180 ? 1 : 0;
    const x1 = center + radius * Math.cos((Math.PI * startAngle) / 180);
    const y1 = center + radius * Math.sin((Math.PI * startAngle) / 180);
    const x2 = center + radius * Math.cos((Math.PI * endAngle) / 180);
    const y2 = center + radius * Math.sin((Math.PI * endAngle) / 180);
    const path = `M${center},${center} L${x1},${y1} A${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2} Z`;
    startAngle = endAngle;
    return { path, color: colors[i], key: keys[i] };
  });

  return (
    <Box sx={{ position: 'relative', width: 200, height: 200, mx: 'auto' }}>
      <svg width={200} height={200}>
        {arcs.map((arc, i) => (
          <path 
            key={arc.key} 
            d={arc.path} 
            fill={arc.color} 
            style={{ cursor: 'pointer' }}
            onMouseEnter={e => {
              setHovered(i);
              const rect = e.target.ownerSVGElement.getBoundingClientRect();
              setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
            onMouseLeave={() => setHovered(null)}
          />
        ))}
        {/* Donut hole */}
        <circle cx={100} cy={100} r={55} fill="#f5f5f5" />
      </svg>
      {/* Hover popup for clicked segment */}
      {hovered !== null && (
        <Box
          sx={{
            position: 'absolute',
            left: mousePos.x,
            top: mousePos.y,
            transform: 'translate(-50%, -120%)',
            bgcolor: 'background.paper',
            color: 'text.primary',
            borderRadius: 1,
            boxShadow: 3,
            px: 1.5,
            py: 0.5,
            zIndex: 10,
            pointerEvents: 'none',
            fontSize: '0.95rem',
            minWidth: '80px',
            textAlign: 'center',
          }}
        >
          {arcs[hovered].key}: {(values[hovered] * 100).toFixed(1)}%
        </Box>
      )}
  <Box sx={{ position: 'absolute', top: 0, left: 0, width: 200, height: 200, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        <Typography 
          align="center"
          sx={{ 
            fontWeight: 700, 
            fontSize: '1.1rem', 
            color: 'primary.main',
            maxWidth: '90px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {maxKey}
        </Typography>
        <Typography 
          align="center"
          sx={{ 
            fontSize: '0.95rem', 
            color: 'text.secondary',
            fontWeight: 500,
          }}
        >
          {(maxValue * 100).toFixed(1)}%
        </Typography>
      </Box>
    </Box>
  );
}

export default DonutChart;
