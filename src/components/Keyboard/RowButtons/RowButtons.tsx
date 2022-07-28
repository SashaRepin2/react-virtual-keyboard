import React from "react";

interface IRowButtonsProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
}

const RowButtons: React.FC<IRowButtonsProps> = ({ style, children }) => {
    return (
        <div className={"row"} style={{ ...style }}>
            {children}
        </div>
    );
};

export default React.memo(RowButtons);
