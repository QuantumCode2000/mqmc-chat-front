// const SalaCard = ({ sala, joinRoom, index, disponible }) => {
//   return (
//     <div
//       className="ag-courses_item"
//       onClick={() => {
//         joinRoom(sala);
//       }}
//       key={index}
//     >
//       <a href="#" className="ag-courses-item_link">
//         <div className="ag-courses-item_title">Chat</div>
//         {disponible ? (
//           <div className="ag-courses-item_status">Necesita ayuda</div>
//         ) : (
//           <div className="ag-courses-item_status">ChatBot</div>
//         )}
//         <div className="ag-courses-item_date-box">
//           Unirse:
//           <span className="ag-courses-item_date">{sala}</span>
//         </div>
//       </a>
//     </div>
//   );
// };

// export default SalaCard;
const SalaCard = ({ sala, joinRoom, index, disponible }) => {
  return (
    <div
      className={`ag-courses_item ${!disponible && "disabled"}`}
      onClick={() => {
        if (disponible) {
          joinRoom(sala);
        }
      }}
      key={index}
      style={{ opacity: disponible ? 1 : 0.5 }}
    >
      <a href="#" className="ag-courses-item_link">
        {/* <div className="ag-courses-item_title">Chat</div> */}
        <div className="ag-courses-item_date-box">CHAT:</div>
        {disponible ? (
          <div className="ag-courses-item_date-box">Necesita ayuda</div>
        ) : (
          <div className="ag-courses-item_date-box">ChatBot.......</div>
        )}
        <div className="ag-courses-item_date-box">
          Unirse:
          <span className="ag-courses-item_date">{sala}</span>
        </div>
      </a>
    </div>
  );
};

export default SalaCard;
