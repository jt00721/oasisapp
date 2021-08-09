import mongoose from "mongoose";

interface PostAttributes {
    message: string;
    date: string;
    userId: string;
}

interface PostDoc extends mongoose.Document {
    message: string;
    date: string;
    userId: string;
}

interface PostModel extends mongoose.Model<PostDoc>{
    build(attrs: PostAttributes): PostDoc;
}

const postSchema = new mongoose.Schema(
    {
        message: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
    },
    {
      toJSON: {
        transform(doc, ret) {
          ret.id = ret._id;
          delete ret._id;
        },
      },
    }
  );

  postSchema.statics.build = (attrs: PostAttributes) => {
    return new Post(attrs);
  };
  
  const Post = mongoose.model<PostDoc, PostModel>('Post', postSchema);
  
  export { Post };
  