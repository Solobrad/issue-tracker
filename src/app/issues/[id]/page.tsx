import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkDown from "react-markdown";
import prisma from "../../../../prisma/client";

interface Props {
  params: Promise<{ id: string }>;
}
const IssueDetailPage = async ({ params }: Props) => {
  const resolvedParams = await params;
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(resolvedParams.id) },
  });

  if (!issue) notFound();
  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex className="space-x-3" my="2">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose" mt="4">
        <ReactMarkDown>{issue.description}</ReactMarkDown>
      </Card>
    </div>
  );
};

export default IssueDetailPage;
