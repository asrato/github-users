import React, { useEffect, useState } from 'react';
import './styles.css';
import { getNumberOfRepositories, getUserInfo } from '../../../utils';
import RepositoryCard from '../../cards/RepositoryCard/RepositoryCard';
import Search from '../../input/Search/Search';
import Loading from '../../extras/Loading/Loading';
import Footer from '../../extras/Footer/Footer';

const Home = () => {
    const [username, setUsername] = useState('asrato');
    const [userInfo, setUserInfo] = useState();
    const [userRepositories, setUserRepositories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [userFound, setUserFound] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const info = await getUserInfo(username);
            if (await info != null) {
                setUserInfo(await info);
                setUserRepositories(await getNumberOfRepositories(username));
                setUserFound(true);
            } else {
                setUserFound(false);
            }
            setIsLoading(false);
        }

        fetchData();
    }, []);

    const onSearch = (value) => {
        setIsLoading(true);

        setUsername(value);

        const fetchData = async () => {
            const info = await getUserInfo(value);
            if (await info != null) {
                document.title = `${value} @ GitHub (by asrato)`
                setUserInfo(await info);
                setUserRepositories(await getNumberOfRepositories(value));
                setUserFound(true);
            } else {
                document.title = `Not Found @ GitHub (by asrato)`
                setUserFound(false);
            }
            setIsLoading(false);
        }

        fetchData();
    };

    const repos = userRepositories.map((repo, index) => (
        <RepositoryCard key={index} username={username} repository={repo} />
    ));

    return (
        <div className="home">
            <div className="home-search-container">
                <Search changer={onSearch} />
            </div>
            <div className="home-content">
                {isLoading ? <Loading />
                    :
                    <>
                        {userFound ?
                            <> <div className="home-left-container">
                                <a href={`https://github.com/${username}`} target={'_blank'} className="home-picture-container">
                                    <img className='home-picture' alt='user-profile-picture' src={`https://avatars.githubusercontent.com/${username}`} />
                                </a>
                                <p className="home-name">{userInfo.name}</p>
                                <p className="home-username">({username})</p>
                                <p className="home-number-of-repos">{userInfo.public_repos} public repositories</p>
                                <p className="home-followers">{userInfo.followers} followers</p>
                                <p className="home-following">{userInfo.following} following</p>
                            </div>
                                <div className="home-repositories-container">
                                    {repos}
                                </div>
                                <> </>
                            </>
                            :
                            <div className="home-user-not-found">
                                <p className="home-user-not-found-text">{`User "${username}" was not found`}</p>
                            </div>}
                    </>}
            </div>
            <div className="home-spacer"></div>
            <Footer />
        </div>
    );
};

export default Home;