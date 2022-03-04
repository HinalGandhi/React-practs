import * as React from "react";
import { useSelector } from "react-redux";
import * as Icon from "react-feather";
import "./records.css";
import { RootState } from "../../app/store";
import { Navbar } from "../../app/Navbar";
import UserProfileCard from "../UserProfileCard/UserProfileCard";
import { useState } from "react";
import { useListPostsQuery } from "../../services/recordApi";
import { Button } from "react-bootstrap";

export function PostsList(): JSX.Element {
  const [page, setPage] = useState(1);
  const [user, setUser] = useState(null);
  const { data: data, isLoading, isError } = useListPostsQuery(page);
  console.log(data);
  if (isError) {
    return <div>An error has occurred!</div>
  }
  if (isLoading) {
    return <div>Loading....</div>
  }
  const renderedPosts = data.data.map((post, index): JSX.Element => {
    return (
      <tr key={post.id} className="d-flex align-items-center">
        <td
          className="d-flex userDetails"
          onMouseEnter={React.useCallback(() => setUser(post), [setUser])}
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
        <>
          <Button onClick={() => setPage(page - 1)} >
            Previous
          </Button>
          <Button
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button></>
      </tr>

    );
  })

  return (
    <div className="d-flex flex-wrap align-items-center container bg-white mt-5">
      <table
        className="table table-borderless bg-white mr-4"
        style={{ maxWidth: "50%" }}
      >
        <Navbar />
        <tbody className="posts-list">{renderedPosts}</tbody>
      </table>
      {user && <UserProfileCard user={user} />}
    </div>
  );
}
