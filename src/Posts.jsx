import { FaMeta } from "react-icons/fa6";

async function obtenerPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export const Post = () => {
  return (
    <button
      onClick={() => {
        obtenerPosts();
      }}
    >
      <FaMeta /> Traer Datos
    </button>
  );
};

// () => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((data) => console.log(data))
//       .catch((error) => console.error(error));
//   }
