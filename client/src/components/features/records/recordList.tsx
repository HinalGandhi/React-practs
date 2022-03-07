import * as React from "react";
import * as Icon from "react-feather";
import "./records.css";
import { Navbar } from "../../app/Navbar";
import UserProfileCard from "../UserProfileCard/UserProfileCard";
import { useState } from "react";
import { useListPostsQuery } from "../../services/recordApi";
import Pagination from "./pagination";

export function PostsList(): JSX.Element {
  const [page, setPage] = useState(1);
  const [user, setUser] = useState(null);
  const { data: data, isLoading } = useListPostsQuery(page);
  if (isLoading) {
    return < div className="container" > Loading....</div >
  }
  const renderedPosts = data.data.map((post, index): JSX.Element => {
    return (
      <tr key={post.id} className="d-flex align-items-center">
        <td
          className="d-flex userDetails"
          onMouseEnter={() => setUser(post)}
          onMouseLeave={() => setUser(null)}
        >
          <picture>
            <img
              className="profileImg img-fluid img-thumbnail rounded-circle p-0"
              src={post.avatar}
              alt="owner_avatar"
            />
          </picture>
          <div className="row align-content-center ms-0">
            <p className="userName mb-0">
              {post.first_name} {post.last_name}
            </p>
            <p className="userEmail text-secondary mb-0">{post.email}</p>
          </div>
        </td>
        <td className="text-success" style={{ width: "14rem" }}>
          {index === 0 ? (
            "Active"
          ) : (
            <select className="selectMenu form-select">
              <option value="Inactive">Inactive</option>
              <option value="Active">Active</option>
            </select>
          )}
        </td>
        <td className="" style={{ width: "10rem" }}>
          {index === 0 ? (
            "Owner"
          ) : (
            <select className="selectMenu form-select">
              <option value="Inactive">Manager</option>
              <option value="Active">Read</option>
            </select>
          )}
        </td>
        <td>
          {index === 0 ? (
            <Icon.Lock size={18} style={{ color: "rgba(0, 0, 0, 0.6)" }} />
          ) : (
            <Icon.Trash2 size={18} style={{ color: "rgba(0, 0, 0, 0.6)" }} />
          )}
        </td>
      </tr>

    );
  })
  return (
    <div className="d-flex flex-wrap align-items-center container bg-white mt-5">
      <div className="d-flex-row">
        <table
          className="table table-borderless bg-white mr-4"
          style={{ maxWidth: "50%" }}
        >
          <Navbar />
          <tbody className="posts-list">{renderedPosts}</tbody>
        </table>
        {Pagination(setPage, page, data.total_pages)}
      </div>
      {user && <UserProfileCard user={user} />}
    </div>
  );
}


