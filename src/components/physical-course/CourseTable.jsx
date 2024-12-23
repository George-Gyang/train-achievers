import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Date", "Time", "Venue", "Course", "Type",];

const TABLE_ROWS = [
    {
        date: "23/04/18",
        time: "9:30",
        venue: "Epson",
        place: 1,
        cost: "£225.00",
    },
    {
        date: "23/04/18",
        time: "9:30",
        venue: "Epson",
        place: 2,
        cost: "£225.00",
    },
    {
        date: "23/04/18",
        time: "9:30",
        venue: "Epson",
        place: 3,
        cost: "£225.00",
    },
    {
        date: "23/04/18",
        time: "9:30",
        venue: "Epson",
        place: 4,
        cost: "£225.00",
    },
];

export default function CourseTable({data}) {
    return (
        <Card className="h-full w-full overflow">
            <table className="w-full min-w-max table-auto text-left">
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
                    {data?.map(({ date, time, venue, courseTitle, type }, index) => (
                        <tr key={index} className="even:bg-blue-gray-50/50">
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {date}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {time}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {venue}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {courseTitle}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {type}
                                </Typography>
                            </td>
                            {/* <td className="p-4">
                                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                    Edit
                                </Typography>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}