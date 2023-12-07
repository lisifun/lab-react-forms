import { useState } from "react";

const AddStudent = ({ students, setStudents }) => {
  const [newStudent, setNewStudent] = useState({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: 2023,
    graduated: false,
  });

  const handleTextInput = (e) => {
    setNewStudent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNumberInput = (e) => {
    setNewStudent((prev) => ({
      ...prev,
      [e.target.name]: Number(e.target.value),
    }));
  };

  const handleCheckInput = (e) => {
    setNewStudent((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let allStudents = [newStudent, ...students];
    setStudents(allStudents);

    setNewStudent({
      fullName: "",
      image: "",
      phone: "",
      email: "",
      program: "",
      graduationYear: 2023,
      graduated: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={newStudent.fullName}
            onChange={handleTextInput}
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            type="url"
            placeholder="Profile Image"
            value={newStudent.image}
            onChange={handleTextInput}
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={newStudent.phone}
            onChange={handleTextInput}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={newStudent.email}
            onChange={handleTextInput}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select name="program">
            <option value="">-- None --</option>
            <option value="Web Dev">Web Dev</option>
            <option value="UXUI">UXUI</option>
            <option value="Data">Data</option>
          </select>
        </label>

        <label>
          Graduation Year
          <input
            name="graduationYear"
            type="number"
            placeholder="Graduation Year"
            minLength={4}
            maxLength={4}
            min={2023}
            max={2030}
            value={newStudent.graduationYear}
            onChange={handleNumberInput}
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            type="checkbox"
            checked={newStudent.graduated}
            onChange={handleCheckInput}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
};

export default AddStudent;
