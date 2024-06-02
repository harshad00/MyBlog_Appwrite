import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrit/confing";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingD, setLoadingD] = useState(false);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    setLoadingD(true);
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      } else {
        setLoadingD(false);
      }
    });
  };

  const handleEdit = () => {
    setLoading(true);
    navigate(`/edit-post/${post.$id}`);
  };

  return post ? (
    <div className="py-8 h-screen overflow-scroll">
      <Container> 
        
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6 ">
                            <Button bgColor="bg-green-500" className="mr-3 w-[100px]" onClick={handleEdit} disabled={loading}>
                                {loading ? "Loading..." : "Edit"}
                            </Button>
                            <Button bgColor="bg-red-500" onClick={deletePost} className="w-[100px]" disabled={loading}>
                                {loadingD ? "Loading..." : "Delete"}
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6 flex justify-center flex-col items-center ">
                    <h1 className="text-2xl font-bold ">{post.title}</h1>
                    <div className="w-[50%] h-[2px] bg-black m-1" ></div>
                </div>
                <div className=" border rounded-sm px-3 p-3 text-justify ">
                   
                    {parse(post.content)}
                </div>
            </Container> 
    </div>
  ) : null;
}
