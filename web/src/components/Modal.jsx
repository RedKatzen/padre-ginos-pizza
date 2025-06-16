import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

// Define a Modal component that renders its children into a DOM node outside the main React tree
const Modal = ({ children }) => {
  // Create a ref to hold the modal's DOM element
  const elRef = useRef(null); // useRef persists a value across renders without causing re-renders

  if (!elRef.current) {
    // If the ref doesn't have a value yet, create a new div element
    elRef.current = document.createElement("div"); // This ensures the div is only created once per Modal instance
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal"); // Find the modal root element in the DOM
    // Assumes an element with id="modal" exists in your HTML
    modalRoot.appendChild(elRef.current); // Append the modal's div to the modal root
    // This moves the modal content outside the normal React DOM hierarchy

    // Cleanup: remove the modal's div when the component unmounts
    return () => modalRoot.removeChild(elRef.current); // COMMENT: Prevents memory leaks by cleaning up the DOM
  }, []);

  // Render the children into the modal's div using a React portal
  return createPortal(<div>{children}</div>, elRef.current); // reatePortal allows rendering children into a DOM node outside the parent component
};

export default Modal;
