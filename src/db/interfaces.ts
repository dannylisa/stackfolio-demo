export type PROVIDER = "local" | "google" | "github" | "facebook";

export interface User{
    id: string
    created_at: string
    updated_at: string
    provider: PROVIDER
    social_id: string
    email: string
    is_verified: boolean
}

export interface User_Profile{
    id: string
    created_at: string
    updated_at: string
    username: string
    bio: string
    about: string
    avatar: string

    // What type?
    social_links: any
    user: User
}


export interface Post {
    id: string
    created_at: string
    updated_at: string
    title: string
    contents: string
    user: User
    post_information: Post_Information
    post_metadata_id: Post_Metadata
}

export interface Post_Information {
    id: string
    created_at: string
    updated_at: string
    description: string
    thumbnail: string
    slug: string
}

export interface Post_Metadata{
    id: string
    published_at: string
    published: boolean
    is_private: boolean
}