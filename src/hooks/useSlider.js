import { useState } from "react"

const useSlider = (initial) => {
  const [previewValue, setPreviewValue] = useState(initial);
  const [comittedValue, setComittedValue] = useState(initial);

  const onChange = (_, newValue) => {
    setPreviewValue(newValue);
  }

  const onChangeCommitted = (_, newValue) => {
    setComittedValue(newValue);
  }

  return [previewValue, comittedValue, onChange, onChangeCommitted];
}

export default useSlider;