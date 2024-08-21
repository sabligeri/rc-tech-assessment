import { spawn } from "child_process";
import React, { useState , useEffect} from "react";

interface HeroListItemProps {
    id: number;
    name: string;
    available: boolean;
    toggleAvailablity: (id: number) => void;
}

const HeroListItem: React.FC<HeroListItemProps> = ({id, name, available, toggleAvailablity}) => {


    return (
        <li 
        onClick={() => toggleAvailablity(id)}
        style={{color: available ? "green" : "red", cursor: "pointer"}}
        >
           {id}. {name} {available && <span>"Availabel"</span>}
        </li>
    )

}

export default HeroListItem;