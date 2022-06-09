import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { PostType } from "../types/interface";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Post = (props: any) => {
  const navigate = useNavigate();
  const postData: PostType = props.postData;
  const dateCreated = new Date(postData.created_at);
  const dateFormated = `${(dateCreated.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${dateCreated
    .getDate()
    .toString()
    .padStart(2, "0")}/${dateCreated
    .getFullYear()
    .toString()
    .padStart(4, "0")} ${dateCreated
    .getHours()
    .toString()
    .padStart(2, "0")}:${dateCreated
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${dateCreated.getSeconds().toString().padStart(2, "0")}`;

  return (
    <Card sx={{ maxWidateCreatedh: 345 }}>
      <CardActionArea
        onClick={() => {
          navigate(postData.user?.id ? `user/${postData.user?.id}` : "");
        }}
      >
        <CardHeader
          avatar={<Avatar></Avatar>}
          title={postData.user?.username ?? "Anonymous"}
          subheader={dateFormated}
        />
      </CardActionArea>
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          {postData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {postData.content}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default Post;
