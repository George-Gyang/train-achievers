import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

export default function PopularCourseCard({course}) {
    const navigate = useNavigate();
    console.log(course)
    return (
        <Card className="mt-6">
            <div className="w-full">
                <img
                    className="rounded-t-lg h-[250px] object-cover w-full"
                    src={course.file}
                    alt="card-image"
                />
            </div>
            <CardBody className="px-3 py-4">
                <Typography variant="h5" color="blue-gray" className="mb-2 primary_color">
                    {course.courseTitle}
                </Typography>
                {/* <Typography>
                    The place is close to Barceloneta Beach and bus stop just 2 min by
                    walk and near to &quot;Naviglio&quot; where you can enjoy the main
                    night life in Barcelona.
                </Typography> */}
            </CardBody>
            <CardFooter className="pt-0 text-end p-3">
                <Link className="text-inherit" to={"/practical_course/course/id"}>
                    <Button
                        size="sm"
                        // onClick={() => navigate("/practical_course/course/id")}
                        className="rounded-full w-full secondary_bg transition-all hover:bg-purple-300 normal-case text-base">View Course Content</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}