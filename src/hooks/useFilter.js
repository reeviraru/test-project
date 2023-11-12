export const useFilter = (posts, filter) => {
    if (filter.length === 0) {
        return posts;
    }

    const postsCopy = [];
    for (let i = 0; i < filter.length; i++) {
        posts
            .map(function(item) {
                if (item.tags.includes(filter[i]) && !postsCopy.includes(item)) {
                    postsCopy.push(item)
                }
            })
    }
    return postsCopy;
}