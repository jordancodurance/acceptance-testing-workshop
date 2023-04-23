import {UserOverview} from "./UserOverview";
import {GetUsersOverviewUseCase} from "./GetUsersOverviewUseCase";

export class UsersOverviewController {
    private useCase: GetUsersOverviewUseCase;

    constructor(useCase: GetUsersOverviewUseCase) {
        this.useCase = useCase;
    }

    public async getOverviews(): Promise<UserOverview[]> {
        return this.useCase.execute();
    }
}