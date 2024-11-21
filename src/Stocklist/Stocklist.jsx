import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Stocklist() {
    const [stockData, setStockData] = useState([]);

    useEffect(() => {
        fetch("http://localhost/react1-5/src/api/getstock.php")
            .then((response) => response.json())
            .then((data) => setStockData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const handleInsert = (newItem) => {
        axios
            .post("http://localhost/stockmngtjava/stockmngtjava/api/insertstock.php", newItem)
            .then((response) => alert(response.data.message))
            .catch((error) => console.error(error));
    };

    const handleDelete = (id) => {
        axios
            .delete(`http://localhost/stockmngtjava/stockmngtjava/api/deletestock.php?id=${id}`)
            .then((response) => alert(response.data.message))
            .catch((error) => console.error(error));
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Stock List</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Description</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {stockData.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.price}</td>
                                                <td>{item.quantity}</td>
                                                <td>{item.description}</td>
                                                <td>
                                                    <Link
                                                        to={`/edit/${item.id}`}
                                                        className="btn btn-warning"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        className="btn btn-danger"
                                                        onClick={() => handleDelete(item.id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stocklist;