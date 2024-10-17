require('dotenv').config();
const express = require('express');
const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const AdminJSMongoose = require('@adminjs/mongoose');
const { mongoose, dbConnection } = require('./utils/mongoDB');
const { Article } = require('./schemas/article_entity');
const MongoStore = require('connect-mongo');
const morgan = require('morgan');
const session = require('express-session');

const PORT = 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
});

const DEFAULT_ADMIN = {
  email: 'admin@gtt.com',
  password: 'admin',
};

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};

const start = async () => {
  await mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log('MongoDB connected'));
  const app = express();

  const adminOptions = {
    resources: Article,
    databases: [mongoose],
  };

  const admin = new AdminJS(adminOptions);

  const sessionStore = app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: true,
      saveUninitialized: true,
      store: MongoStore.create({
        mongoUrl: process.env.DATABASE_URL,
        saveUninitialized: true,
        resave: true,
        secret: process.env.SESSION_SECRET,
        ttl: 60 * 60 * 24,
        autoRemove: 'native',
      }),
    })
  );

  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
      authenticate,
      cookieName: 'adminjs',
      cookiePassword: process.env.COOKIE_SECRET,
    },
    null,
    {
      store: sessionStore,
      resave: true,
      saveUninitialized: true,
      secret: process.env.SESSION_SECRET,
      cookie: {
        secret: process.env.COOKIE_SECRET,
        httpOnly: process.env.NODE_ENV === 'production', // serve only over https
        secure: process.env.NODE_ENV === 'production',
        expires: 60 * 60 * 24, // 1 day
      },
      name: 'adminjs',
    },
    { secret: process.env.SESSION_SECRET }
  );

  app.use(admin.options.rootPath, adminRouter);

  app.listen(PORT, () => {
    console.log(
      `AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`
    );
  });
};

dbConnection().then(() => {
  start();
});
