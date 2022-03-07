import * as PostsModel from "../models/posts.model";

// Responsible for fetching all posts from a profile
export const getAll = async (_request, response) => {
  response.json({
    posts: await PostsModel.getAll(),
  });
};

// Responsible for creation of a new post for a provided user ID
export const createOne = async (_request, response) => {
  const postsData = _request.body;
  const post = await PostsModel.createPosts({
    message: postsData.message,
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: postsData.authorId,
  });
  response.status(201).json(post);
};

// responsible for finding one post from it's id 
export const findOne = async (_request, response) => {
  const id = _request.params.id;

  response.json({
    post: await PostsModel.getById(Number(id)),
  });
};

// Responsible for finding multiple posts
export const findMany = async (_request, response) => {
  const id = _request.params.id;

  response.json({
    post: await PostsModel.getByAuthorId(id),
  });
};

// Responsible for allowing the update of a post
export const updateOne = async (_request, response) => {
  const postsData = _request.body;
  const { id } = _request.params;

  const posts = await PostsModel.updateById({
    id: Number(id),
    message: postsData.message,
    updatedAt: new Date(),
  });
  response.json({ posts });
};

// Reponsible for deletion of a post from it's id
export const deleteOne = async (_request, response) => {
  const { id } = _request.params;
  if (!Number.isInteger(+id)) {
    response.json({ error: "ID not provided" });
  } else {
    const result = await PostsModel.deleteById(Number(id));
    response.json({});
  }
};
