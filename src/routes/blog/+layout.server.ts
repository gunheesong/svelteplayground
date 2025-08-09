import { posts } from './data.js';

export function load({ setHeaders, cookies }) {
    const visited = cookies.get('visited');

    cookies.set('visited', 'true',{path: '/blog'});
    setHeaders({
        'Cache-Control': 'max-age=60'
    })
    return {
        visited: visited === 'true',
        summaries: posts.map((post) => ({
            slug: post.slug,
            title: post.title
        }))
    
    }
}