import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Stocklist() {
  const [stockData, setStockData] = useState([]);
  const [newItem, setNewItem] = useState({
    item_name: "",
    price: "",
    quantity: "",
    description: "",
  });


 const handleDelete = (item_id) => {
//     axios
//       .delete(`http://localhost/react1-5/src/api/deletestock.php?item_id=${item_id}`)
//       .then((response) => alert(response.data.message))
//       .catch((error) => console.error(error));
   };






  const handleChange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleInsert = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost/react1-5/src/api/insertstock.php", newItem)
      .then((response) => {
        setStockData((prevData) => [...prevData, newItem]);
        setNewItem({
          item_name: "",
          price: "",
          quantity: "",
          description: "",
        });
        alert(response.data.message);
      })
      .catch((error) => console.error(error));
  };

  const handleEdit = (item) => {
    setNewItem(item);
  };

  const handleSave = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost/react1-5/src/api/updatestock.php`, newItem)
      .then((response) => {
        setStockData((prevData) => prevData.map((item) => item.id === newItem.id ? newItem : item));
        setNewItem({
          item_name: "",
          price: "",
          quantity: "",
          description: "",
        });
        alert(response.data.message);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    axios
      .get("http://localhost/react1-5/src/api/getstock.php")
      .then((response) => {
        setStockData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Stock List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((item, index) => (
            <tr key={index}>
              <td>{item.item_name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.description}</td>
              <td>
                <button className="btn btn-primary" onClick={() => handleEdit(item)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleInsert}>
        <div className="form-group">
          <label htmlFor="item_name">Item Name:</label>
            
          <input
            type="text"
            className="form-control"
            name="item_name"
            value={newItem.item_name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            className="form-control"
            name="price"
            value={newItem.price}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="text"
            className="form-control"
            name="quantity"
            value={newItem.quantity}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={newItem.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Insert Row</button>

{/* 
update employees
set hourly_pay = 100.55,
 hire_date="2024-02-04"
where employee_id= 5;
select * from employee;

delete from employees; for all delete whole table
where emplyees-id =6


INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');




*/}

{/* 




*/}



      </form>
    </div>
  );
}

export default Stocklist;