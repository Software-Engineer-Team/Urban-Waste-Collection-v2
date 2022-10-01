import { AssignTasks, BackOfficer, MemberDetail, Staffs } from "@pages/Home";
import { Calendar } from "@components";

export const homeRoutes = [
  { path: "/backofficer", component: BackOfficer },
  { path: "/assign-tasks", component: AssignTasks },
  {
    path: "/list-staffs/collectors",
    component: Staffs,
    type: "Collectors Information",
  },
  {
    path: "/list-staffs/janitors",
    component: Staffs,
    type: "Janitors Information",
  },
  { path: "/staff-details/:id", component: MemberDetail },
  { path: "home/work-calendar", component: Calendar },
];
