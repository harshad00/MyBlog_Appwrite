import React, { useState, useEffect } from 'react';
import appwriteService from '../appwrit/confing';
import appwriteService1 from '../appwrit/auth';
import { Container, PostCart } from '../components';

function Home() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch posts
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });

    // Fetch current user
    appwriteService1.getCurrentUser().then((currentUser) => {
      setUser(currentUser);
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className='w-full py-8 mt-4 text-center'>
        <Container>
          <div className='flex flex-wrap  justify-center'>
            <h1 className='text-2xl font-bold hover:text-gray-500'>
              Login to read posts
            </h1>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div>
      {user && (
        <div className='w-full py-8 mt-4  text-center'>
            <div className='flex flex-wrap px-5 '>
              <h1 className='text-2xl font-bold'>
                Welcome, {user.name}
              </h1>
            </div>
        </div>
      )}
      <div className='flex flex-wrap justify-center'> 
      
        {posts.map((post) => (
         <div key={post.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
         <PostCart {...post} />
       </div>
       
        ))}
      </div>
    </div>
  );
}

export default Home;
