const postFilterCitrateDoseRanges = [
  { range: [10000, 0.46], dose: 'Increase by 0.3mmol/L & inform ICU Consultant', duration: '6 Hours' },
  { range: [0.41, 0.45], dose: 'Increase by 0.2mmol/L & inform ICU Consultant', duration: '6 Hours' },
  { range: [0.35, 0.4], dose: 'Increase by 0.1mmol/L & inform ICU Consultant', duration: '6 Hours' },
  { range: [0.25, 0.34], dose: 'No Change (Typical Target Range)', duration: '6 Hours' },
  { range: [0.2, 0.24], dose: 'Reduce by 0.1mmol/L', duration: '6 Hours' },
  { range: [0.15, 0.19], dose: 'Reduce by 0.2mmol/L', duration: '6 Hours' },
  { range: [0, 0.14], dose: 'Reduce by 0.3mmol/L', duration: '6 Hours' },
];

export default postFilterCitrateDoseRanges