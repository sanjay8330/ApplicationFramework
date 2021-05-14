package com.sliit.af.lab.domain;

public class Post {
    private String id;
    private String name;
    private String description;

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


}
