import { Button } from "@radix-ui/themes";
import React from "react";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return <Button color="purple">Delete Issue</Button>;
};

export default DeleteIssueButton;
