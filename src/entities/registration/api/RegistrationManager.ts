import { ApiClientInterface } from "@/src/shared/api-client";
import { LenderInput, RegisteredUser } from "@/src/entities/registration/model";

export class RegistrationManager {
    constructor(private readonly apiClient: ApiClientInterface) {}

    public async registerLender(input: LenderInput): Promise<RegisteredUser> {
        return this.apiClient.post("/lender", input);
    }
}
