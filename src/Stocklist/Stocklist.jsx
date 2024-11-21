import React, { useEffect, useState } from 'react';
import './Stocklistcss.css';

function StockList() {
    const [stockData, setStockData] = useState([]);

    useEffect(() => {
        fetch("http://localhost/react1-5/src/api/getstock.php")
            .then(response => response.json())
            .then(data => setStockData(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h1>Stock Management List</h1>
            <table className="stock-table">
                <thead>
                    <tr>
                        <th>Item ID</th>
                        <th>Item Name</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Supplier</th>
                        <th>Date Added</th>
                    </tr>
                </thead>
                <tbody>
                    {stockData.map((item) => (
                        <tr key={item.item_id}>
                            <td>{item.item_id}</td>
                            <td>{item.item_name || "N/A"}</td>
                            <td>{item.category || "N/A"}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td>{item.supplier || "N/A"}</td>
                            <td>{item.date_added !== "0000-00-00" ? item.date_added : "N/A"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StockList;
