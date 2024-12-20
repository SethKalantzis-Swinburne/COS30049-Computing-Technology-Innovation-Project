import React from 'react';
import SliderComponent from './SliderComponent';
import { Box } from '@mui/material';

const SliderContainer = ({ sliders, onSliderChange, color }) => {
    return (
        <Box sx={styles.container}>
            {sliders.map((slider) => (
                <SliderComponent
                    key={slider.name}
                    name={slider.name}
                    value={slider.value}
                    min={slider.min}
                    max={slider.max}
                    step={slider.step}
                    onChange={onSliderChange}
                    color={color}
                />
            ))}
        </Box>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '2rem',
        width: '100%',
    },
};

export default SliderContainer;
