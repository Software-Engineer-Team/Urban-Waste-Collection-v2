import { AssignTasks, BackOfficer, MemberDetail, Staffs } from "@pages/Home";

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
];
