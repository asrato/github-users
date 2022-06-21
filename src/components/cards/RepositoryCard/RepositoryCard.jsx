import React from "react";
import './styles.css';

// >name: {repo.name} || url: {repo.html_url} || stars: {repo.stargazers_count} || lang: {repo.language}

const RepositoryCard = ({ username, repository }) => {
    return (
        <a className="repo-card" href={repository.html_url} target={'_blank'}>
            <div className="repo-card-title">
                <div className="repo-card-subtitle">
                    {repository.language != null ? <p className="repo-card-language">{`[${repository.language}]`}</p> : ''}
                    <p className="repo-card-name">{`${username}/${repository.name}`}</p>
                </div>
                <div className="repo-card-stars-container">
                    <p className="repo-card-stars-number">{repository.stargazers_count}</p>
                    <p className="repo-card-stars-icon">&#9733;</p>
                </div>
            </div>
            <p className="repo-card-description">{repository.description != null ? repository.description : <>&nbsp;</>}</p>
        </a>
    )
};

export default RepositoryCard;