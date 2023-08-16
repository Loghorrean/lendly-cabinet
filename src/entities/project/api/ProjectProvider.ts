import { ApiClientInterface } from "@/src/shared/api-client";
import { DataCollection } from "@/src/shared/models/common";
import buildQuery from "@/src/shared/utils/functions/router/buildQuery";
import { FundraisingProjectsFilter } from "@/src/entities/project/model/filter";
import { FundraisingProject } from "@/src/entities/project/model/FundraisingProject";

export class ProjectProvider {
    constructor(private readonly apiClient: ApiClientInterface) {}

    public async getFundraisingList(
        filter: FundraisingProjectsFilter,
        page: number,
        perPage: number
    ): Promise<DataCollection<FundraisingProject>> {
        return this.apiClient.get(`/fund-raising?${buildQuery({ filter, page, perPage })}`);
    }
}
