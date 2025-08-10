import React from "react";
import prisma from "../../../../prisma/client";
import { notFound } from "next/navigation";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import ReactMarkDown from "react-markdown";

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
      <Card className="prose">
        <ReactMarkDown>{issue.description}</ReactMarkDown>
      </Card>
    </div>
  );
};

export default IssueDetailPage;
