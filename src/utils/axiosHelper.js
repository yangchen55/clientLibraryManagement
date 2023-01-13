import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1";
const userUrl = rootUrl + "/user";
const bookUrl = rootUrl + "/book";
const transUrl = rootUrl + "/trans";

const getUserIdFromStorage = () => {
  const user = sessionStorage.getItem("user");
  // console.log(user);
  if (user) {
    const userObj = JSON.parse(user);
    // console.log(userObj._id);
    return userObj?._id;
  }
  return;
};

export const postUser = (formData) => {
  try {
    return axios.post(userUrl, formData);
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const loginUser = (formData) => {
  try {
    return axios.post(userUrl + "/login", formData);
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// for the teachers backend dashboard
export const addBook = async (formData) => {
  try {
    const userId = getUserIdFromStorage();
    if (!userId) {
      return {
        status: "error",
        message: "You must be logged in ",
      };
    }

    const { data } = await axios.post(bookUrl, formData, {
      headers: {
        Authorization: userId,
      },
    });
    console.log("from axios", data);
    return data;
    // console.log("iam from axios: book testing")
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// for retreving books
export const viewBook = async () => {
  try {
    const userId = getUserIdFromStorage();
    if (!userId) {
      return {
        status: "error",
        message: "you must be logged in  ",
      };
    }
    const { data } = await axios.get(bookUrl, {
      headers: {
        Authorization: userId,
      },
    });
    // console.log(data)
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const deleteBook = async (id) => {
  try {
    const userId = getUserIdFromStorage();
    console.log("from delete axios testing");
    if (!userId) {
      return {
        status: "error",
        message: "you must be logged in",
      };
    }
    const { data } = await axios.delete(bookUrl, {
      data: { id },
      headers: { Authorization: userId },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// for transaction
export const viewTransaction = async () => {
  try {
    const { data } = await axios.get(transUrl);
    // console.log("from axios view", data);
    return data;
  } catch (error) {
    return {
      status: "error from axios",
      message: error.message,
    };
  }
};

export const addTransaction = async (
  _id,
  bookname,
  isbn,
  studentName,
  author,
  pdate,
  abstract
) => {
  try {
    const userId = getUserIdFromStorage();

    if (!userId) {
      return {
        status: "error",
        message: "You must be logged in ",
      };
    }
    const dta = {
      bookId: _id,
      bookname: bookname,
      isbn: isbn,
      author: author,
      pdate: pdate,
      abstract: abstract,
      studentName: studentName,
    };

    const config = {
      headers: {
        Authorization: userId,
      },
    };
    const { data } = await axios.post(transUrl, dta, config);

    console.log("from axios", data);
    return data;
    // console.log("iam from axios: book testing")
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const deleteBorrowBooks = async (id) => {
  try {
    const userId = getUserIdFromStorage();

    if (!userId) {
      return {
        status: "error",
        message: "you must be logged in",
      };
    }
    const { data } = await axios.delete(transUrl, {
      data: { id },
      headers: { Authorization: userId },
    });
    console.log("from delete axios delete trans testing", data);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
