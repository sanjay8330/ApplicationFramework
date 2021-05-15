package com.sliit.af.lab.domain;

import java.time.LocalDateTime;

public class Post {
    private String id;
    private String name;
    private String description;
    private LocalDateTime postedDate;

    //Constructors
    public Post() {
    }

    public Post(String id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    //Getters and setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getPostedDate() {
        return postedDate;
    }

    public void setPostedDate(LocalDateTime postedDate) {
        this.postedDate = postedDate;
    }
}
