import React from 'react'
import { menu_list } from '../../assets/assets'
import './Exploremenu.css'

const Exploremenu = ({category,setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore menu</h1>
        <p className='explore-menu-text'>choose from a diverse menu featuring a delectable array of dishes. our ,iddion id to satisfy</p>
    <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
    </div>
    <hr />
    </div>
  )
}

export default Exploremenu