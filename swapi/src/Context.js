import React,{useState,useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch("https://swapi.dev/api/people")
            .then(res=>res.json())
            .then((json)=>{
                json.results.map(item=>{
                    setData(data=>[{name:item.name,url:item.url},...data])
                })
            })
    },[])

    return (
        <Context.Provider value={
            {
                data,
            }
        }>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}