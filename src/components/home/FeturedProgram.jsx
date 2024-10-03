import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { FaVideo } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function FeaturedProgram({ each }) {
    const navigate = useNavigate();
    return (
        <Card className="mt-6 w-full border ">
            <CardBody>
                <div className="flex primary_color mb-2 justify-center">
                    {each.icon}
                </div>
                <Typography variant="h5" className="secondary_color mb-2">
                    {each.title}
                </Typography>
                <Typography>
                    {each.summary}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button className="custom_btn primary_bg hover_effect" onClick={() => navigate(`/${each.route}`)}>Read More</Button>
            </CardFooter>
        </Card>
    );
}