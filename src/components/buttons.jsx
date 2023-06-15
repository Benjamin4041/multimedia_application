import React from "react";

/* `const styles` is an object that contains CSS styles for the button component. The `button` property
of the `styles` object contains CSS styles for the button element, such as background color, border,
width, cursor, padding, color, and font weight. These styles are used to customize the appearance of
the button component. */
const styles = {
  button: {
    backgroud: "grey",
    border: "none",
    width: "fit-content",
    cursor: "pointer",
    padding: "0 0.5rem",
    color: "black",
    fontWeight: "bolder",
  },
};
export default function Buttons({ name, func }) {
  return (
    <button style={styles.button} onClick={func}>
      <p>
        {/* `{name}` is a JavaScript expression that is used to display the value of the `name` prop
         passed to the `Buttons` component. It is enclosed in curly braces `{}` to indicate that it
         is a JavaScript expression and not a string. When the component is rendered, the value of
         the `name` prop is displayed inside a paragraph element. */}
        {name}
      </p>
    </button>
  );
}
