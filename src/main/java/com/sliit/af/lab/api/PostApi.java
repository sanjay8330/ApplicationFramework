package com.sliit.af.lab.api;

import com.sliit.af.lab.domain.Post;
import com.sliit.af.lab.dto.PostDto;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class PostApi {

    private Map<String, Post> posts;

    public PostApi(){
        this.posts = new HashMap<>();
    }
    public List<Post> getAllPosts(){
        return new ArrayList<>(posts.values());
    }
    public Post addPost(Post post){
        post.setId(UUID.randomUUID().toString());
        posts.put(post.getId(),post);
        return post;
    }

    //Delete a post
    public void deletePost(String id){
       posts.remove(id);
    }

    //Update a post
    public Post updatePost(Post post){
        posts.put(post.getId(), post);
        return post;
    }

    //Get the selected post
    public Post getPost(String id){
        return posts.get(id);
    }
}
