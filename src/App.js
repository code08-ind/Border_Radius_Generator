import './App.css';
import Box from './components/Box';
import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import { SketchPicker } from 'react-color';

const App = () => {
  const [all, setAll] = useState(0);
  const [topLeft, setTopLeft] = useState(0);
  const [topRight, setTopRight] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);
  const [color, setColor] = useState('#fff');

  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  const handleChange = (color, event) => {
    setColor(color.hex);
  };

  return (
    <>
      <div className="app">
        <div className="app__controls">
          <div className="app__controlsContainer">
            <h1>
              Border Radius Generator
            </h1>
            <div className="app__control">
              <p style={{ marginRight: "20px", marginBottom: "5px" }}>All Corner Radius:</p>
              <Slider min={0} max={200} defaultValue={0} onChange={(event, value) => setAll(value)} style={{ marginLeft: "20px" }} />
              <input type="text" value={all} style={{ height: '30px', width: '50px', margin: "0 10px 5px 10px" }} />
            </div>
            <div className="app__control">
              <p style={{ marginRight: "29px", marginBottom: "5px" }}>Top Left Radius:</p>
              <Slider min={0} max={200} defaultValue={0} onChange={(event, value) => setTopLeft(value)} style={{ marginLeft: "20px" }} />
              <input type="text" value={topLeft} style={{ height: '30px', width: '50px', margin: "0 10px 5px 10px" }} />
            </div>
            <div className="app__control">
              <p style={{ marginRight: "43px", marginBottom: "5px" }}>Top Right Radius:</p>
              <Slider min={0} max={200} onChange={(event, value) => setTopRight(value)} />
              <input type="text" value={topRight} style={{ height: '30px', width: '50px', margin: "0 10px 5px 10px" }} />
            </div>
            <div className="app__control">
              <p style={{ marginRight: "24px", marginBottom: "5px" }}>Bottom Right Radius:</p>
              <Slider min={0} max={200} onChange={(event, value) => setBottomRight(value)} />
              <input type="text" value={bottomRight} style={{ height: '30px', width: '50px', margin: "0 10px 5px 10px" }} />
            </div>
            <div className="app__control">
              <p style={{ marginRight: "30px", marginBottom: "5px" }}>Bottom Left Radius:</p>
              <Slider min={0} max={200} onChange={(event, value) => setBottomLeft(value)} />
              <input type="text" value={bottomLeft} style={{ height: '30px', width: '50px', margin: "0 10px 5px 10px" }} />
            </div>
            <SketchPicker color={color} onChange={handleChange} onChangeComplete={handleChangeComplete} />
          </div>
        </div>
        <Box all={all} topRight={topRight} topLeft={topLeft} bottomLeft={bottomLeft} bottomRight={bottomRight} color={color} />
      </div>
      <h6>Created By @Aryan Garg &copy;2022</h6>
    </>
  )
}

export default App