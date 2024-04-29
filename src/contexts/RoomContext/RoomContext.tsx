import { useState, createContext, ReactNode, useEffect } from 'react';

const RoomContext = createContext(null);

const RoomContextProvider = ({ children }: { children: ReactNode }) => {
    const [listChatRoomAvailable, setListChatRoomAvailable] = useState(() => {
        // Obtener el valor almacenado en el localStorage o un arreglo vacío si no hay ninguno
        const storedList = localStorage.getItem('listChatRoomAvailable');
        return storedList ? JSON.parse(storedList) : [];
    });

    const updateListChatRoomAvailable = (roomId: any) => {
        setListChatRoomAvailable((prevList) => [...prevList, roomId]);
    };

    useEffect(() => {
        // Actualizar el localStorage cuando listChatRoomAvailable cambie
        localStorage.setItem('listChatRoomAvailable', JSON.stringify(listChatRoomAvailable));
    }, [listChatRoomAvailable]);

    const value = {
        listChatRoomAvailable,
        updateListChatRoomAvailable,
    };

    return (
        <RoomContext.Provider value={value}>
            {children}
        </RoomContext.Provider>
    );
};

export { RoomContextProvider };
export default RoomContext;
