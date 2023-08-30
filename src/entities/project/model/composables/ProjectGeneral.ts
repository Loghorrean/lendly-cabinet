import { ProjectFile } from "@/src/entities/file/model";

export interface ProjectGeneral {
    readonly name: string;
    readonly photoUrls: Array<string>;
    readonly features?: string;
    readonly companyName: string;
    readonly siteUri?: string;
    readonly projectFeatures?: string;
    readonly companyFiles: Array<ProjectFile>;
    readonly companyLinks?: string;
    readonly mortgageRank?: string;
    readonly loanPurpose: string;
    readonly industry?: string;
}
