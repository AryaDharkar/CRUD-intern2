import { useState, useRef } from "react";
import axios from "axios";

const Create = () => {
  const rName = useRef();
  const rRoll = useRef();
  const rMarks = useRef();
  const rFile = useRef();

  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [marks, setMarks] = useState("");
  const [file, setFile] = useState("");
  const [msg, setMsg] = useState("");

  const hName = (event) => {
    setName(event.target.value);
  };
  const hRoll = (event) => {
    setRoll(event.target.value);
  };
  const hMarks = (event) => {
    setMarks(event.target.value);
  };
  const hFile = (event) => {
    setFile(event.target.files[0]);
  };

  const save = async (event) => {
    event.preventDefault();

    //check to see if all fields are filled
    if (name === "" || roll === "" || marks === "" || file === "") {
      setMsg("All fields are required");
      return;
    }
    //define url for server with endpoint /create
    const url = "http://localhost:9000/create";

    //create form data
    const formData = new FormData();
    formData.append("name", name);
    formData.append("roll", roll);
    formData.append("marks", marks);
    formData.append("file", file);

    //send data to server
    try {
      const res = await axios.post(url, formData);

      //check if only 1 record was affected
      if (res.data.affectedRows === 1) {
        setMsg("Record saved successfully");
        rName.current.value = "";
        rRoll.current.value = "";
        rMarks.current.value = "";
        rFile.current.value = "";
        rName.current.focus();
      }
      //check if roll no already exists
      else if (res.data.errno === 1062) {
        setMsg("Roll No already exists");
        setRoll("");
        rRoll.current.focus();
      }
      //if any other error
      else {
        console.log(res.data);
        setMsg("Error saving record: " + res.data);
      }
    } catch (err) {
      console.log(err);
      setMsg("Error saving record: " + err);
    }
  };

  return (
    <>
      <center>
        <h1>Create a record</h1>
        <form onSubmit={save}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            ref={rName}
            onChange={hName}
          />
          <br />
          <br />
          <input
            type="number"
            name="roll"
            placeholder="Roll No"
            ref={rRoll}
            onChange={hRoll}
          />
          <br />
          <br />
          <input
            type="number"
            name="marks"
            placeholder="Marks"
            ref={rMarks}
            onChange={hMarks}
          />
          <br />
          <br />
          <input type="file" ref={rFile} onChange={hFile} />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <h2>{msg}</h2>
      </center>
    </>
  );
};
export default Create;
