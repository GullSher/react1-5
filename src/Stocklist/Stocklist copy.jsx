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
            // .post("http://localhost/stockmngtjava/stockmngtjava/api/insertstock.php", newItem)
            .post("http://localhost/react1-5/src/api/insertstock.php", newItem)
            .then((response) => alert(response.data.message))
            .catch((error) => console.error(error));
    };

    const handleDelete = (id) => {
        axios
            // .delete(`http://localhost/stockmngtjava/stockmngtjava/api/deletestock.php?id=${id}`)
            .delete(`http://localhost/react1-5/src/api/deletestock.php?id=${id}`)
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
                                                   <Link
                                                        to={`/save/${item.id}`}
                                                        className="btn btn-success"
                                                        >
                                                        Save
                                                    </Link>
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


// -------------------------


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Stocklist() {
//   const [stockData, setStockData] = useState([]);

//   useEffect(() => {
//    async function fetchData() {
//       try {
//         const response = await axios.get("http://localhost/react1-5/src/api/getstock.php");
//         setStockData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     fetchData();
//   }, []);

// const handleDelete = (id) => {
//   axios
//     .delete(`http://localhost/react1-5/src/api/deletestock.php?id=${id}`)
//     .then((response) => alert(response.data.message))
//     .catch((error) => console.error(error));
// };


//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-md-12">
//           <div className="card">
//             <div className="card-header">
//               <h4 className="card-title">Stock List</h4>
//             </div>
//             <div className="card-body">
//               <div className="table-responsive">
//                 <table className="table table-bordered">
//                   <thead>
//                     <tr>
//                       <th>ID</th>
//                       <th>Name</th>
//                       <th>Price</th>
//                       <th>Quantity</th>
//                       <th>Description</th>
//                       <th>Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {stockData.map((item, index) => (
//                       <tr key={index}>
//                         <td>{item.id}</td>
//                         <td>{item.item_name}</td>
//                         <td>{item.price}</td>
//                         <td>{item.quantity}</td>
//                         <td>{item.supplier}</td>
//                         <td>
//                           <Link
//                             to={`/edit/${item.id}`}
//                             className="btn btn-warning"
//                           >
//                             Edit
//                           </Link>
//                           <button
//                             className="btn btn-danger"
//                             onClick={() => handleDelete(item.id)}
//                           >
//                             Delete
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Stocklist;


// ===========================

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Stocklist() {
//   const [stockData, setStockData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get("http://localhost/react1-5/src/api/getstock.php");
//         setStockData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     fetchData();
//   }, []);

//   const handleDelete = (item_id) => {
//     axios
//       .delete(`http://localhost/react1-5/src/api/deletestock.php?item_id=${item_id}`)
//       .then((response) => alert(response.data.message))
//       .catch((error) => console.error(error));
//   };

//   const handleInsert = (newItem) => {
//         axios
//             // .post("http://localhost/stockmngtjava/stockmngtjava/api/insertstock.php", newItem)
//             .post("http://localhost/react1-5/src/api/insertstock.php", newItem)
//             .then((response) => alert(response.data.message))
//             .catch((error) => console.error(error));
//     };


//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-md-12">
//           <div className="card">
//             <div className="card-header">
//               <h4 className="card-title">Stock List</h4>
//             </div>
//             <div className="card-body">
//               <div className="table-responsive">
//                 <table className="table table-bordered">
//                   <thead>
//                     <tr>
//                       <th>ID</th>
//                       <th>Name</th>
//                       <th>Price</th>
//                       <th>Quantity</th>
//                       <th>Description</th>
//                       <th>Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {stockData.map((item, index) => (
//                       <tr key={index}>
//                         <td>{item.item_id}</td>
//                         <td>{item.item_name}</td>
//                         <td>{item.price}</td>
//                         <td>{item.quantity}</td>
//                         <td>{item.description}</td>
//                         <td>
//                           <Link
//                             to={`/edit/${item.item_id}`}
//                             className="btn btn-warning"
//                           >
//                             Edit
//                           </Link>
//                           <button
//                             className="btn btn-danger"
//                             onClick={() => handleDelete(item.item_id)}
//                           >
//                             Delete
//                           </button>
//  <Link
//                                                         to={`/insert/${item.id}`}
//                                                         className="btn btn-success"
//                                                         >
//                                                         Insert
//                                                     </Link>
//                                                      <Link
//                                                         to={`/save/${item.id}`}
//                                                         className="btn btn-success"
//                                                         >
//                                                         Save
//                                                     </Link>


//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Stocklist;


// =====================================

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Stocklist() {
//   const [stockData, setStockData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get("http://localhost/react1-5/src/api/getstock.php");
//         setStockData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     fetchData();
//   }, []);

//   const handleDelete = (item_id) => {
//     axios
//       .delete(`http://localhost/react1-5/src/api/deletestock.php?item_id=${item_id}`)
//       .then((response) => alert(response.data.message))
//       .catch((error) => console.error(error));
//   };

// //   const handleInsert = (newItem) => {
// //         axios
// //            .post("http://localhost/react1-5/src/api/insertstock.php", newItem)
// //             .then((response) => alert(response.data.message))
// //             .catch((error) => console.error(error));
// //     };


// const handleInsert = (newItem) => {
//     axios
//         .post("http://localhost/react1-5/src/api/insertstock.php", newItem)
//         .then((response) => {
//             setStockData((prevData) => [...prevData, newItem]);
//             alert(response.data.message);
//         })
//         .catch((error) => console.error(error));
// };










// const [newItem, setNewItem] = useState({
//   item_name: "",
//   price: "",
//   quantity: "",
//   description: "",
// });

// const handleChange = (e) => {
//   setNewItem({
//     ...newItem,
//     [e.target.name]: e.target.value,
//   });
// };

// const handleInsert = (e) => {
//   e.preventDefault();
//   axios
//     .post("http://localhost/react1-5/src/api/insertstock.php", newItem)
//     .then((response) => {
//       setStockData((prevData) => [...prevData, newItem]);
//       setNewItem({
//         item_name: "",
//         price: "",
//         quantity: "",
//         description: "",
//       });
//       alert(response.data.message);
//     })
//     .catch((error) => console.error(error));
// };

// // ...

// <form onSubmit={handleInsert}>
//   <div className="form-group">
//     <label htmlFor="item_name">Item Name:</label>
//     <input
//       type="text"
//       className="form-control"
//       name="item_name"
//       value={newItem.item_name}
//       onChange={handleChange}
//     />
//   </div>
//   <div className="form-group">
//     <label htmlFor="price">Price:</label>
//     <input
//       type="text"
//       className="form-control"
//       name="price"
//       value={newItem.price}
//       onChange={handleChange}
//     />





























//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-md-12">
//           <div className="card">
//             <div className="card-header">
//               <h4 className="card-title">Stock List</h4>
//             </div>
//             <div className="card-body">
//               <div className="table-responsive">
//                 <table className="table table-bordered">
//                   <thead>
//                     <tr>
//                       <th>ID</th>
//                       <th>Name</th>
//                       <th>Price</th>
//                       <th>Quantity</th>
//                       <th>Description</th>
//                       <th>Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {stockData.map((item, index) => (
//                       <tr key={index}>
//                         <td>{item.item_id}</td>
//                         <td>{item.item_name}</td>
//                         <td>{item.price}</td>
//                         <td>{item.quantity}</td>
//                         <td>{item.description}</td>
//                         <td>
//                           <Link
//                             to={`/edit/${item.item_id}`}
//                             className="btn btn-warning"
//                           >
//                             Edit
//                           </Link>
//                           <button
//                             className="btn btn-danger"
//                             onClick={() => handleDelete(item.item_id)}
//                           >
//                             Delete
//                           </button>
 
//  {/* <Link
//                                                         to={`/insert/${item.id}`}
//                                                         className="btn btn-primary"
//                                                         >
//                                                         Insert
//                                                     </Link> */}
















// <button
//   className="btn btn-primary"
//   onClick={() => handleInsert(item)}
// >
//   Insert Row
// </button>

//                                                      <Link
//                                                         to={`/save/${item.id}`}
//                                                         className="btn btn-success"
//                                                         >
//                                                         Save
//                                                     </Link>


//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Stocklist;