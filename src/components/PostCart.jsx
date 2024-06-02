// import React from 'react';
// import appwriteService  from "../appwrit/confing"
// import { Link } from 'react-router-dom';

// function PostCart({$id, title, featureImage}) {
//   return (
//     <Link to={`/post/${$id}`}>
//   <div className='w-full bf-gray-100 rounded-xl p-4'>
//   <div className='w-full justify-center mb-4'>
//     <img src={appwriteService.getFilePreview(featureImage)}
//     alt="{title}" className=' rounded-lg' />

//   </div>
//   <h2 className='text-xl font-bold'>{title}</h2>
//   </div>
//     </Link>
//   );
// }

// export default PostCart;

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import appwriteService from "../appwrit/confing";

function PostCart({ $id, title, featuredImage = "" }) {
  // Check if featureImage is provided and generate the preview URL
  const imageUrl = featuredImage
    ? appwriteService.getFilePreview(featuredImage)
    : "";

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        {imageUrl && (
          <div className="w-full justify-center mb-4">
            <img src={imageUrl} alt={title} className="rounded-lg" />
          </div>
        )}
        <h2 className="text-xl font-bold">{title}</h2>
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
