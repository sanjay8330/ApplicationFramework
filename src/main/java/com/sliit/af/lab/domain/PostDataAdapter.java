package com.sliit.af.lab.domain;

import java.util.List;

public interface PostDataAdapter {

    Post save(Post post);
    List<Post> getAll();
    void delete(String id);
    Post update(Post post);
}
