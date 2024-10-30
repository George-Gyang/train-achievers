import { Button, Card, Typography } from "@material-tailwind/react";
import AssignAdmin from "./AssignAdmin";

const TABLE_HEAD = ["First Name", "Last Name", "Phone", "Mail", "Role", ""];

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

export default function UsersTable({ data, setGetAllUsers }) {
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
                    {data?.map(({ firstName, lastName, phone, email, role, id }, index) => (
                        <tr key={index} className="even:bg-blue-gray-50/50">
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {firstName}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {lastName}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {phone}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {email}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {role}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <AssignAdmin
                                id={id}
                                 setGetAllUsers={setGetAllUsers} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}