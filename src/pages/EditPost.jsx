
import React,{useEffect, useState} from 'react';
import {Container, PostForm}  from '../components';
import appwritService from '../appwrit/confing'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigale = useNavigate()
    useEffect(() => {
        if(slug){
            appwritService.getPost(slug).then((post) => {
              if(post){
                setPosts(post)
              }
            })
        } else{
            navigale('/')
        }
    }, [slug, navigale] )         
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>

    </div>


  ) : null
}

export default EditPost;
