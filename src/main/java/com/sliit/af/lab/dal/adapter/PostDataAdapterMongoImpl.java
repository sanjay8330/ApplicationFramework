package com.sliit.af.lab.dal.adapter;

import com.sliit.af.lab.dal.model.PostModel;
import com.sliit.af.lab.dal.repository.PostMongoRepository;
import com.sliit.af.lab.domain.Post;
import com.sliit.af.lab.domain.PostDataAdapter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class PostDataAdapterMongoImpl implements PostDataAdapter {

    private final PostMongoRepository repository;
    private final MongoTemplate mongoTemplate;

    @Autowired
    public PostDataAdapterMongoImpl(PostMongoRepository postMongoRepository, MongoTemplate mongoTemplate){
        this.repository = postMongoRepository;
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public Post save(Post post) {
        PostModel postModel = new PostModel();
        postModel.setName(post.getName());
        postModel.setDescription(post.getDescription());
        postModel.setPostedDate(post.getPostedDate());

        postModel = repository.save(postModel);
        post.setId(postModel.getId());

        return post;
    }

    @Override
    public List<Post> getAll() {
        List<PostModel> postModels = repository.findAll();
        List<Post> posts = new ArrayList<>();
        for (PostModel postModel : postModels) {
            Post post = new Post();
            post.setId(postModel.getId());
            post.setName(postModel.getName());
            post.setDescription(postModel.getDescription());
            post.setPostedDate(postModel.getPostedDate());
            posts.add(post);
        }
        return posts;

    }

    @Override
    public void delete(String id) {
        repository.deleteById(id);
        System.out.println("Deleted Successfully");
    }

    @Override
    public Post update(Post post) {
        PostModel postModel = mongoTemplate.findAndModify(Query.query(Criteria.where("id")
                .is(post.getId())), new Update()
                .set("name",post.getName())
                .set("description", post.getDescription()),
                PostModel.class);
        post.setPostedDate(postModel.getPostedDate());
        return post;
    }
}
