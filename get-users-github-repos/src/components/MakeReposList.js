import React from "react";
import uuidv1 from  'uuid/v1';

function MakeReposList(props) {
    return (
        <div className="repos-list">
            {props.repos.map((repo, i) => {
                return (
                    <div className="repo-row" key={uuidv1()} >
                        <div className="user-repo-name">
                            <a href={repo.svn_url} target="_blank" className="repo-name">{repo.name}</a>
                        </div>
                        <div className="repo-desription">{repo.description ? repo.description : "Description not provided"}</div>
                        <div className="created-at">Created at: {new Date(repo.created_at).toLocaleDateString()}</div>
                    </div>
                );
            })}
        </div>
    );
}

export default MakeReposList;
