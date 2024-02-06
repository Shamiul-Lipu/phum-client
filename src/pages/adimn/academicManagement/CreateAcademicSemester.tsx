import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { semesterOptions } from "../../../constants/semester";
import { monthOptions } from "../../../constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/academicSemester.schema";
import { toast } from "sonner";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagementApi";

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((num) => ({
  value: String(currentYear + num),
  label: String(currentYear + num),
}));

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating....");
    const name = semesterOptions[Number(data.name) - 1].label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };

    try {
      const res = await addAcademicSemester(semesterData);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Semester created successfuly", { id: toastId });
      }
    } catch (err) {
      toast.error("Somthing went worng", { id: toastId });
    }
  };

  return (
    <>
      <h3 style={{ textAlign: "center", padding: "1rem 0", fontSize: "2rem" }}>
        Create Academic Semester
      </h3>
      <Flex justify="center" align="center">
        <Col span={6}>
          <PHForm
            onSubmit={onSubmit}
            resolver={zodResolver(academicSemesterSchema)}
          >
            <PHSelect name="name" label="Name :" options={semesterOptions} />
            <PHSelect name="year" label="Year :" options={yearOptions} />
            <PHSelect
              name="startMonth"
              label="Start Month :"
              options={monthOptions}
            />
            <PHSelect
              name="endMonth"
              label="End Month :"
              options={monthOptions}
            />

            <Button htmlType="submit">Submit</Button>
          </PHForm>
        </Col>
      </Flex>
    </>
  );
};

export default CreateAcademicSemester;
