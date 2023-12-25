import React from 'react';

const MoreOptions = () => {
    return (
        <div>
            <div

                style={{
                    backgroundColor: "white",
                    position: "absolute",
                    bottom: "2.2rem",
                    left: "0rem",
                    zIndex: "999",
                    padding: "0.2rem",
                    boxShadow: "rgba(99, 99, 99, 0.2) 8px 8px 8px 8px",
                    display: "flex",
                    flexDirection: "column"
                }}
            >
            <span
                style={{
                    width: "100%",
                    whiteSpace: "nowrap"
                }}
            >
                Version Control
            </span>
                <span
                    style={{
                        width: "100%",
                        whiteSpace: "nowrap"
                    }}
                >
                Copy to Google Doc
            </span>
                <span
                    style={{
                        width: "100%",
                        whiteSpace: "nowrap"
                    }}
                >
                Make a Copy
            </span>
                <span
                    style={{
                        width: "100%",
                        whiteSpace: "nowrap"
                    }}
                >
                Add a Drawing
            </span>


            </div>
        </div>
    );
};

export default MoreOptions;