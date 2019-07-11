import React from "react";

function ReposList(props) {
  if(props.repos.length === 0) return <p className="error">This user doesn't have any repo</p> 
  return (
    <div className="repos-list">
      {props.repos.map((repo, i) => {
        return (
          <div className="repo-row" key={repo.id}>
            <div className="user-repo-name">
              <a href={repo.svn_url} target="_blank" rel="noopener noreferrer" className="repo-name">
                {repo.name}
              </a>
            </div>
            <div className="repo-desription">
              {repo.description ? repo.description : "Description not provided"}
            </div>
            <div className="created-at">
              Created at: {new Date(repo.created_at).toLocaleDateString()}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ReposList;
