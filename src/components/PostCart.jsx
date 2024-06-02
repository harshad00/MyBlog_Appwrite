
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import appwriteService from "../appwrit/confing";
// import appwriteService1 from "../appwrit/auth";

function PostCart({ $id, title, featuredImage = "" }) {
  // const [user, setUser] = useState('');
  // Check if featureImage is provided and generate the preview URL
  const imageUrl = featuredImage
    ? appwriteService.getFilePreview(featuredImage)
    : "";

    // appwriteService.getCurrentUser().then((currentUser) => {
    //   setUser(currentUser);
    // });

  return (
    <Link to={`/post/${$id}`}>

      <div className="w-full bg-gray-100 rounded-xl p-4 flex flex-wrap">
        {imageUrl && (
          <div className="w-full justify-center mb-4">
            <img src={imageUrl} alt={title} className="rounded-lg" />
          </div>
        )}
        <div className="flex flex-col">
        <h2 className="text-xl font-bold">{title}</h2> 
        {/* <p className=" text-sm px-1 font-semibold "> by {user.name} </p> */}
        </div>
      </div> 





    </Link>
  );
}

PostCart.propTypes = {
  $id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  featureImage: PropTypes.string,
};

export default PostCart;
