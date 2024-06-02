// import React, { useState, useEffect } from "react";
// import { Container, PostCart } from "../components";
// import appwritService from "../appwrit/confing";

// function AllPost() {
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {}, [])
//   appwritService.getPosts([]).then((posts) => {
//     if (posts) {
//       setPosts(posts.documents);
//     }
    
//   })
//   return (
//     <div className="w-full py-8">
//       <Container>
//         <div className='flex flex-wrap'>
//                 {posts.map((post) => (
//                     <div key={post.$id} className='p-2 w-1/4'>
//                         <PostCart {...post} />
//                     </div>
//                 ))}
//             </div>
//       </Container>
//     </div>
//   );
// }

// export default AllPost;

import React, {useState, useEffect} from 'react'
import { Container, PostCart } from '../components'
import appwriteService from "../appwrit/confing";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                  <div key={post.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                  <PostCart {...post} />
                </div>
                
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts
