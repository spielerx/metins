import React from "react";
import { Container, Stack, Typography } from "app/ui";
import { useGetCourseQuery } from "modules/courses/courseApi";
import TopicsTable from "modules/courses/components/TopicsTable";

export default function CoursePage() {
  const [loading, setLoading] = React.useState(false);

  const handleUpdate = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
  };

  const { data } = useGetCourseQuery(1);

  return (
    <Container>
      {data && (
        <Stack spacing={3}>
          <Typography component="h1" variant="h3">
            {data?.title}
          </Typography>
          <TopicsTable
            topics={data?.topics}
            loading={loading}
            onSort={handleUpdate}
            onFilter={handleUpdate}
          />
        </Stack>
      )}
    </Container>
  );
}
