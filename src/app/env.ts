

const env = {
    appwrite: {
        endpoint: String(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT),
        projectID: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
    },
    next: {
        url: process.env.NEXT_PUBLIC_URL,
    }
}

export default env