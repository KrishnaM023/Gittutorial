function createPost() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const post = { content: 'This is a new post' };
            console.log('Post created:', post);
            resolve(post);
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const lastActivityTime = new Date().toLocaleTimeString();
            console.log('Last activity of User:', lastActivityTime);
            resolve(lastActivityTime);
        }, 1000);
    });
}

function deletePost(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Post deleted:', post);
            resolve();
        }, 1000);
    });
}

async function userActivity() {
    try {
        const post = await createPost();
        const lastActivityTime = await updateLastUserActivityTime();
        
        console.log('All posts:', [post]);
        console.log('Last activity time:', lastActivityTime);

        await deletePost(post);

        console.log('Remaining posts:', []);
    } catch (error) {
        console.error('Error:', error);
    }
}

userActivity();