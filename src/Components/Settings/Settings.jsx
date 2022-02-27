import React from 'react';
import { SketchPicker } from 'react-color';

const Settings = () => {

    const state = {
        background: '#fff',
    };

    const handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };

    return (
        <SketchPicker
            color={state.background}
            onChangeComplete={handleChangeComplete}
        />
    )
}

export default Settings