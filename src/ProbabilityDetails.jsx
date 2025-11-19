import { Typography } from "@mui/material";
import React from "react";

function ProbabilityDetails({ keyName }) {
  // Helper to insert <br /> after every 15 words
  function breakAfterWords(text, n = 15) {
    const words = text.split(' ');
    const lines = [];
    for (let i = 0; i < words.length; i += n) {
      lines.push(words.slice(i, i + n).join(' '));
    }
    return lines.map((line, idx) => (
      <React.Fragment key={idx}>
        {line}
        {idx < lines.length - 1 && <br />}
      </React.Fragment>
    ));
  }
  if (keyName === 'Melanoma') {
    return (
      <Typography variant="body2" color="text.secondary">
        {breakAfterWords('Melanoma is a serious form of skin cancer that requires prompt medical attention and treatment.')}
      </Typography>
    );
  }
  if (keyName === 'Nevus') {
    return (
      <Typography variant="body2" color="text.secondary">
        {breakAfterWords('Nevus (mole) is a common skin growth that is usually benign but should be monitored for changes.')}
      </Typography>
    );
  }
  if (keyName === 'Seborrheic Keratosis') {
    return (
      <Typography variant="body2" color="text.secondary">
        {breakAfterWords('Seborrheic Keratosis is a common, non-cancerous skin growth that can vary in color and size.')}
      </Typography>
    );
  }
  if (keyName === 'Solar Lentigo') {
    return (
      <Typography variant="body2" color="text.secondary">
        {breakAfterWords('Solar Lentigo is a common, benign skin condition that appears as flat, brown spots due to sun exposure.')}
      </Typography>
    );
  }
  if (keyName === 'Basal Cell Carcinoma') {
    return (
      <Typography variant="body2" color="text.secondary">
        {breakAfterWords('Basal Cell Carcinoma is a common skin cancer that grows slowly and rarely spreads, but should be treated.')}
      </Typography>
    );
  }
  if (keyName === 'Melanoma Metastasis') {
    return (
      <Typography variant="body2" color="text.secondary">
        {breakAfterWords('Melanoma Metastasis refers to the spread of melanoma cells to other parts of the body, which can occur through the bloodstream or lymphatic system.')}
      </Typography>
    );
  }
  if (keyName === 'Actinic Keratosis') {
    return (
      <Typography variant="body2" color="text.secondary">
        {breakAfterWords('Actinic Keratosis is a rough, scaly patch on the skin caused by years of sun exposure and can sometimes progress to cancer.')}
      </Typography>
    );
  }
  if (keyName === 'Squamous Cell Carcinoma') {
    return (
      <Typography variant="body2" color="text.secondary">
        {breakAfterWords("Squamous Cell Carcinoma is a common type of skin cancer that arises from the squamous cells in the skin's outer layer. It can be aggressive and may spread if not treated.")}
      </Typography>
    );
  }
  if (keyName === 'Dermatofibroma') {
    return (
      <Typography variant="body2" color="text.secondary">
        {breakAfterWords('Dermatofibroma is a common benign skin tumor that originates from fibrous tissue and is usually harmless.')}
      </Typography>
    );
  }
  if (keyName === 'Scar') {
    return (
      <Typography variant="body2" color="text.secondary">
        {breakAfterWords('Scars are areas of fibrous tissue that replace normal skin after injury. They can be caused by surgery, accidents, or skin conditions.')}
      </Typography>
    );
  }
   if (keyName === 'Vascular Lesion') {
    return (
      <Typography variant="body2" color="text.secondary">
        {breakAfterWords('Vascular Lesions are abnormal growths of blood vessels that can occur in various parts of the body, including the skin.')}
      </Typography>
    );
  }
  if (keyName === 'Benign Keratosis') {
    return (
      <Typography variant="body2" color="text.secondary">
        {breakAfterWords('Benign Keratosis is a common, non-cancerous skin growth that can appear as rough, scaly patches on the skin.')}
      </Typography>
    );
  }
  return (
    <Typography variant="body2" color="text.secondary">
      {breakAfterWords(`Additional details for ${keyName} can go here.`)}
    </Typography>
  );
  
}

export default ProbabilityDetails;
