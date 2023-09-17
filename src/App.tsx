import React from 'react';
import UserOverview from "./admin/UsersOverview";
import {LocalUserGateway} from "./user/LocalUserGateway";
import {GetUsersOverviewUseCase} from "./admin/GetUsersOverviewUseCase";
import {UsersOverviewController} from "./admin/UsersOverviewController";

function App() {
  const userGateway = new LocalUserGateway();
  const getUsersOverviewUseCase = new GetUsersOverviewUseCase(userGateway);
  const usersOverviewController = new UsersOverviewController(getUsersOverviewUseCase);

  return (
    <UserOverview controller={usersOverviewController}/>
  );
}

export default App;
