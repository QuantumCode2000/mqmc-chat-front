import React from "react";

const SalaCard = ({ sala, joinRoom, index }) => {
    return (

        <div
            className="ag-courses_item"
            onClick={
                () => {
                    joinRoom(sala);
                }
            }
            key={index}
        >
            <a href="#" className="ag-courses-item_link">

                <div className="ag-courses-item_title">Chat</div>

                <div className="ag-courses-item_date-box">
                    Unirse:
                    <span className="ag-courses-item_date">{sala}</span>
                </div>
            </a>
        </div>

    );
};

export default SalaCard;
