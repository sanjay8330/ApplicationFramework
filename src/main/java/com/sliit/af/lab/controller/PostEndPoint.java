package com.sliit.af.lab.controller;

import com.sliit.af.lab.api.PostApi;
import com.sliit.af.lab.domain.Post;
import com.sliit.af.lab.dto.PostDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostEndPoint {

    private PostApi postApi;

    @Autowired
    public PostEndPoint(PostApi postApi) {
        this.postApi = postApi;
    }

    @GetMapping
    public List<Post> getPosts(){
        return this.postApi.getAllPosts();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Post addPost(@RequestBody PostDto postDto){
        Post post = new Post();
        post.setName(postDto.getName());
        post.setDescription(postDto.getDescription());
        return postApi.addPost(post);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePost(@PathVariable String id){
        System.out.println("The deleted post ID is "+id);
        postApi.deletePost(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public Post updatePost(@PathVariable String id, @RequestBody PostDto postDto){
        Post updatePost = postApi.getPost(id);

        //Check if the requested post is available
        if(updatePost==null){
            System.out.println("The requested Post is not available in the list of posts!!");
        }

        updatePost.setName(postDto.getName());
        updatePost.setDescription(postDto.getDescription());
        updatePost.setId(id);

        return postApi.updatePost(updatePost);
    }
}
