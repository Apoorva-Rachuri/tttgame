import {useState} from 'react';

export default function Player({initialName,symbol,isActive,onChangeName}){
    const[playerName, setPlayerName ]=useState(initialName);
    const[isEditing, setisEditing]= useState(false);
    
  let editablePlayerName =<span className="player-name">{playerName}</span>;
  if(isEditing){
    editablePlayerName=<input type="text" required defaultValue={playerName} onChange={handleChange}/>;
  }
    function handleEditClick(){
    setisEditing((editing)=>!editing);

    if(isEditing){
    onChangeName(symbol,playerName);
     }
  }
    function handleChange(event){
    setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? 'active' : undefined}>
        <span className="player">
            {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing?'Save':'Edit'}</button> 
     </li>
    );

}