import { useState, useEffect } from 'react';

const useGitHubStats = (username = 'rushdv') => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGitHubStats = async () => {
            try {
                // Fetch user data
                const userRes = await fetch(`https://api.github.com/users/${username}`, {
                    headers: {
                        'Accept': 'application/vnd.github.v3+json'
                    }
                });
                const userData = await userRes.json();

                // Fetch repos
                const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
                    headers: {
                        'Accept': 'application/vnd.github.v3+json'
                    }
                });
                const reposData = await reposRes.json();

                // Calculate statistics
                let totalStars = 0;
                let totalForks = 0;
                const languageStats = {};

                reposData.forEach(repo => {
                    if (!repo.fork) {
                        totalStars += repo.stargazers_count || 0;
                        totalForks += repo.forks_count || 0;
                        if (repo.language) {
                            languageStats[repo.language] = (languageStats[repo.language] || 0) + 1;
                        }
                    }
                });

                // Get top languages
                const topLanguages = Object.entries(languageStats)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 5)
                    .map(([lang, count]) => ({
                        name: lang,
                        percentage: 0 // Will be calculated
                    }));

                const totalLanguageCount = Object.values(languageStats).reduce((a, b) => a + b, 0);
                topLanguages.forEach(lang => {
                    lang.percentage = Math.round((languageStats[lang.name] / totalLanguageCount) * 100);
                });

                setStats({
                    totalStars,
                    totalForks,
                    totalRepos: userData.public_repos,
                    contributions: userData.followers, // Approximate
                    languages: topLanguages,
                    followers: userData.followers,
                    following: userData.following,
                    location: userData.location,
                    bio: userData.bio,
                    avatarUrl: userData.avatar_url
                });
                setLoading(false);
            } catch (err) {
                console.error('Failed to fetch GitHub stats:', err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchGitHubStats();
    }, [username]);

    return { stats, loading, error };
};

export default useGitHubStats;
