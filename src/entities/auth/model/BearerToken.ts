export class BearerToken {
    constructor(
        public readonly accessToken: string,
        public accessTokenExpiredAt: Date,
        public readonly refreshToken: string,
        public refreshTokenExpiredAt: Date
    ) {}
}
