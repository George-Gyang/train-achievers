import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Course Title", "Summary", ""];

const TABLE_ROWS = [
    {
        date: "23/04/18",
        time: "9:30",
        venue: "Epson",
        place: 8,
        cost: "£225.00",
    },
    {
        date: "23/04/18",
        time: "9:30",
        venue: "Epson",
        place: 8,
        cost: "£225.00",
    },
    {
        date: "23/04/18",
        time: "9:30",
        venue: "Epson",
        place: 8,
        cost: "£225.00",
    },
];

export default function AdminCourseTable({ getAllCourse }) {
    return (
        <Card className="h-full w-full overflow">
            <table className="w-full table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {getAllCourse?.map((course) => (
                        <tr key={course.id} className="even:bg-blue-gray-50/50">
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {course.courseTitle}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {course.summary}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                    Edit
                                </Typography>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}