import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export default function MaterialCard({ children }) {
    return (
        <Card className="mt-6">
            {children}
        </Card>
    );
}