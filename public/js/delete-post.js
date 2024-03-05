const deleteFormHandler = async (event) => {
    event.preventDefault();

    // Get post_id from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const post_id = urlParams.get('post_id');

    try {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            throw new Error('Failed to delete project');
        }
    } catch (error) {
        console.error('Error deleting post:', error);
        alert('Failed to delete project');
    }
};

document
    .querySelector('.delete-btn')
    .addEventListener('click', loginFormHandler);