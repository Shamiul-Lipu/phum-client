import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagementApi";
import { TAcademicSemester } from "../../../types/academicManagement.type";

const AcademicSemester = () => {
  const { data: semesterData } = useGetAllSemesterQuery(undefined);

  const tableData = semesterData?.data?.map(
    ({ _id, name, startMonth, endMonth, year }: TAcademicSemester) => ({
      _id,
      name,
      startMonth,
      endMonth,
      year,
    })
  );

  interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Jim",
          value: "Jim",
        },
        {
          text: "Submenu",
          value: "Submenu",
          children: [
            {
              text: "Green",
              value: "Green",
            },
            {
              text: "Black",
              value: "Black",
            },
          ],
        },
      ],
    },
    {
      title: "Year",
      dataIndex: "year",
    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <Table columns={columns} dataSource={tableData} onChange={onChange} />;
    </>
  );
};

export default AcademicSemester;
