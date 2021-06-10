import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("init");
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <muy-input
        placeholder="React Input"
        label="React"
        slInput={(evt) => setValue(evt.target.value)}
        value={value}
      >
        <span slot="prefix">1</span>
        <span slot="suffix">{value}</span>
      </muy-input>
      <fm-button
        label="Test botón"
        onButtonClick={() => setLoading(false)}
        loading={loading}
      />
    </div>
  );
}

export default App;
