import React , {useState, useEffect} from "react";
const  fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
const AutoComplete = () =>{
    const [input, setInput] = useState('');
    const [item, setItem] = useState(["apple", "banana", "cherry", "date", "elderberry", "fig"]);
    useEffect(()=>{
        setItem(fruits.map(fruit =>{
            if(fruit.includes(input.toLocaleLowerCase())){
                return <li>{fruit}</li>
            }
        }))
    }, [input])
    return (
        <div>
            <h1>Search item</h1>
            <input type="text" onChange={(e) => setInput(e.target.value)}/>
            <ul>
                {item}
            </ul>
        </div>
    )
}

export default AutoComplete;