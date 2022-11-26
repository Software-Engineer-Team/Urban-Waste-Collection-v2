import { AssignTasks, BackOfficer, MemberDetail, Staffs } from "@pages/Home";
import { Calendar, AssignRoute, AssignArea } from "@components/index";

export const homeRoutes = [
  { path: "/backofficer", component: BackOfficer },
  { path: "/task-assignment", component: AssignTasks },
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
  { path: "/task-management/calendar", component: Calendar },
  { path: "/task-management/route", component: AssignRoute },
  { path: "/task-management/area", component: AssignArea },
];
