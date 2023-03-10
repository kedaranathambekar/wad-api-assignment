import userModel from '../api/users/userModel';
import genreModel from '../api/genres/genresModel';
import users from './users';
import dotenv from 'dotenv';
import genres from './genres';
import movieModel from '../api/movies/movieModel';
import movies from './movies.js';
import popular from './popular.js';
import popularModel from '../api/popular/popularModel';
import topRated from './topRated.js';
import topRatedModel from '../api/topRated/topRatedModel';
dotenv.config();

// deletes all user documents in collection and inserts test data
async function loadUsers() {
  console.log('load user Data');
  try {
    await userModel.deleteMany();
    await users.forEach(user => userModel.create(user));
    console.info(`${users.length} users were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load user Data: ${err}`);
  }
}

async function loadGenres() {
    console.log('load genres Data');
    try {
      await genreModel.deleteMany();
      await genreModel.collection.insertMany(genres);
      console.info(`${genres.length} genres were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
  }
  export async function loadMovies() {
    console.log('load seed data');
    console.log(movies.length);
    try {
      await movieModel.deleteMany();
      await movieModel.collection.insertMany(movies);
      console.info(`${movies.length} Movies were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load movie Data: ${err}`);
    }
  }

  export async function loadPopular() {
    console.log('load seed data');
    console.log(popular.length);
    try {
      await popularModel.deleteMany();
      await popularModel.collection.insertMany(popular);
      console.info(`${popular.length} Movies were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load movie Data: ${err}`);
    }
  }

  export async function loadTopRated() {
    console.log('load seed data');
    console.log(topRated.length);
    try {
      await topRatedModel.deleteMany();
      await topRatedModel.collection.insertMany(topRated);
      console.info(`${topRated.length} Movies were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load movie Data: ${err}`);
    }
  }


if (process.env.SEED_DB) {
  loadUsers();
  loadGenres();
  loadMovies();//ADD THIS LINE
  loadPopular();
  loadTopRated();
}