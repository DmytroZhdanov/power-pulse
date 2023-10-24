export const selectUserAvatars = state => state.auth.user.avatarUrls;
export const selectUserRegistrationDate = state => state.auth.user.createdAt;
export const selectToken = state => state.auth.token;
