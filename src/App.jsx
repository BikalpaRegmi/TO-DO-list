import React from 'react'
import { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [enter, setenter] = useState();
  const [list,setlist] = useState([]);
  const [toggle,settoggle] = useState(true);
  const addItem = () =>{
      if(enter && toggle){ 
       setlist((olditem)=>{
        return([...olditem , enter])
      });
     setenter('')
     }
     else if(enter && !toggle){
      setlist((olditem)=>{
        return([...olditem , enter])
      });
     setenter('')
      settoggle(true);
     }
     else{
      toast.error('plz fill the list before adding',{
        position:'top-left',
       })
     }
    
    }
  const deleteList = (index) =>{
      const newList = list.filter((val,india)=>{
        return (india!==index)
      })
      setlist(newList);
  }
  const toedit = (elem,id)=>{
    if(enter && toedit){
       setlist((olditem)=>{
        return [enter,...olditem]
       })
       const toggleval=list.find((curval,ind)=>{
        return ind===id;
       })
       setenter(toggleval)
    }    else{
    const editItem=list.find((cur,ind)=>{
    return id===ind;
        })
        setenter(editItem);
        const toinsert = list.filter((curv,ind)=>{
            return ind!==id;
        })
        setlist(toinsert)
        settoggle(false);
      }
  }
  return (
    <div className='bau'>
    <div className="enter">
      <input type='text'
       placeholder='Enter Your List' 
       onChange={(event)=>setenter(event.target.value)} 
       value={enter}/>
      {
        toggle ? 
      <button id='addItem' 
      onClick={addItem}>+</button>
      :
       <button onClick ={addItem} 
       id='update'
       title='Edit item'> <AiFillEdit/></button>
      }
      </div>

      <div>
       <ul>
      {list.map((curval,index)=>{
       return( <li><button 
       id='deleteitem' 
       onClick={()=>deleteList(index)} title='Delete item'>-</button>
       {curval}
       <button onClick ={()=>toedit(curval,index)} 
       id='edit' 
       title='Edit item'>

       <AiFillEdit/></button></li>)
      })}
       </ul>
      </div>
   <ToastContainer/>
      <center> <button onClick={()=>setlist([])}>Clear all</button></center>
    </div>
  )
}

export default App
