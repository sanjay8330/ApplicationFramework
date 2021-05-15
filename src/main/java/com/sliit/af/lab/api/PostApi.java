package com.sliit.af.lab.api;

import com.sliit.af.lab.domain.Post;
import com.sliit.af.lab.domain.PostDataAdapter;
import com.sliit.af.lab.dto.PostDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

@Service
public class PostApi {

    private Map<String, Post> posts;
    private final PostDataAdapter postDataAdapter;

    @Autowired
    public PostApi(PostDataAdapter postDataAdapter){
        this.posts = new HashMap<>();
        this.postDataAdapter = postDataAdapter;
    }
    /**
    public List<Post> getAllPosts(){
        return new ArrayList<>(posts.values());
    }
    */

    public List<Post> getAllPosts(){
        return postDataAdapter.getAll();
    }

    public Post addPost(Post post){
        post.setPostedDate(LocalDateTime.now());
        postDataAdapter.save(post);
        return post;
    }

    /**
    public Post addPost(Post post){
        post.setId(UUID.randomUUID().toString());
        posts.put(post.getId(),post);
        return post;
    }
    */
    /*
    //Delete a post
    public void deletePost(String id){
       posts.remove(id);
    }
    */

    public void deletePost(String id){
        postDataAdapter.delete(id);
    }

    /*
    //Update a post
    public Post updatePost(Post post){
        posts.put(post.getId(), post);
        return post;
    }
    */

    public Post updatePost(Post post){
        return postDataAdapter.update(post);
    }

    //Get the selected post
    public Post getPost(String id){
        return posts.get(id);
    }
}
