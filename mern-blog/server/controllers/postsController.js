const Post = require('../models/Post');

exports.getAll = async (req, res, next) => {
  try {
    const posts = await Post.find().populate('category').sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) { next(err); }
};

exports.getOne = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).populate('category');
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const { title, content, category } = req.body;
    const post = new Post({ title, content, category });
    await post.save();
    res.status(201).json(post);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json({ message: 'Deleted' });
  } catch (err) { next(err); }
};
