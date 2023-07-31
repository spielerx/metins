import { Container, Grid, Skeleton, Typography } from "app/ui";
import { useSelectCurrentUser } from "modules/auth/authSlice";
import { Course, useGetCoursesQuery } from "modules/courses/courseApi";
import CourseCard from "modules/courses/components/CourseCard";

export default function DashboardPage() {
  const currentUser = useSelectCurrentUser();
  const { data, isLoading } = useGetCoursesQuery(
    currentUser?.courses as number[]
  );

  return (
    <Container>
      <Typography component="h1" variant="h3" mb={4}>
        My courses
      </Typography>
      <Grid container spacing={4}>
        {isLoading
          ? Array.from(new Array(2)).map((_, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Skeleton variant="rectangular" height={240} />
              </Grid>
            ))
          : data?.map((course: Course) => (
              <Grid item xs={12} md={6} key={course.title}>
                <CourseCard course={course} />
              </Grid>
            ))}
      </Grid>
    </Container>
  );
}
