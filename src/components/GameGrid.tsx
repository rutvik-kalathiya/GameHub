import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/layout";
import useGames from "../hooks/useGames";

function GameGrid() {

    const { games, error } = useGames();
    return ( 
        <div>
            <Text>{error}</Text>
            <ul>
                {games.map(game => <li key={game.id}>{game.name}</li>)}
            </ul>
        </div>
     );
}

export default GameGrid;