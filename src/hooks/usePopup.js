import { useState, useCallback } from "react";

const usePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, []);

  return [isOpen, togglePopup];
}

export default usePopup;