import React from 'react'
import menuIcon from '../../assets/menuIcon.png';

function SideMenu() {
    return (
        <div style={{backgroundColor:"rgba(0,0,0,0)", borderRight:"1px solid black",width:"80px", height:"100vh", zIndex:999, position:"fixed", left:"0px", top:"0px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <img src={menuIcon} alt="Icon" style={{width:"40%"}}/>
        </div>
    )
}

export default SideMenu
