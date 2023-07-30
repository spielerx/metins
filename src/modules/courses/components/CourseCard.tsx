import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "app/ui";
import { Course } from "../courseApi";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <CardActionArea component="a" href="#">
      <Card sx={{ display: "flex" }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5">
            {course.title} #{course.id}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {course.topics.length} topics
          </Typography>
          <Typography variant="subtitle1" color="primary">
            Continue reading...
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          sx={{ width: 160, display: { xs: "none", sm: "block" } }}
          image={course.image}
          alt={course.title}
        />
      </Card>
    </CardActionArea>
  );
}
