import { User } from "../models/user.model.js";
import { fetchFromTMDB } from "../services/tmdb.service.js";

export async function searchPerson(req, res) {
  const { query } = req.params;
  try {
    const response = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`
    );
    if (response.results.length === 0) {
      return res.status(404).send(null);
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: response.results[0].id,
          title: response.results[0].name,
          image: response.results[0].profile_path,
          searchType: "person",
          createdAt: new Date(),
        },
      },
    });

    res.status(200).json({ success: true, content: response.results });
  } catch (error) {
    console.log("error in searchPerson", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
}

export async function searchMovie(req, res) {
  const { query } = req.params;
  try {
    const response = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
    );
    if (response.results.length === 0) {
      return res.status(404).send(null);
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: response.results[0].id,
          title: response.results[0].title,
          image: response.results[0].poster_path,
          searchType: "movie",
          createdAt: new Date(),
        },
      },
    });

    res.status(200).json({ success: true, content: response.results });
  } catch (error) {
    console.log("error in searchMovie", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
}

export async function searchTv(req, res) {
  const { query } = req.params;
  try {
    const response = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`
    );
    if (response.results.length === 0) {
      return res.status(404).send(null);
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: response.results[0].id,
          title: response.results[0].name,
          image: response.results[0].poster_path,
          searchType: "tv",
          createdAt: new Date(),
        },
      },
    });

    res.status(200).json({ success: true, content: response.results });
  } catch (error) {
    console.log("error in searchTv", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
}

export async function getSearchHistory(req, res) {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).send(null);
    }
    res.status(200).json({ success: true, content: user.searchHistory });
  } catch (error) {
    console.log("error in getSearchHistory", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
}

export async function deleteSearchHistory(req, res) {
  let { id } = req.params;
  id = parseInt(id);
  console.log(typeof (id));

  try {
    const user = await User.findByIdAndUpdate(req.user._id, {
      $pull: {
        searchHistory: { id: id },
      },
    });
    res
      .status(200)
      .json({ success: true, message: "item deleted from search history" });
  } catch (error) {
    console.log("error in deleteSearchHistory", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
}
