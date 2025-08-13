"use client";
import { Status } from "@/generated/prisma";
import { Select } from "@radix-ui/themes";
import React from "react";

const status: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];
const IssueStatusFilter = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Filter by status..." />
      <Select.Content>
        {status.map((status, index) => (
          <Select.Item
            key={status.value ?? `all-${index}`} // unique key
            value={status.value ?? "ALL"} // non-empty value
          >
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
