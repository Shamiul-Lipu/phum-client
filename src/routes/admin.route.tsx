import AdminDashboard from "../pages/adimn/AdminDashboard";
import CreateAdmin from "../pages/adimn/userManagement/CreateAdmin";
import CreateFaculty from "../pages/adimn/userManagement/CreateFaculty";
import CreateStudent from "../pages/adimn/userManagement/CreateStudent";
import AcademicDepartment from "../pages/adimn/academicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/adimn/academicManagement/AcademicFaculty";
import AcademicSemester from "../pages/adimn/academicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/adimn/academicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/adimn/academicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/adimn/academicManagement/CreateAcademicSemester";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment />,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Create Member",
        path: "create-member",
        element: <CreateStudent />,
      },
    ],
  },
];
