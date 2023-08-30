import DetailedProjectInjector from "@/src/widgets/detailed-project/DetailedProjectInjector";

export default async function ProjectPage({ params }: { params: { uuid: string } }) {
    return <DetailedProjectInjector uuid={params.uuid} />;
}
