import React, { useEffect, useState } from "react";

function StockList() {
    const [stockItems, setStockItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost/stock-management/api/getstock.php")
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data) && data.length > 0) {
                    setStockItems(data);
                } else {
                    console.error("No data or data format incorrect:", data);
                    setStockItems([]);
                }
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h1>Stock List</h1>
            <ul>
                {stockItems.length > 0 ? (
                    stockItems.map((item, index) => (
                        <li key={index}>
                            {item.name || "Unnamed"} - {item.quantity || "0"}
                        </li>
                    ))
                ) : (
                    <li>No stock items available</li>
                )}
            </ul>
        </div>
    );
}

export default StockList;
