import { model, Schema } from 'mongoose';

export interface IArticles {
  title: {
    type: string;
    required: boolean;
    unique: boolean;
  };
  content: {
    type: string;
    required: boolean;
  };
  img: {
    type: string;
    required: boolean;
  };
  createdAt: {
    type: Date;
    required: boolean;
  };
  updatedAt: {
    type: Date;
    required: boolean;
  };
}

export const objectSchema = new Schema<IArticles>({
  title: {
    type: String,
    required: Boolean,
    unique: Boolean,
  },
  content: {
    type: String,
    required: Boolean,
  },
  img: {
    type: String,
    required: Boolean,
  },
  createdAt: {
    type: Date,
    required: Boolean,
  },
  updatedAt: {
    type: Date,
    required: Boolean,
  },
});

export const Articles = model<IArticles>('Articles', objectSchema);
