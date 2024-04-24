import SalaCard from './SalaCard'
const SalasContainer = ({ salas, joinRoom }) => {
    return (
        <div className="salas-container">
            {salas.map((sala, index) => (
                <SalaCard sala={sala} index={index} joinRoom={joinRoom} />
            ))}
        </div>
    )
}

export default SalasContainer