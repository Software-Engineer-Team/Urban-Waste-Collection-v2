import { AssignTasks, BackOfficer, MemberDetail, Staffs } from "@pages/Home";
import { Calendar, AssignRoute } from "@components";

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
  { path: "/work-calendar", component: Calendar },
  { path: "/route", component: AssignRoute },
];
