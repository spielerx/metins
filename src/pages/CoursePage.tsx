import { Container, Stack, Typography } from "app/ui";
import { useGetCourseQuery } from "modules/courses/courseApi";

export default function CoursePage() {
  const { data, isLoading } = useGetCourseQuery(1);

  return (
    <Container>
      {isLoading ? (
        <Typography>Fetching data</Typography>
      ) : (
        <Stack>
          <Typography component="h1" variant="h3">
            {data?.title}
          </Typography>
        </Stack>
      )}
    </Container>
  );
}
