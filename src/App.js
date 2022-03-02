import React, {Component}  from 'react';
import lixo from './lixo.png'
import "./App.css"
export default class ToDo extends Component{

state ={
   tarefa:"",
   lista :[]
}

handleChange = (e)=>{
  this.setState({tarefa: e.target.value})
}


add = () =>{
if(this.state.tarefa.length > 0){
    this.setState({      
        lista: this.state.lista.concat({
             tarefa:"",
            id: Date.now()
          }),
          tarefa:"",
        })
      }
    }
 remove =(id) =>{
    this.setState({
        lista:this.state.lista.filter((item)=>(
            item.id !==id
        ))
       
    })

 }
 

    render(){ 
        return(                      
            <div>
                <h1>Lista de Compras</h1>
             <input value={this.state.tarefa} onChange={this.handleChange} />   
             <button onClick={this.add}>INSERIR </button>  
               <ol>
                 {this.state.lista.map((item) =>(
                     <li>
                         {item.tarefa}
                         {item.id}
                         <img onClick={() => this.remove(item.id)} src={lixo} alt="iconde de pá "/>
                     </li>
                     
                 ))}
                 
             </ol>
            </div>
            
        )
    }
}