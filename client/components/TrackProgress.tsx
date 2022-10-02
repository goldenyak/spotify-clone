import React from "react";

interface TrackProgressProps {
  left: number;
  right: number;
  onChangeHandler: (e) => void;
}

const TrackProgress: React.FC<TrackProgressProps> = ({ left, right, onChangeHandler }) => {
  return (
    <div style={{ display: "flex" }}>
      <input
        type="range"
        min={0}
        max={right}
        value={left}
        onChange={onChangeHandler}
      />
      <div>{left} / {right}</div>
    </div>
  );
};

export default TrackProgress;