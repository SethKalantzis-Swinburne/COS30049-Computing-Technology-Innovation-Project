import React from 'react';
import Plot from 'react-plotly.js';
import { Container, Typography, Box } from '@mui/material';

const VisualisationLinearRegression = ({ selectedHealthStat, predictionResults, predictionValues }) => {

    // Define the maximum expected values for each pollutant
    const maxValues = {
        "CO ppm": 0.32,
        "NO pphm": 3.07,
        "NO2 pphm": 2,
        "OZONE pphm": 2.5,
        "PM10 µg/m³": 30.7,
        "SO2 pphm": 0.2
    };

    // Normalize each pollutant value to a 0-1 range based on maxValues
    const normalizedValues = predictionValues
        ? [
            predictionValues["CO ppm"] / maxValues["CO ppm"],
            predictionValues["NO pphm"] / maxValues["NO pphm"],
            predictionValues["NO2 pphm"] / maxValues["NO2 pphm"],
            predictionValues["OZONE pphm"] / maxValues["OZONE pphm"],
            predictionValues["PM10 µg/m³"] / maxValues["PM10 µg/m³"],
            predictionValues["SO2 pphm"] / maxValues["SO2 pphm"]
          ]
        : [];

    return (
        <Box sx={styles.box}>
            {predictionResults && predictionResults.health_status && predictionResults.health_status.length > 0 ? (
                <Plot
                    data={[
                        {
                            type: 'scatterpolar',
                            r: normalizedValues,
                            theta: ['CO', 'NO', 'NO2', 'Ozone', 'PM10', 'SO2'],
                            fill: 'toself',
                            name: 'Pollutants',
                            marker: {
                                color: '#71b5bc'
                            }
                        }
                    ]}
                    layout={styles.plotLayout}
                    useResizeHandler={true}
                    style={styles.plot}
                />
            ) : (
                <Typography variant="body1">
                    No prediction data available. Please make sure to input the values correctly.
                </Typography>
            )}
        </Box>
    );
};

const styles = {
    box: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    plot: {
        width: '100%',
        height: '100%',
    },
    plotLayout: {
        title: 'Pollutant Levels and Health Status Radar Chart',
        polar: {
            radialaxis: {
                visible: true,
                range: [0, 1]
            }
        },
        showlegend: false,
        autosize: true,
        paper_bgcolor: 'rgba(0, 0, 0, 0)',
        plot_bgcolor: 'rgba(0, 0, 0, 0)'
    }
};

export default VisualisationLinearRegression;
