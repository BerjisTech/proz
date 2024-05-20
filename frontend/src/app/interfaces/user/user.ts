export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string
    profileImage: string;
    dateJoined: string;
    lastLogin: string;
    isStaff: boolean;
    isActive: boolean;
    isSuperuser: boolean;
    isVerified: boolean;
    isAnonymous: boolean;
    isModerator: boolean;
    isSuspended: boolean;
    isBanned: boolean;
    isDeleted: boolean;
    isBlocked: boolean;
    isReported: boolean;
    isMuted: boolean;
}
