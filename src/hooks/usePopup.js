import { useState, useCallback } from "react";

const usePopup = ({ initial }) => {
  const [isOpen, setIsOpen] = useState(initial);

  const togglePopup = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, []);

  return [isOpen, togglePopup];
}

export default usePopup;