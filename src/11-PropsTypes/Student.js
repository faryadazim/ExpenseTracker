import React from "react";
import defalutImage from "../img.jpg";
import PropTypes from "prop-types";

const Student = ({ id, name, marks }) => {
  // const { id, name, marks } = student;
  console.log(id, name, marks);

  return (
    <>
      <tr>
        <td className="mx-2">
          <img
            src={defalutImage}
            alt="fg"
            width="20"
            height="20"
            style={{
              borderRadius: "60px",
              display: "inline-block",
            }}
          />
        </td>
        <td className="mx-2">{id}</td>
        <td className="mx-2">{name}</td>
        {/* <td className="mx-2">{marks.eng}</td> */}
      </tr>
    </>
  );
};

Student.propTypes = {
  id: PropTypes.string.isRequired,
};
export default Student;
