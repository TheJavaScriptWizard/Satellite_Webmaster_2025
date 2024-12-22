import React from "react";

const RippedPaper = ({ children }) => {
    const rippedPaperStyles = {
        position: "relative",
        background: "#fff", // Paper color
        padding: "30px",
        clipPath: "polygon(0% 15%, 10% 5%, 20% 25%, 30% 15%, 40% 30%, 50% 20%, 60% 40%, 70% 20%, 80% 35%, 90% 15%, 100% 20%, 90% 90%, 10% 100%)", // Jagged clip-path
        boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
        zIndex: 1,
        maxWidth: "700px", // Limit width
        margin: "20px auto", // Center the container
        borderRadius: "10px", // Optional: Soften corners slightly
    };

    return <div style={rippedPaperStyles}>{children}</div>;
};

export default RippedPaper;
