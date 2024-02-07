import { useParams } from "react-router-dom";

const StudentDetails = () => {
  const { studentId } = useParams();
  //   console.log(studentId);
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>
        Student Details Components {studentId}{" "}
      </h3>
    </div>
  );
};

export default StudentDetails;
