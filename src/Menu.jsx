import { useState } from "react"
import "./Menu.css";

const data = [
    {
        id: 1,
        name: "珍珠奶茶",
        describe: "香濃奶茶搭配QQ珍珠",
        price: 50,
        reserve: 20
    },
    {
        id: 2,
        name: "冬瓜檸檬",   
        describe: "清新冬瓜配上新鮮檸檬",
        price: 45,
        reserve: 18
    },
    {
        id: 3,
        name: "翡翠檸檬",
        describe: "綠茶與檸檬的完美結合",
        price: 55,
        reserve: 34
    },
    {
        id: 4,
        name: "四季春茶",
        describe: "香醇四季春茶，回甘無比",
        price: 45,
        reserve: 10
    },
    {
        id: 5,
        name: "阿薩姆奶茶",
        describe: "阿薩姆紅茶搭配香醇鮮奶",
        price: 50,
        reserve: 25
    },
    {
        id: 6,
        name: "檸檬冰茶",
        describe: "檸檬與冰茶的清新組合",
        price: 45,
        reserve: 20
    },
    {
        id: 7,
        name: "芒果綠茶",
        describe: "芒果與綠茶的獨特風味",
        price: 55,
        reserve: 18
    },
    {
        id: 8,
        name: "抹茶拿鐵",
        describe: "抹茶與鮮奶的絕配",
        price: 60,
        reserve: 20
    },
]


function Menu() {

    const [item, setItem] = useState(data)

    // 庫存增加
    const handleIncrement = (id) => {
        const newData = item.map((newItem) => 
            newItem.id === id ? {
                ...newItem,
                reserve: newItem.reserve + 1
            } : newItem
        )
        setItem(newData)
    }

    // 庫存減少
    const handleReduce = (id) => {
        const newData = item.map((newItem) => 
            newItem.id === id && newItem.reserve > 0 ? {
                ...newItem,
                reserve: newItem.reserve - 1
            } : newItem
        )
        setItem(newData)
    }

    return <div>
        
    {
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th scope="col">品項</th>
                        <th scope="col">描述</th>
                        <th scope="col">價格</th>
                        <th scope="col">庫存</th>
                    </tr>
                </thead>
                <tbody>
                    {item.map((item) => {
                        return(<tr>
                            <td>{item.name}</td>
                            <td><small>{item.describe}</small></td>
                            <td>{item.price}</td>
                            <td><button onClick={() => handleReduce(item.id)}>-</button>{item.reserve}<button onClick={() => handleIncrement(item.id)}>+</button></td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    }

</div>}

export default Menu