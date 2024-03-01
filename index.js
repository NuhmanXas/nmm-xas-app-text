import React from "react";
import styled from "styled-components";

/**
 * Renders text with customizable options for heading type, text transformation, alignment, color, and more.
 *
 * @param {{ text?: string;
 * className?: string;
 * headingType?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "normal text" | "small text 1";
 * textTransform?: "capitalize" | "lowercase" | "uppercase" | "none";
 * textAlign?: "start" | "end" | "center" | "justify" | "left" | "right";
 * textColor?: string;
 * children?: React.ReactNode;
 * }} props The props object.
 * @param {string} [props.text=""] - The text to display.
 * @param {string} [props.headingType="normal text"] - The type of heading or text to render.
 * @param {string} [props.className=""] - Additional CSS class for custom styling.
 * @param {string} [props.textTransform="none"] - Text transformation option.
 * @param {string} [props.textAlign="start"] - Text alignment option.
 * @param {string} [props.textColor="black"] - Text color.
 * @returns {React.ReactNode} The React component for the text.
 */
function AppText({
  text = "",
  headingType = "normal text",
  className = "",
  textTransform = "none",
  textAlign = "start",
  textColor = "black",
  children,
  ...props
}) {
  const getHeadingClass = () => {
    switch (headingType) {
      case "h1":
        return "heading1";
      case "h2":
        return "heading2";
      case "h3":
        return "heading3";
      case "h4":
        return "heading4";
      case "h5":
        return "heading5";
      case "h6":
        return "heading6";
      case "p":
        return "paragraph";
      case "normal text":
        return "normalText";
      case "small text 1":
        return "smallText1";
      default:
        return "";
    }
  };

  return (
    <AppTextStyle
      className={` ${className} ${getHeadingClass()}`}
      textTransform={textTransform}
      textAlign={textAlign}
      textColor={textColor}
      {...props}
    >
      {text} {children}
    </AppTextStyle>
  );
}

// Styled component for AppText
const AppTextStyle = styled.div`
  font-family: "Roboto", sans-serif;
  color: ${(props) => props.textColor || "black"};
  text-align: ${(props) => props.textAlign || "start"};
  text-transform: ${(props) => props.textTransform || "none"};

  &.heading1 {
    font-size: 25px;
    font-weight: bolder;
  }
  &.heading2 {
    font-size: 20px;
    font-weight: bolder;
  }
  &.heading3 {
    font-size: 17px;
    font-weight: bolder;
  }
  &.heading4 {
    font-size: 15px;
    font-weight: bolder;
  }
  &.paragraph,
  &.normalText {
    font-size: 16px;
  }
  &.smallText1 {
    font-size: 12px;
  }
`;

export default AppText;
