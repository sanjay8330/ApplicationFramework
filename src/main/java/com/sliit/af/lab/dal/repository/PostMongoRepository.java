package com.sliit.af.lab.dal.repository;

import com.sliit.af.lab.dal.model.PostModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostMongoRepository extends MongoRepository<PostModel, String> {
}
