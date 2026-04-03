export const getBlogs = () => {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem("blogs");
  return data ? JSON.parse(data) : [];
};

export const saveBlogs = (blogs: any[]) => {
  localStorage.setItem("blogs", JSON.stringify(blogs));
};