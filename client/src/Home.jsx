import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    const getRecords = async () => {
      const url = "http://localhost:9000/read";
      try {
        const info = await axios.get(url);
        console.log(info.data);
        setRecords(info.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRecords();
  }, []);

  const handleDelete = async (roll) => {
    let rollno = roll;
    const url = `http://localhost:9000/delete/${rollno}`;
    try {
      await axios.delete(url);
      setRecords(records.filter((record) => record.roll !== rollno));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDownload = async (fileName) => {
    const url = `http://localhost:9000/download/${fileName}`;
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName); // Force download
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <>
      <center>
        <h1>Welcome to your records</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Marks</th>
            <th>File</th>
            <th>Download</th>
            <th>Delete</th>
          </tr>
          {records.map((record) => (
            <tr>
              <td>{record.name}</td>
              <td>{record.roll}</td>
              <td>{record.marks}</td>
              <td>
                <img
                  src={`http://localhost:9000/uploads/${record.file}`}
                  alt="Uploaded file"
                  style={{ width: "100px", height: "100px" }}
                />
              </td>
              <td>
                <button onClick={() => handleDownload(record.file)}>
                  Download
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleDelete(record.roll);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </center>
    </>
  );
};
export default Home;
